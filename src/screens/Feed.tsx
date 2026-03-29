import { Heart, MessageCircle, Bookmark, Wand2, CircleDollarSign, Share2, Plus } from "lucide-react";
import { motion } from "motion/react";

export function Feed() {
  return (
    <main className="relative h-screen w-full bg-surface-container-lowest overflow-hidden">
      {/* Video Content Placeholder */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_M7C6PDA1A2I9qsxhWhXF91h0fEfhZZWFiBQ3nqk9MMSn0jmkCKbetzFZp6O7LTuqxiIsoB14rDWNSmQPd-enH_17QHiKfYWkx3KUdVHOZGTL5VcO0QUozh42d5jTyJlhh1swjLrhZbighZbK9A2v7xLFkhbJFjEy9UhBS9p31r9L62HhwAhl8hEZ9vRKlacGko2Eun_9_eqXZf_05pNd-JGFR9aCblouEr7RU5uY2j2a5FLCKxj-ENZ9nYHiPpJ0w4dZRnZ3rpM')" }}
      >
        {/* Video Overlay for Text Legibility */}
        <div className="absolute inset-0 video-gradient-overlay"></div>
      </div>

      {/* Right Side Interactive Cluster */}
      <aside className="absolute right-4 bottom-32 flex flex-col items-center gap-6 z-40">
        {/* Creator Avatar */}
        <div className="relative mb-2">
          <div className="w-12 h-12 rounded-full border-2 border-secondary overflow-hidden shadow-lg">
            <img 
              alt="Avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7-1lAhFHg8GlM1QFa7ovuDEY5f4C5XQiFeZELuyShjXdRxYafZ7RQk31-AcOrrNUOPc4lTYirI6kF64YHKV32ziXjUAKdIuULtOzrmdsp6cKrhI07IyHXBtTmbLH9P8wQEmcYN99re8_j2m3FupmfOV9xC7bA9XNd9Q6kNekgZ2NYIXiVa7Cxhx9Q18n1q-kohKvCVTh3mw5y-9pTSX_ZEm5p7WJHquADfGx9IzuDAYMpOZbAzCxmWJNWfIWHBJZaWMmBTrEysx0" 
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-on-primary rounded-full w-5 h-5 flex items-center justify-center">
            <Plus className="w-3 h-3 font-bold" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <Heart className="text-on-surface w-7 h-7 fill-current" />
          </div>
          <span className="text-[12px] font-label font-medium drop-shadow-lg">42.8K</span>
        </div>

        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <MessageCircle className="text-on-surface w-7 h-7 fill-current" />
          </div>
          <span className="text-[12px] font-label font-medium drop-shadow-lg">1,204</span>
        </div>

        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <Bookmark className="text-on-surface w-7 h-7 fill-current" />
          </div>
          <span className="text-[12px] font-label font-medium drop-shadow-lg">Save</span>
        </div>

        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <Wand2 className="text-on-surface w-7 h-7" />
          </div>
          <span className="text-[12px] font-label font-medium drop-shadow-lg">Remix</span>
        </div>

        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <CircleDollarSign className="text-secondary w-7 h-7" />
          </div>
          <span className="text-[12px] font-label font-medium drop-shadow-lg">Reward</span>
        </div>

        <div className="flex flex-col items-center gap-1 group cursor-pointer">
          <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center active:scale-90 transition-transform">
            <Share2 className="text-on-surface w-7 h-7" />
          </div>
          <span className="text-[12px] font-label font-medium drop-shadow-lg">Share</span>
        </div>
      </aside>

      {/* Bottom Content Overlay */}
      <section className="absolute bottom-24 left-0 w-full px-6 flex flex-col gap-4 z-40">
        <div className="max-w-[80%]">
          <h2 className="font-headline font-bold text-xl text-on-surface mb-1 flex items-center gap-2">
            @nebula_creator
            <div className="bg-secondary text-background rounded-full p-0.5">
              <Plus className="w-3 h-3 fill-current rotate-45" />
            </div>
          </h2>
          <div className="glass-panel p-3 rounded-xl mb-4 border border-on-surface-variant/10">
            <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-2">
              Prompt: cinematic shot, hyper-realistic nebula explosion with floating obsidian shards, 8k resolution, volumetric lighting, synthwave color palette...
            </p>
            <button className="text-secondary text-[12px] font-semibold mt-1">Read more</button>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-primary to-primary-dim h-14 rounded-xl flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(182,160,255,0.3)]"
        >
          <Wand2 className="text-on-primary w-5 h-5" />
          <span className="font-headline font-extrabold text-on-primary tracking-tight">USE TEMPLATE</span>
        </motion.button>
      </section>
    </main>
  );
}
