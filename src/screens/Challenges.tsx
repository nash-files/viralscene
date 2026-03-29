import { Timer, Trophy, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";

const LEADERBOARD = [
  { id: 1, name: "NexusVfx", wins: 42, points: "12.5k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAetnNP4z3AXFG07xTajaJChfywY8834YX5UpSQyjZcOk5tEENvkk_aI7FygkN4UkUMbhvBjLzotCuihHpyYxUG14XqfGX8ywIHMgrk8DtLXbOGaeZskaxc-hnuTThIw8iIYwAT6f5oochWwaS3EovDKt2WJ8-v2TAbZ6yPk6-6m_CsRC322cTdaFz_sHVIB5G6c8yDAMlWSNZzH7qQHsCDAPdDnKr5ML1e4oihnBOMbQG2xEVE2V2YLrECnWYG3qDNi_ikKFK3Mb4" },
  { id: 2, name: "EtherReal", wins: 38, points: "11.2k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9TZ3ci-_uwLemk33u-WyFuMtOnVTPVYvsDIJUgVW1bjZq1trNio_CfrwAql5a8L9fEeAuzRVDmwncquA7VDVsYjOpb6KrOnytiBnzh4PMZQS2UTcNe42sZHgj3tibhM8-WNgcAXf1iqCPjIKJNlXN9E2SctJNEKntWbf7iBhlmO85ZMKu-FwFWKMCo_jp76CsOWZ08kZ9p09_l3Q5weh6auUEnC9zw_k8B7avXgfmx1uq1vUW0a_vqsUQk6lF9T2WoF9olJT6OWM" },
  { id: 3, name: "PixelFlow", wins: 31, points: "9.8k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNFRA9-7Of2UGPk09IGfph0T-2A9HglVTzMsVkMb3Oupacds-yCuEasB1pPmnuQQ97FmhQfexXwE3USZQSJh_8eqW5w9ebsN94QOReiLhDOlCXaA11BotF-mVYS91cx9PSHO0v4aSulvoT33H-jDf2CcXSmE6sGf0hISBRwG4NNpMPUbc1OVaX1dVsimGc7Y3d2R1NgZ-Dsb3e6PlvVD2FJvGzq6CLlj6ozjpS8Ad-68RxXpJDVCkpgfMuQ7yNX4zpS1cc7jytKhU" },
  { id: 4, name: "ZenithAI", wins: 29, points: "8.4k", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-RfgorIKgElYA9FF0gFoIKkx160p4kZyKgH7Ib-6oiTpQFWvpvT1wU_uGBae9C5_oOucCiIAY9H0WInCWfsmQs0dSKzvrvFqSrV8K6h2U0WEBEtzxysg7YcJu7_koPWI6aSrGXzKqrq5NlQQu5EYvv_iYVZf6hg-5h8w6hzmAZ3Gn9NwR7LNtdkZj3_Eym8mrjmatOoSgAU1_ANo9yK5nWKoTUbJ7HopMkrq8Ed98YH0KeMgDghXNasK1Tv9PCfNtFh_Sd-7qmo8" },
];

export function Challenges() {
  return (
    <main className="pt-20 px-4 space-y-8 pb-24">
      {/* Section 1: Active Challenges */}
      <section className="space-y-4">
        <div className="flex justify-between items-end px-2">
          <h2 className="text-xl font-bold font-headline tracking-tight text-on-surface">Active Challenges</h2>
          <span className="text-secondary text-sm font-label uppercase tracking-widest">See All</span>
        </div>
        
        {/* Horizontal Scroll Cards */}
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory no-scrollbar">
          {/* Challenge Card 1 */}
          <div className="flex-none w-80 snap-center rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <img 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGtFd-vC8X05QTEJH0_gbN9fCFZMB7S4p7PDQDaspr31NPE2wtSh62lpyrHq3Fwa2VZ-YZzMEQfljMcBJZH0XkeWSEpzNFk7nCkjPKbumFexErHP98o5U4udUti1wpGnWI1I-XUtBRiFOzRgGVP5OK7_wjh8umhDe7nosQm_iITjGBUo9cygSASpfwSMqgIUIWW7-yNHpqg7m0SgizCRe0cRsIQmTjrtoGGDSSZKS2nmAgaS0OwjXezBiSpKJmwY0YmR1ZcpQ30Wg" 
              alt="Cyberpunk Challenge"
            />
            <div className="absolute top-4 right-4 z-20 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-outline-variant/10">
              <Timer className="text-secondary w-4 h-4" />
              <span className="text-[10px] font-label font-bold text-on-surface tracking-tighter">14:22:05</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20 space-y-3">
              <h3 className="text-2xl font-black font-headline text-white leading-tight">Retro Cyberpunk Challenge</h3>
              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Prize Pool</p>
                  <p className="text-secondary font-bold text-lg">50,000 Coins</p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="bg-primary text-background font-bold px-4 py-2 rounded-full text-xs shadow-[0_0_15px_rgba(182,160,255,0.3)]"
                >
                  Join • 50
                </motion.button>
              </div>
            </div>
          </div>

          {/* Challenge Card 2 */}
          <div className="flex-none w-80 snap-center rounded-lg overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
            <img 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbfTXla2i3M1jocA-l-01YnJ5D0znHUg960UcOeAWV1cfgA1gG7meXcpDUGlvpMnyqIdJV8hTGvbpIC5CTvOA_PqgHE8vFP9wHmML1PLgKKQrb3XEDYMymmQnEx0XF5ELZQKDXZeoN7W0w9nlSTvXgg2Ot5LcbTYG7K_hAMltBz-Eb_UtynC8SDIKw8DILQiErZ38FAU2KzWX15IF2KB1mEVbNAhC_N44LTyshJmFdaMPzY6qaXSU8yZhmzI6aIoyOcRpF_lILEE0" 
              alt="Liquid Motion"
            />
            <div className="absolute top-4 right-4 z-20 glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 border border-outline-variant/10">
              <Timer className="text-primary w-4 h-4" />
              <span className="text-[10px] font-label font-bold text-on-surface tracking-tighter">02:45:12</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20 space-y-3">
              <h3 className="text-2xl font-black font-headline text-white leading-tight">Liquid Motion Master</h3>
              <div className="flex justify-between items-center">
                <div className="space-y-0.5">
                  <p className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Prize Pool</p>
                  <p className="text-primary font-bold text-lg">25,000 Coins</p>
                </div>
                <motion.button 
                  whileTap={{ scale: 0.9 }}
                  className="bg-secondary text-background font-bold px-4 py-2 rounded-full text-xs shadow-[0_0_15px_rgba(0,227,253,0.3)]"
                >
                  Join • 20
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Global Leaderboard */}
      <section className="space-y-6 pb-12">
        <div className="flex justify-between items-end px-2">
          <h2 className="text-xl font-bold font-headline tracking-tight text-on-surface">Global Leaderboard</h2>
          <span className="text-on-surface-variant text-[10px] font-label uppercase tracking-widest">Season 4</span>
        </div>
        <div className="space-y-3">
          {LEADERBOARD.map((user, index) => (
            <div 
              key={user.id} 
              className={cn(
                "flex items-center gap-4 p-4 rounded-lg transition-colors active:bg-surface-container-high",
                index === 0 ? "bg-surface-container-high border border-primary/10" : "bg-surface-container-low"
              )}
            >
              <span className={cn("w-6 text-center font-black font-headline text-xl", index === 0 ? "text-primary" : "text-on-surface-variant")}>
                {index + 1}
              </span>
              <div className="relative">
                <div className={cn("w-12 h-12 rounded-full overflow-hidden p-0.5", index === 0 ? "border-2 border-primary" : "border border-outline-variant/20")}>
                  <img className="w-full h-full object-cover rounded-full" src={user.image} alt={user.name} />
                </div>
                {index === 0 && (
                  <div className="absolute -bottom-1 -right-1 bg-primary text-background w-5 h-5 rounded-full flex items-center justify-center border-2 border-surface-container-high">
                    <Trophy className="w-3 h-3 fill-current" />
                  </div>
                )}
              </div>
              <div className="flex-grow">
                <h4 className="font-bold text-on-surface text-sm">{user.name}</h4>
                <p className="text-[10px] font-label text-on-surface-variant">{user.wins} Challenges Won</p>
              </div>
              <div className="text-right">
                <p className={cn("font-black font-headline", index === 0 ? "text-secondary" : "text-on-surface")}>{user.points}</p>
                <p className="text-[8px] font-label text-on-surface-variant uppercase tracking-tighter">Points</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
