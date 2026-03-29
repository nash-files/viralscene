import { Search, Play, ChevronRight, Verified } from "lucide-react";
import { cn } from "@/src/lib/utils";

const CREATORS = [
  { id: 1, name: "@nebula_edit", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfkGWiteYlN-JlMpX-PDG3AgquQ6No-ruEf_Ze7eHaLT9ZHUf60-UhPdjv43zs_5g8SOiIE6YA4Y_9-SBumiLc3vHI5-pYeui-3qdq5PJMhssJIhsOAdmQTEtFj9Gy9ZKwgShY89bF28kE6WfszHczoR8nfWon0SG1LjDdXFKPJMv77hPWd0-_xRqyydx51AaRwWvncd-x8Q34bY1RTntKkxaMbHDGZRUzRpcEQoyD-jJ5Y3HatxhSSWczKWsY4hWQW-dZGiqU4f8", gradient: "from-primary to-secondary" },
  { id: 2, name: "@cinematic_ai", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKVzO8wGzLWnT_yivR2XxqIZsJlGbsIrbL-eBvqCV_64RekShcl3f0WWU9MXHyshtiXvd5MaCEiJDvHMuLuxLq7InU-51e99QA0cW2EfAqigal-03f4w0QroidTZ_Bhn6EvgnQ_ySpbx8iVO_ZOnYFKyVO2XbmmkYAmFMVeLsv-EsLoiPlU9B9zFdMJqanZMN9tpLjPgsBBz5jMr0wuk0orZxUC8AzqAr0TwBLxJ1CYwtFQdfhn7PM-DQRwJwnYRThQZPtwyX9kVM", gradient: "from-primary-dim to-tertiary" },
  { id: 3, name: "@viral_flow", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGlzH00Uw0X1aKjZ0VVHj9zyVAemB47gQKsBwoJA0PR_g_jKaphXfvVbFflM40v1bKF2cnt6Ij8KR4hLhbUS5Y09UphyI70WN7h8SEZESj6vpPWk6QT_9jVvZ4XEmu5ZxRIMsvX8O46GpqS4bXY7fkpLJEhZZktjpYAJLG-K7rsH0aMxkK30kE1Vt_nPdySAB_0sUYxfhFzJQMhs5EQB_yx_Nh35oJUeo2Mja3VZLoa54RNlFAs6xpUrn5GsagSOgX0KOHj36m-dA", gradient: "from-outline-variant/30 to-outline-variant/30" },
];

const TEMPLATES = [
  { id: 1, name: "Hyper-Space Drift", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBukDaIOua_VdbNixYNcNlHFiH9NS7_TOdcaxLOXKbx4xuKJVaDNdr4qjizZwuY4uwgukGRO-M57BseqEQ_enW2JLNH0ySwv0JmXvYMH5ApgLTSAn_eQzMkNkxVLzhHYHDbCT1A2VlDFMKWGesSfGMzR2Fcwna_E4I_opFg2Ba6HkB78U53myesQVPQ1sfzU5OdecQCReGY4NLUheAi49klspKNzBDJSjtjxkUgq5YfRmMkzU0AsuACpXS6cFuTRsUvqkD-u_jgGXs", views: "1.2M", aspect: "aspect-[3/4]" },
  { id: 2, name: "Liquid Chrome v2", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSbrFPnR4mfDFKSJLNvGKKd_0xo2Cz6t0GPjRUxVm9-yDe63g3SFoLC-AzwMS3jqWnpZUEHEeQ5bpU6fmSA378MLodzJ_uHhG24y7pVM6DKsYlte45tdoH2DIWldKSoEKf2d2REQWAxfOkDgw6fFoUgp3CFwaXL1NavZs0yFspRBNFuYc2XWwrGY95F5dp9JHHtx7zCv_cX9luSdZVexg8JkPoTQJ9NmSXDmX-f3iMLyRkPA4MJId7lLsfkAei6rQAuybjY-h8gBU", views: "840K", aspect: "aspect-[1/1]" },
  { id: 3, name: "Retro Cyberpunk", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMgzkTfNnKunNO0zti1QRMgk6NMLqvgpEY_E00X-hfwZ_0GU_Ac79Qg0Fgt5D3ASMTx_0bFmaP_bZ0clZ1-Qr2uqqgxzK11jPjOc01S2HFN73BGW7_9QndM0U2372c8aRXdGQeAAEn2ujTYpm0E9j2SMRvh8VTH-KB4aWxZvGttUAr5-U4LybL_SqB1wzQOoenxSXOY0KxZur4Vk5cDppIVhNi69wzEw9OyGZ03tPLKG3L7aiX4o7RLnA6V--cUKnJnTgA3ARPFAI", views: "2.5M", aspect: "aspect-[4/5]" },
  { id: 4, name: "Cloud Dreamer", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmG3FXDp28EK0xDsr5bd5Eol7vNFuk2etTxy38Wlyp35EzGnRPwP3KF39mR6ml_bdND27H3SoxpAJdq9eSh9C5yz2bpuUXXTEwnndHuAteleJLH9XCygjNl7VvzIcRg9NHxUV4af_0MLmL6OCr-6DS0lqGASw9myhInTbISfzq_BSN-eqZGpKlW_8H5YmCOxLHg0Gg506tqXhYa6PgN4lHjzenZG8sHN72JliEj1iEudVmSOi7uZlbePUfVbhCJuMyuqSRawrldUY", views: "560K", aspect: "aspect-[3/4]" },
];

export function Discover() {
  return (
    <main className="pt-20 px-4 pb-24">
      {/* Search & Filters */}
      <section className="mb-8">
        <div className="relative w-full mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant w-5 h-5" />
          <input 
            className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant focus:ring-2 focus:ring-primary transition-all" 
            placeholder="Search viral scenes..." 
            type="text"
          />
        </div>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          <button className="px-6 py-2 rounded-full bg-primary text-background font-semibold text-sm whitespace-nowrap">Trending</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm whitespace-nowrap hover:bg-surface-container-low transition-colors">New</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm whitespace-nowrap hover:bg-surface-container-low transition-colors">Following</button>
          <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-medium text-sm whitespace-nowrap hover:bg-surface-container-low transition-colors">AI Studio</button>
        </div>
      </section>

      {/* Featured Creator Carousel */}
      <section className="mb-10">
        <div className="flex justify-between items-end mb-4 px-2">
          <h2 className="font-headline text-xl font-bold tracking-tight">Featured Creators</h2>
          <span className="text-secondary text-sm font-medium">View all</span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {CREATORS.map((creator) => (
            <div key={creator.id} className="flex-shrink-0 w-32 flex flex-col items-center gap-2">
              <div className={cn("w-24 h-24 rounded-full p-1 bg-gradient-to-tr", creator.gradient)}>
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-full h-full rounded-full object-cover border-4 border-background" 
                />
              </div>
              <span className="text-xs font-label text-center font-medium truncate w-full">{creator.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Bento-style */}
      <section className="mb-10">
        <h2 className="font-headline text-xl font-bold tracking-tight mb-4 px-2">Categories</h2>
        <div className="grid grid-cols-2 gap-3 h-64">
          <div className="relative rounded-2xl overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXw3AcI_WU4rZyv-ArTJalcYvC5WseWblnAvQuJ4SE3gG7B4Adz8v5lhaNQ9XWb1WVbGnkCPmxpdRxetbKtXjAKPD0hs35DErsqUEpf3wXatqT2WeAcL9rr-G4nPwHovBBKKx_SJwjkvPjI5mWwD9b7hkilvG5moPwiZynaYTUb5jbLSQhuuFG4HmamAOyXH03OI7CHd_LgrxeVnqzPunsS-H0ph3FqPew1YyfzRhzs7y6JEmeMrNq4akT3VnYaiNUmnv-LrRF_Zg" 
              alt="Cinematic" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <span className="font-headline font-bold text-lg">Cinematic</span>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTK12hYWwJwu7i5IdcjwmAOHxZQks05RTL1cWzye2UGKBVaRODIprqyCp3WzycgzrdV18USSLdc4YR82XQDqNuIgaBPrOMgTJVtpjlhb9QQioPjPjeVTxxVzbf_pnoWkEVbsvgqP6OgrJEAANtutD0flQ-YJZkpa_jesCFBHD75QrHfn3yPSJL8TDnt1KKriELmFXhQSGSbgkYBOYx6Js-N8jjQZv8LTAb0f_GwaQVyZyeOrTYBu4tq3rDrHtrWh1aE0HXioWfLMU" 
                alt="Anime" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                <span className="font-headline font-bold text-sm">Anime</span>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_lE4Zzeqz_QygwCUcWssf5J7J7W3eY1Wboipws2pXODwZwZxZiV_NDpn_Wrb1X6JP9zQZJxNsJNcAIFOKPX78x70-myPkuUEmXPTtuzhzpfCKTokr6iE8tYwEN-S4TOdvcRZ-KX6FOnEjAFJEFHW_FlsOVed96EhQG2Yjwer1GfMhmnM08PmZJ4jagNBOw_PQO0rJRhoX4vswAEE1ma9JctrJkfLY7Bn_sqY6Q1ExQsCDVw3p224XBSG4LfKF5HFTrqArIADnNOY" 
                alt="Comedy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                <span className="font-headline font-bold text-sm">Comedy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Templates */}
      <section className="mb-8">
        <h2 className="font-headline text-xl font-bold tracking-tight mb-4 px-2">Trending Templates</h2>
        <div className="columns-2 gap-3 space-y-3">
          {TEMPLATES.map((template) => (
            <div key={template.id} className="relative rounded-2xl overflow-hidden glass-panel group break-inside-avoid">
              <img 
                src={template.image} 
                alt={template.name} 
                className={cn("w-full object-cover", template.aspect)} 
              />
              <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1">
                <Play className="w-3 h-3 text-secondary fill-current" />
                <span className="text-[10px] font-label font-bold text-on-surface">{template.views}</span>
              </div>
              <div className="p-3 bg-gradient-to-t from-black to-transparent">
                <p className="text-xs font-medium text-on-surface truncate">{template.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
