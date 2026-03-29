import { Wallet, Star, CreditCard } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export function TopNav() {
  const location = useLocation();
  const path = location.pathname;

  if (path === "/") {
    return (
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-transparent z-50">
        <div className="flex items-center gap-2">
          <Wallet className="text-primary w-5 h-5 fill-current" />
          <span className="text-on-surface font-label text-sm font-semibold tracking-wide">1,250</span>
        </div>
        <nav className="flex items-center gap-8">
          <button className="font-headline font-bold text-lg tracking-tight text-on-surface border-b-2 border-secondary pb-1">For You</button>
          <button className="font-headline font-bold text-lg tracking-tight text-on-surface/60 hover:text-secondary transition-colors">Following</button>
        </nav>
        <div className="flex items-center">
          <Star className="text-primary w-5 h-5 fill-current" />
        </div>
      </header>
    );
  }

  if (path === "/studio") {
    return (
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-transparent z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-sm bg-primary" />
          </div>
          <span className="text-on-surface font-headline font-bold text-lg tracking-tight">Viral Scene</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-on-surface/60 hover:text-secondary transition-colors font-label text-sm font-medium">Feed</Link>
          <button className="text-on-surface border-b-2 border-secondary pb-1 font-label text-sm font-medium">Studio</button>
          <Star className="text-primary w-5 h-5 fill-current" />
        </div>
      </header>
    );
  }

  if (path === "/discover") {
    return (
      <header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-transparent z-50">
        <div className="flex items-center gap-2">
          <Wallet className="text-primary w-5 h-5" />
        </div>
        <h1 className="font-headline font-bold text-lg tracking-tight text-primary">For You</h1>
        <div className="flex items-center gap-4">
          <Star className="text-primary w-5 h-5" />
        </div>
      </header>
    );
  }

  if (path === "/challenges" || path === "/profile") {
    return (
      <header className="fixed top-0 w-full z-50 bg-neutral-950/60 backdrop-blur-xl flex items-center justify-between px-6 h-16 w-full shadow-[0_8px_32px_rgba(182,160,255,0.08)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border border-primary/20">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ZZ22DM1WE48wtG6OHnUstgJPv_MwA80AsxAzpFMGFBA4YcE1ACKde3yYU2k23EeeTqYdRmb0FZVg_EePvIZCNZN1T4eahRkedEUsYWPpwfqdTuXQhDTs62M3i4B54LfJQYNcQQgS4UuUBmksJb9GgNps-wrGmdRpHbiQWXZOJlJNHMQibHbEaeIw7varvXzqjerbwmr_W-zd3SCbvc5jSU9VhycJFCMXGP77VL6uAwFTXrcYLjQKGhG12YvT_eOu1s-2ZLBLoFE" 
              alt="Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-2xl font-black bg-gradient-to-br from-[#b6a0ff] to-[#7e51ff] bg-clip-text text-transparent font-headline tracking-tight">
            {path === "/challenges" ? "Challenges" : "Viral Scene"}
          </span>
        </div>
        <button className="text-primary hover:opacity-80 transition-opacity active:scale-95 duration-200">
          <CreditCard className="w-6 h-6" />
        </button>
      </header>
    );
  }

  return null;
}
