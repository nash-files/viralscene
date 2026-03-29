import { Verified, CircleDollarSign, Wand2, Rocket, Award, Grid, Layers } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const ACHIEVEMENTS = [
  { id: 1, name: "Top Creator", icon: Award, color: "text-primary", bg: "from-primary/20 to-secondary/20", shadow: "shadow-[0_0_15px_rgba(182,160,255,0.2)]" },
  { id: 2, name: "Remix King", icon: Wand2, color: "text-tertiary", bg: "from-tertiary/20 to-primary/20", shadow: "shadow-[0_0_15px_rgba(255,94,214,0.2)]" },
  { id: 3, name: "Early Adopter", icon: Rocket, color: "text-secondary", bg: "from-secondary/20 to-primary/20", shadow: "shadow-[0_0_15px_rgba(0,227,253,0.2)]" },
];

const CREATIONS = [
  { id: 1, views: "2.4k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlfyw9zMqrIzSVxduZG7eMuHhUjFk_Huj_35K1TWwrsIpk_2nx9wo0hVXwe6bWa6zWnVbfJIvotzRmA5gQ9ypwdFgPpjTvg1tsvIA_BCi5dqHCiWzKn4l_WtHB6gcKBh4HItKyb-WM5s2L-MgFOFTWi477Cj94T7cwFLeT7YJUsZTrHtlyHi21Y7m9RilxbK1f987irXgIIN_69TA2bBKvytcKIq_6iITiNBk-ob4dHVdXEhaNctT11KNhGb2HrEkK3Jzeol8xSUg" },
  { id: 2, views: "8.1k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ8H3TH6rhRASNILhXY-Psl181n9yR0NpN2eb7y8JX1JQP94BGPmg85AIbitoEVe9qiOj1bwMEyBFdt-P4G6v-j07g6BQuCYthyMcmHFCNFcsCyAsYE8IIC7K1pFAFxiHcA58ow4gNVcOvGYvoPb1joXLxUySr4nodlsznMbrPPa6LLYMSxARzZ9Ji5Zv2hEoz_3CjAHvFZGaEUer24Sk-hL1SzqHbtEo664MD8aXJ_yu_1yNCJdz7OwsU50lDOyXjH6eXr3i5E0Q" },
  { id: 3, views: "1.2k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ_J8l_pLsSuRyIaQkndIm8AesmjxuEhgT3LIGzvD8UVuqUpDOaxsRsard25adVx14KbQCjy4Ij3Blo4dW1VHpy-JnsT3M4CrxA_6e0V6vbkz-7LX5_E8ihDuaWONMaxrUpE_FQH1N1i96tEIcB7Chj66MwUYeEuISRKGZ4yRSyInSzDd6GffCx1DXd1UGt26nlrqmWr-M-jedkFbp4kieJqchyefg7YanKfvWWn_AQmQEbdLG9Jvzwdk0PAa5CALYvw1spAu5bns" },
  { id: 4, views: "5.6k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCWrVWFjCPiyY8KVzblDpnguFfvpvh0TNua8Q8I7FrcZCeNACMK71u2XNR1T0_ijtL5pAY1zsM7xWuBi1LWUSvApdrtKvstUTeG6tthb4pL0IeW2hPtKMvPqy_RPGR7SJmGL8xTBCHnsHF4RWSqXtmzi7fUPZm5eo1JMscQZBJ3TzRsQQ6722jxcg8cSIKAdOgDY2Mo9xfh6BzezaHRidvCdW9NqU3ZCd1fU62YbsTOsuijUYt1KaBD-huHLRAxXvWizvb7OUIJzs" },
];

