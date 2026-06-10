
import { motion } from "framer-motion";
import { ArrowRight, Activity, Server, Network } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Abstract Background Grid (Softened for breathability) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A2F5E_1px,transparent_1px),linear-gradient(to_bottom,#1A2F5E_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] pointer-events-none" />

      {/* Decorative Nodes (Subtle, not overly flashy) */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-black/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Partenaire de transformation digitale
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Catalyseur de votre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-muted-foreground">
                transformation digitale
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Nous concevons des écosystèmes numériques sur-mesure et des solutions
            contextualisées pour accompagner la digitalisation progressive de votre organisation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#solutions"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-all"
            >
              <span>Explorer l'écosystème</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 border border-primary rounded-md transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 border border-white/10 rounded-md pointer-events-none transition-all" />
              Discuter de votre projet
            </a>
          </motion.div>

          {/* Key Trust Metrics / Concepts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {[
              {
                icon: Network,
                title: "Écosystèmes interconnectés",
                desc: "Des solutions modulaires qui communiquent intelligemment.",
              },
              {
                icon: Server,
                title: "Conception sur-mesure",
                desc: "Des plateformes technologiques adaptées à votre contexte.",
              },
              {
                icon: Activity,
                title: "Adoption opérationnelle",
                desc: "Une digitalisation pensée pour vos équipes sur le terrain.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors flex flex-col items-center text-center gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground group-hover:text-white transition-colors">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
