import { Sparkles, Maximize, Timer, Zap, ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";
import { enhancePrompt } from "@/src/lib/gemini";

const STYLES = [
  { id: "cinematic", name: "Cinematic", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAg2-t88NeuqjFvHs9G8tqNzuK6nfsnzLizR_udhqdRdVeQfZejosYOYAOqQiNaASBk7B4R1z9eZfWCZjY-iEEDOOm7BwxWpH_Yut_yDAuoNZ0oOAcrFFMlCwvhHkyiUa7CQtXgdzmCJF1UIsM9ZPx4yd-3X7WegMKAqjN_pSdfhWdBCxxbBDAUspZl3iq7HOr-ED3ehfeVwgcjI_wrbbbaGoWPAAkBEDQUAe-ORfUhwdoE9_6HlMzF2fj3WSGA5GG8Qr69UTXY2io" },
  { id: "anime", name: "Anime", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHQeIeMnAf8jx27O4E9NQgDeeIiIX2qIwLUAf76i0sLYuaCNKfk55_cXWfQj4KFWAg4y3e89JRhnvPE281S_m0-3j_Rrrex5P1IYrNxukTyx2WJS89aXO_24c-sMaCGnxCGhOiE5cDNf0XktAvrpzaqigQvEBG4AMq1BzgO9wag_ORT9q-yMhcF_Uoc2nsCDcr0zEdgZGFP7z1YI5ddnzOZIvzZTjx_uvr5u8Z8eQP9LDcvQ5JA3jiA7RCUZJK6WDVzoS5BBIZBnk" },
  { id: "action", name: "Action", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkCCQDe7amauJH_dh2afUz61wYQXBuqjMLxnEiUWth1fQJuX8aOm0FmYlhvIZ7VSlHc1XcxfFieRSIdGbUe2Yt_WIkoA8S5EIzc0NIYSKTe80zPuVIJtkN-7B5adfTJlHaO2lbdedUQEf1AjnFlDG1nta1ybaUNVTbMWAnXvYXS6vW4fr9310jEhQwUCNl9xnNHiHnDSFQrkdmjGlaqyNvYy0LxLKr2JBc7rXMM7FvLgxlddYmzznfTNY8xnufM4j08GFMn2Z7UTM" },
  { id: "fantasy", name: "Fantasy", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYv1OxqdUiInQf-yEsiPWgdyKU5OdoFLJXN1JuZt0_MIyCO1nAFXrZnyRFj0iiM615O92Nq6rp6jeh_f2lYT-JqIGMVvGblVUOkosbyDVLcoDv6pQx17mWIQEA5iX780cZ-fFdva_5abSrmRGc034jUowN_7AAJYULj9dsjjf-g7aklUzbAX7g5iK5zkEkhW1R2je3bIMkCm2rTlJyiGSTyI_QBG0mXvqv-EHB4tVyqtS1MF88kbCRM3qyOaYZopAjLBJF4ssfYF0" },
];

export function Studio() {
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [prompt, setPrompt] = useState("");
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleEnhance = async () => {
    if (!prompt || isEnhancing) return;
    setIsEnhancing(true);
    const enhanced = await enhancePrompt(prompt);
    setPrompt(enhanced);
    setIsEnhancing(false);
  };

  return (
    // ... (rest of the component, updating the AI ENHANCE button)
    <main className="relative min-h-screen pt-20 pb-24 overflow-hidden px-6">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Tabs */}
        <div className="flex justify-center">
          <nav className="inline-flex bg-surface-container-low p-1.5 rounded-full gap-1">
            <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-secondary font-headline text-sm font-bold shadow-sm">
              Text → Video
            </button>
            <button className="px-6 py-2.5 rounded-full text-on-surface/50 hover:text-on-surface font-headline text-sm font-bold">
              Text → Image
            </button>
            <button className="px-6 py-2.5 rounded-full text-on-surface/50 hover:text-on-surface font-headline text-sm font-bold">
              Image → Video
            </button>
          </nav>
        </div>

        {/* Prompt Input */}
        <section className="space-y-4">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-20 group-focus-within:opacity-40 rounded-[2rem] transition-all blur-sm"></div>
            <div className="relative bg-surface-container-high rounded-lg p-6 space-y-4 shadow-2xl">
              <label className="block text-primary text-xs font-label uppercase tracking-widest font-bold">Creative Directive</label>
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-xl font-body placeholder:text-on-surface/20 resize-none leading-relaxed" 
                placeholder="Describe your scene in cinematic detail..." 
                rows={4}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <div className="flex justify-between items-center pt-2">
                <button 
                  onClick={handleEnhance}
                  disabled={isEnhancing || !prompt}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-full transition-all group/btn disabled:opacity-50"
                >
                  {isEnhancing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  )}
                  <span className="font-label text-xs font-bold tracking-tight">
                    {isEnhancing ? "ENHANCING..." : "AI ENHANCE (Gemini)"}
                  </span>
                </button>
                <span className="text-on-surface/30 font-label text-xs">{prompt.length} / 500</span>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Dimension */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-lg font-bold text-on-surface">Visual Dimension</h3>
            <button className="text-secondary text-sm font-medium font-label flex items-center gap-1">
              View All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-2 px-2 no-scrollbar">
            {STYLES.map((style) => (
              <div 
                key={style.id} 
                className="flex-none w-32 space-y-2 cursor-pointer group"
                onClick={() => setSelectedStyle(style.id)}
              >
                <div className={cn(
                  "relative aspect-[4/5] rounded-xl overflow-hidden transition-all duration-300",
                  selectedStyle === style.id ? "ring-2 ring-secondary ring-offset-4 ring-offset-background" : "ring-1 ring-white/10 opacity-70 hover:opacity-100"
                )}>
                  <img src={style.image} alt={style.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  {selectedStyle === style.id && (
                    <div className="absolute bottom-2 left-2 right-2 flex justify-center">
                      <CheckCircle2 className="text-secondary w-5 h-5 fill-current" />
                    </div>
                  )}
                </div>
                <p className={cn(
                  "text-center font-label text-xs",
                  selectedStyle === style.id ? "font-bold text-on-surface" : "font-medium text-on-surface/50"
                )}>{style.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Controls */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-surface-container-low rounded-lg flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
            <div className="flex items-center gap-3">
              <Maximize className="text-primary w-5 h-5" />
              <div>
                <p className="font-headline text-sm font-bold">Aspect Ratio</p>
                <p className="font-label text-xs text-on-surface/40">Cinematic 16:9</p>
              </div>
            </div>
            <ChevronRight className="text-on-surface/20 w-5 h-5" />
          </div>
          <div className="p-4 bg-surface-container-low rounded-lg flex items-center justify-between group cursor-pointer hover:bg-surface-container-high transition-colors">
            <div className="flex items-center gap-3">
              <Timer className="text-primary w-5 h-5" />
              <div>
                <p className="font-headline text-sm font-bold">Duration</p>
                <p className="font-label text-xs text-on-surface/40">5 Seconds (Ultra)</p>
              </div>
            </div>
            <ChevronRight className="text-on-surface/20 w-5 h-5" />
          </div>
        </section>

        {/* Generate Button */}
        <div className="pt-6">
          <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-headline text-lg font-extrabold shadow-[0_8px_32px_rgba(182,160,255,0.3)] flex items-center justify-center gap-3"
          >
            <Zap className="w-5 h-5 fill-current" />
            Generate (5 Coins)
          </motion.button>
          <p className="text-center mt-4 font-label text-xs text-on-surface/30">
            Average generation time: <span className="text-secondary">120s</span>
          </p>
        </div>
      </div>
    </main>
  );
}