export function Profile() {
  return (
    <main className="pt-20 px-4 max-w-md mx-auto pb-24">
      {/* Header Section: Avatar & Bio */}
      <section className="flex flex-col items-center mt-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary via-secondary to-tertiary rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-28 h-28 rounded-full p-1 bg-background">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg0tvcDJO0jPZ3Fd6_UJFn9qDYS_EmZsGJCBtAESBqoq_jgbDVF8c92oG2NwWuPN1VyAbtAh8-MkYy_zbpKJJOsBCh_wgi_VawtPQCDu0ugQgYTEo8HdTRhRSHCbih7CU34u57gLaefgeN6Lvj8AU6pxjZfMMLEEi1dwDtMBWKlyfTDOPXHzXt1NzdCL4wBHxNzJVW3473raWg0Ar3yE6ijet0Ocw64JV2sX3gubs8Aq2-Sx4ymv2ChYecx3Tc8VRgWwAcKS8B2CM" 
              alt="Avatar" 
              className="w-full h-full rounded-full object-cover border-2 border-surface" 
            />
          </div>
          <div className="absolute bottom-1 right-1 bg-secondary w-6 h-6 rounded-full flex items-center justify-center border-2 border-surface shadow-lg">
            <Verified className="w-3.5 h-3.5 text-background fill-current" />
          </div>
        </div>
        <h1 className="mt-4 text-2xl font-headline font-extrabold tracking-tight">@nebula_creator</h1>
        <p className="text-on-surface-variant text-center mt-2 px-6 text-sm leading-relaxed">
          Architect of digital dreams. 🌌 Creating viral AI aesthetics and kinetic motion templates. 
        </p>
        <button className="mt-6 px-8 py-2.5 bg-surface-container-high border border-outline-variant/30 rounded-full font-label text-sm font-semibold hover:bg-surface-container-highest transition-colors active:scale-95">
          Edit Profile
        </button>
      </section>

      {/* Stats Section */}
      <section className="mt-8 grid grid-cols-3 gap-2 px-2">
        <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center justify-center">
          <span className="text-xl font-headline font-bold text-on-surface">12.8K</span>
          <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-1">Followers</span>
        </div>
        <div className="bg-surface-container-low p-4 rounded-lg flex flex-col items-center justify-center">
          <span className="text-xl font-headline font-bold text-on-surface">432</span>
          <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-1">Following</span>
        </div>
        <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low p-4 rounded-lg flex flex-col items-center justify-center border border-primary/10">
          <div className="flex items-center gap-1">
            <CircleDollarSign className="text-primary w-5 h-5 fill-current" />
            <span className="text-xl font-headline font-bold text-primary">1,250</span>
          </div>
          <span className="text-[10px] font-label uppercase tracking-widest text-primary/70 mt-1">Coins</span>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="mt-10">
        <h3 className="px-2 text-xs font-label uppercase tracking-[0.2em] text-on-surface-variant mb-4">Achievements</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 px-2 no-scrollbar">
          {ACHIEVEMENTS.map((item, index) => (
            <div key={item.id} className="flex-shrink-0 flex flex-col items-center gap-2">
              <div className={cn(
                "w-14 h-14 rounded-full bg-gradient-to-tr flex items-center justify-center border",
                item.bg,
                item.shadow,
                index === 0 ? "border-primary/30" : index === 1 ? "border-tertiary/30" : "border-secondary/30"
              )}>
                <item.icon className={cn("w-6 h-6 fill-current", item.color)} />
              </div>
              <span className="text-[10px] font-label text-on-surface-variant">{item.name}</span>
            </div>
          ))}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/30 grayscale opacity-50">
              <Award className="text-on-surface-variant w-6 h-6" />
            </div>
            <span className="text-[10px] font-label text-on-surface-variant">Elite</span>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="mt-10">
        <div className="flex p-1 bg-surface-container-low rounded-xl mb-6">
          <button className="flex-1 py-2.5 rounded-lg bg-surface-container-high text-secondary text-sm font-semibold shadow-sm flex items-center justify-center gap-2">
            <Grid className="w-4 h-4 fill-current" />
            My Creations
          </button>
          <button className="flex-1 py-2.5 rounded-lg text-on-surface-variant text-sm font-medium hover:text-on-surface transition-colors flex items-center justify-center gap-2">
            <Layers className="w-4 h-4" />
            My Templates
          </button>
        </div>
        
        {/* Bento Grid Content */}
        <div className="grid grid-cols-2 gap-3 mb-12">
          {CREATIONS.map((creation) => (
            <div key={creation.id} className="aspect-[9/16] rounded-lg overflow-hidden relative group">
              <img 
                src={creation.image} 
                alt="Creation" 
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110" 
              />
              <div className="absolute bottom-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-1 text-xs font-label">
                  <Rocket className="w-3.5 h-3.5 fill-current" />
                  {creation.views}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
