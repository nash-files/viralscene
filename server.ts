import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Set COOP headers to allow Firebase Auth popups to communicate back in an iframe
  app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "unsafe-none");
    next();
  });

  // R2 Client Setup
  const r2Client = new S3Client({
    region: "auto",
    endpoint: `https://${process.env.VITE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.VITE_R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.VITE_R2_SECRET_ACCESS_KEY!,
    },
  });

  // API Routes
  app.post("/api/r2/upload-url", async (req, res) => {
    console.log("Received upload-url request:", req.body);
    try {
      const { fileName, contentType } = req.body;
      if (!fileName || !contentType) {
        return res.status(400).json({ error: "fileName and contentType are required" });
      }

      if (!process.env.VITE_R2_BUCKET_NAME || !process.env.VITE_R2_ACCOUNT_ID || !process.env.VITE_R2_ACCESS_KEY_ID || !process.env.VITE_R2_SECRET_ACCESS_KEY) {
        console.error("R2 configuration is incomplete");
        return res.status(500).json({ error: "Storage configuration error" });
      }

      const command = new PutObjectCommand({
        Bucket: process.env.VITE_R2_BUCKET_NAME,
        Key: fileName,
        ContentType: contentType,
      });

      const url = await getSignedUrl(r2Client, command, { expiresIn: 3600 });
      res.json({ url });
    } catch (error: any) {
      console.error("Error generating signed URL:", error);
      res.status(500).json({ error: `Failed to generate signed URL: ${error.message}` });
    }
  });

  // Global error handler
  app.use((err: any, req: any, res: any, next: any) => {
    console.error("Global error handler:", err);
    res.status(500).json({ error: "Internal server error" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
