import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Building2, Workflow, Link } from "lucide-react";
import { cn } from "@/lib/utils";

const EXPERTISES = [
  {
    id: "smart-city",
    icon: Building2,
    title: "Smart City & Territoires connectés",
    content: "Nous concevons des infrastructures numériques pour les villes intelligentes. De l'hypervision urbaine à la gestion des ressources, nos solutions agrègent et analysent les données en temps réel pour optimiser la gestion territoriale.",
    tags: ["Hypervision", "IoT", "Data Urbaine", "Gestion des flux"],
  },
  {
    id: "custom-software",
    icon: Code,
    title: "Développement sur-mesure",
    content: "Création d'applications métiers, de portails institutionnels et de plateformes complexes. Nous développons des solutions robustes, sécurisées et parfaitement adaptées à vos règles de gestion spécifiques.",
    tags: ["Architecture Cloud", "Web & Mobile", "Sécurité", "Haute disponibilité"],
  },
  {
    id: "process",
    icon: Workflow,
    title: "Digitalisation des processus",
    content: "Transformation de vos processus papier ou manuels en workflows numériques fluides. Nous accompagnons la dématérialisation pour accélérer la prise de décision et sécuriser la donnée.",
    tags: ["Workflows métiers", "Dématérialisation", "Signature électronique", "GED"],
  },
  {
    id: "integration",
    icon: Link,
    title: "Intégration & Interopérabilité",
    content: "Mise en place de connecteurs et d'API pour faire communiquer vos systèmes d'information existants. Nous unifions vos données pour briser les silos technologiques.",
    tags: ["API", "Middlewares", "Migration de données", "SSO"],
  },
];

export function Expertise() {
  const [activeId, setActiveId] = useState(EXPERTISES[0].id);
  const activeExpertise = EXPERTISES.find((e) => e.id === activeId)!;

  return (
    <div className="container mx-auto px-6 py-24 md:py-32">
      <div className="max-w-2xl mb-16">
        <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-tight text-foreground mb-4 leading-[1.2]">
          Expertise technique & métier
        </h2>
        <p className="text-lg text-muted-foreground">
          Une maîtrise de bout en bout pour concevoir, déployer et maintenir vos systèmes d'information critiques.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 min-h-[400px]">

        {/* Navigation List */}
        <div className="lg:col-span-5 flex flex-col gap-2">
          {EXPERTISES.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl text-left transition-all border",
                activeId === item.id
                  ? "bg-foreground/5 border-foreground/10"
                  : "bg-transparent border-transparent hover:bg-foreground/[0.02]"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-colors",
                activeId === item.id ? "bg-foreground/10 text-foreground" : "bg-transparent text-muted-foreground"
              )}>
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className={cn(
                  "font-medium transition-colors",
                  activeId === item.id ? "text-foreground" : "text-muted-foreground"
                )}>
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="lg:col-span-7 lg:pl-12 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeExpertise.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground mb-6">
                <activeExpertise.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {activeExpertise.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {activeExpertise.content}
              </p>

              <div className="flex flex-wrap gap-2">
                {activeExpertise.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md text-xs font-mono text-muted-foreground bg-foreground/5 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
