import { ArrowRight } from "lucide-react";

export function Vision() {
  return (
    <div className="bg-[#F8FAFC] text-slate-900 selection:bg-primary/20 selection:text-primary">
      <div className="container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.15]">
            Construire aujourd'hui les fondations de votre{" "}
            <span className="text-primary">résilience numérique.</span>
          </h2>
          
          <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-2xl mx-auto">
            DixInn' n'est pas qu'un prestataire technologique. Nous sommes votre 
            partenaire de long terme, engagé à aligner la technologie sur vos 
            véritables enjeux stratégiques et opérationnels.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors w-full sm:w-auto shadow-xl shadow-primary/20"
            >
              Initier une conversation
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="mailto:contact@dixinn.com"
              className="flex items-center justify-center px-8 py-4 text-sm font-medium text-slate-700 bg-transparent hover:bg-slate-100 rounded-md transition-colors w-full sm:w-auto"
            >
              contact@dixinn.com
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Simple Footer */}
      <footer className="border-t border-slate-200 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 font-mono">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">D'</span>
            <span>© {new Date().getFullYear()} DixInn'. Tous droits réservés.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
