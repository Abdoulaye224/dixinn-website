import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/home/Hero";
import { Solutions } from "./components/home/Solutions";
import { Approach } from "./components/home/Approach";
import { Expertise } from "./components/home/Expertise";
import { Vision } from "./components/home/Vision";
import { QeebaroPage } from "./pages/QeebaroPage";
import { LawalPage } from "./pages/LawalPage";

function HomePage() {
  return (
    <main>
      <Hero />

      <section id="solutions" className="min-h-screen border-t border-white/5 bg-surface relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[200px] bg-white/[0.02] blur-[100px] pointer-events-none" />
        <Solutions />
      </section>

      <section id="approach" className="border-t border-white/5 bg-primary">
        <Approach />
      </section>

      <section id="expertise" className="border-t border-white/5 bg-background">
        <Expertise />
      </section>

      <section id="vision">
        <Vision />
      </section>
    </main>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qeebaro" element={<QeebaroPage />} />
        <Route path="/lawal" element={<LawalPage />} />
      </Routes>
    </div>
  );
}

export default App;
