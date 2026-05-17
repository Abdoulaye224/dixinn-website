import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Solutions } from "./components/home/Solutions";
import { Approach } from "./components/home/Approach";
import { Expertise } from "./components/home/Expertise";
import { Vision } from "./components/home/Vision";

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Solutions: Softer, more breathable dark surface */}
        <section id="solutions" className="min-h-screen border-t border-white/5 bg-[#080E17] relative overflow-hidden flex flex-col justify-center">
          {/* Subtle top glow to transition from hero */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[200px] bg-white/[0.02] blur-[100px] pointer-events-none" />
          
          <Solutions />
        </section>

        {/* Approach: Elegant sticky flow */}
        <section id="approach" className="border-t border-white/5 bg-[#0A111C]">
          <Approach />
        </section>
        
        {/* Expertise: Dense, structured */}
        <section id="expertise" className="border-t border-white/5 bg-background">
          <Expertise />
        </section>

        {/* Vision: Brighter/Minimal break */}
        <section id="vision">
          <Vision />
        </section>
      </main>
    </div>
  );
}

export default App;
