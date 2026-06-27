
import { motion } from "framer-motion";
import { ArrowRight, Activity, Server, Network } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A2F5E_1px,transparent_1px),linear-gradient(to_bottom,#1A2F5E_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.15] pointer-events-none" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Text ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background/80 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Partenaire de transformation digitale
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]"
            >
              Catalyseur de votre{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
                  transformation digitale
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-accent opacity-70" />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Nous concevons des écosystèmes numériques sur-mesure et des solutions
              contextualisées pour accompagner la digitalisation progressive de votre organisation.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#solutions"
                className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-foreground bg-foreground/10 hover:bg-foreground/[0.15] border border-foreground/20 rounded-md transition-all"
              >
                <span>Explorer l'écosystème</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#vision"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 border border-primary rounded-md transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 border border-white/10 rounded-md pointer-events-none" />
                Discuter de votre projet
              </a>
            </motion.div>
          </div>

          {/* ── Right: Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Browser frame */}
            <div
              className="relative rounded-xl border border-border/60 overflow-hidden shadow-2xl"
              style={{ transform: "perspective(1000px) rotateY(-6deg) rotateX(3deg)" }}
            >
              {/* Chrome bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-foreground/5 border-b border-border">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/20" />
                <div className="flex-1 mx-3 h-5 rounded bg-foreground/10 flex items-center px-2">
                  <span className="text-[10px] text-muted-foreground font-mono">app.qeebaro.dixinn.com</span>
                </div>
              </div>
              <img
                src="/screenshots/qeebaro-dashboard.png"
                alt="Tableau de bord Qeebaro"
                className="w-full object-cover"
              />
            </div>

            {/* Glow behind mockup */}
            <div className="absolute -inset-6 bg-primary/5 rounded-2xl blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* ── Bottom: Trust Metrics ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
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
              className="group p-6 rounded-xl border border-border bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-colors flex flex-col items-center text-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/5 border border-foreground/10 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
