import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Feed } from "./screens/Feed";
import { Studio } from "./screens/Studio";
import { Discover } from "./screens/Discover";
import { Challenges } from "./screens/Challenges";
import { Profile } from "./screens/Profile";
import { BottomNav } from "./components/BottomNav";
import { TopNav } from "./components/TopNav";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL || "");

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <Router>
        <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-background">
          <TopNav />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <BottomNav />
        </div>
      </Router>
    </ConvexProvider>
  );
}
