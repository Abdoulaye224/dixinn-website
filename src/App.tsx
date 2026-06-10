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

      <section id="solutions" className="min-h-screen border-t border-border bg-surface relative overflow-hidden flex flex-col justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[200px] bg-foreground/[0.02] blur-[100px] pointer-events-none" />
        <Solutions />
      </section>

      <section id="approach" className="border-t border-primary/30 bg-primary">
        <Approach />
      </section>

      <section id="expertise" className="border-t border-border bg-background">
        <Expertise />
      </section>

      <section id="vision">
        <Vision />
      </section>
    </main>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/224610044372"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.524 5.847L.057 23.882a.5.5 0 0 0 .611.611l6.037-1.467A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.65-.497-5.178-1.367l-.372-.214-3.843.934.952-3.743-.228-.385A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    </a>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent/30 selection:text-foreground">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qeebaro" element={<QeebaroPage />} />
        <Route path="/lawal" element={<LawalPage />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default App;
