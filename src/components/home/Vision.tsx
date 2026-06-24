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
              href="mailto:pmo@bndsystems.com?subject=Initier une conversation"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-primary hover:bg-navy-clair rounded-md transition-colors w-full sm:w-auto shadow-xl shadow-primary/20 relative overflow-hidden"
            >
              Initier une conversation
              <ArrowRight className="w-4 h-4" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="mailto:pmo@bndsystems.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 text-sm font-medium text-[#0B1B3D] hover:text-accent bg-transparent hover:bg-accent/5 rounded-md transition-colors w-full sm:w-auto"
            >
              Nous écrire
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
          <a
            href="https://www.linkedin.com/company/dixinn/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DixInn' sur LinkedIn"
            className="text-[#4A6380] hover:text-[#050B14] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
