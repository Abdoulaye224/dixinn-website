import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Vision() {
  return (
    <div className="bg-[#F0F4F8] text-[#050B14] selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold tracking-tight mb-8 leading-[1.1]">
            Construire aujourd'hui les fondations de votre{" "}
            <span className="text-primary">résilience numérique.</span>
          </h2>

          <p className="text-xl text-[#4A6380] mb-16 leading-relaxed max-w-2xl mx-auto">
            DixInn' n'est pas qu'un prestataire technologique. Nous sommes votre
            partenaire de long terme, engagé à aligner la technologie sur vos
            véritables enjeux stratégiques et opérationnels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:contact@dixinn.com?subject=Initier une conversation"
              className="group flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-primary hover:bg-navy-clair rounded-md transition-colors w-full sm:w-auto shadow-xl shadow-primary/20 relative overflow-hidden"
            >
              Initier une conversation
              <ArrowRight className="w-4 h-4" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:contact@dixinn.com"
              className="flex items-center justify-center px-8 py-4 text-sm font-medium text-[#0B1B3D] hover:text-accent bg-transparent hover:bg-accent/5 rounded-md transition-colors w-full sm:w-auto"
            >
              contact@dixinn.com
            </a>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#C8D3E1]">
        {/* Orange accent line */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo className="h-6 w-auto text-[#0B1B3D]" />
          <span className="text-sm text-[#4A6380] font-mono">
            © {new Date().getFullYear()} DixInn'. Tous droits réservés.
          </span>
          <div className="flex items-center gap-6 text-sm text-[#4A6380] font-mono">
            <a href="#" className="hover:text-[#050B14] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#050B14] transition-colors">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
