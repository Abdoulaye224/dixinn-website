import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Compréhension des réalités",
    desc: "Analyse approfondie de votre contexte opérationnel, de vos contraintes locales et de vos objectifs stratégiques.",
  },
  {
    num: "02",
    title: "Conception contextualisée",
    desc: "Design d'une architecture numérique sur-mesure, pensée pour s'intégrer parfaitement à vos processus existants.",
  },
  {
    num: "03",
    title: "Déploiement progressif",
    desc: "Mise en production itérative pour minimiser les risques et assurer une continuité de service absolue.",
  },
  {
    num: "04",
    title: "Adoption & Conduite du changement",
    desc: "Accompagnement de vos équipes sur le terrain pour garantir l'appropriation totale des nouveaux outils.",
  },
  {
    num: "05",
    title: "Évolution continue",
    desc: "Monitoring, optimisation et scalabilité pour accompagner la croissance de vos infrastructures sur le long terme.",
  },
];

export function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Calculate the height of the active line based on scroll progress
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="container mx-auto px-6 py-32 md:py-48 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Side: Sticky Title */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-tight text-foreground mb-6 leading-[1.2]">
              L'Approche DixInn'
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Une méthodologie éprouvée qui transforme la technologie en véritable levier opérationnel.
            </p>
            <div className="hidden lg:block w-full h-px bg-white/10" />
          </div>
        </div>

        {/* Right Side: The Steps Flow */}
        <div className="lg:col-span-7 lg:col-start-6 relative">
          
          {/* Background subtle track line */}
          <div className="absolute top-0 bottom-0 left-[19px] w-px bg-white/5" />
          
          {/* Active glowing track line — orange */}
          <motion.div
            className="absolute top-0 left-[19px] w-px bg-accent origin-top"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-24 md:gap-32 pb-32">
            {STEPS.map((step) => (
              <div key={step.num} className="relative pl-16">
                
                {/* Node */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-background border border-accent/40 flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-sm font-mono text-accent/70 mb-3 block">
                    Étape {step.num}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
