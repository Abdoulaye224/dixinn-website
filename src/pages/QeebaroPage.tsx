import { motion } from "framer-motion";
import { ArrowRight, MapPin, Bell, BookOpen, Zap, Plug, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: MapPin,
    title: "Tous vos actifs sur une seule carte.",
    desc: "Du premier équipement au dernier capteur, tout votre patrimoine est visible, localisé et à jour. Fini les fichiers Excel croisés et les appels pour savoir où en est une intervention.",
  },
  {
    icon: Bell,
    title: "Des alertes qui arrivent au bon moment.",
    desc: "Qeebaro surveille vos mesures en continu et vous prévient dès qu'un seuil est franchi — avant que l'incident ne devienne une crise. Vos équipes reçoivent la bonne information, pas le bruit.",
  },
  {
    icon: BookOpen,
    title: "Une main courante qui ne perd rien.",
    desc: "Chaque événement terrain est tracé, documenté, horodaté. Incidents, rondes, travaux planifiés, signalements : tout est archivé et consultable, pour vos équipes comme pour vos audits.",
  },
  {
    icon: Zap,
    title: "Des règles qui travaillent à votre place.",
    desc: "Définissez vos procédures une fois — Qeebaro les exécute automatiquement. Déclenchement d'alerte, création d'événement, notification d'équipe : la plateforme agit, vous supervisez.",
  },
];

const SECTORS = [
  {
    sector: "Collectivités",
    value: "Supervisez réseaux, équipements urbains et interventions terrain depuis un seul tableau de bord.",
  },
  {
    sector: "Industrie",
    value: "Centralisez la surveillance de vos sites, lignes et capteurs — réagissez avant l'arrêt de production.",
  },
  {
    sector: "Commerce",
    value: "Gérez vos points de vente, équipements et incidents en temps réel, sur tous vos sites simultanément.",
  },
  {
    sector: "Transports",
    value: "Suivez votre flotte, vos infrastructures et vos événements d'exploitation sur une carte unifiée.",
  },
  {
    sector: "Gestionnaires d'infrastructure",
    value: "Passez de la réactivité à l'anticipation grâce à des indicateurs terrain en continu.",
  },
];

export function QeebaroPage() {
  return (
    <div className="pt-24">

      {/* Back link */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A2F5E_1px,transparent_1px),linear-gradient(to_bottom,#1A2F5E_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-black/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Supervision opérationnelle
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3rem] font-extrabold tracking-tight text-foreground mb-6 leading-[1.1] max-w-4xl"
          >
            Qeebaro unifie vos actifs, vos alertes et vos données terrain sur une{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
              carte vivante.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Pour que vos équipes agissent vite, au bon endroit, au bon moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-16"
          >
            <a
              href="mailto:pmo@bndsystems.com?subject=Démonstration Qeebaro"
              className="group flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-all"
            >
              Demander une démonstration
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://qeebaro.dixinn.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-all"
            >
              Créer un compte gratuit
            </a>
          </motion.div>

          {/* Browser mockup screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative w-full max-w-5xl"
          >
            {/* Browser chrome */}
            <div className="rounded-t-xl border border-white/10 bg-[#1a1f2e] px-4 py-3 flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/10" />
              </div>
              <div className="flex-1 h-6 rounded bg-white/5 flex items-center px-3">
                <span className="text-xs text-muted-foreground/50 font-mono">app.qeebaro.io</span>
              </div>
            </div>
            {/* Screenshot */}
            <div className="rounded-b-xl border-x border-b border-white/10 overflow-hidden bg-[#0d1829]">
              <img
                src="/screenshots/qeebaro.png"
                alt="Interface Qeebaro — carte de supervision des actifs terrain"
                className="w-full block"
              />
            </div>
            {/* Glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Additional screenshots — dashboard & events */}
      <section className="bg-background">
        <div className="container mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                src: "/screenshots/qeebaro-dashboard.png",
                alt: "Tableau de bord Qeebaro — événements, alarmes actives, assets et mesures",
                label: "Tableau de bord",
              },
              {
                src: "/screenshots/qeebaro-event.png",
                alt: "Vue Gantt Qeebaro — planification et suivi des événements terrain",
                label: "Vue Gantt des événements",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative"
              >
                <div className="rounded-t-lg border border-white/10 bg-[#1a1f2e] px-3 py-2 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="text-xs text-muted-foreground/50 font-mono ml-1">{item.label}</span>
                </div>
                <div className="rounded-b-lg border-x border-b border-white/10 overflow-hidden">
                  <img src={item.src} alt={item.alt} className="w-full block" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="border-t border-white/5 bg-surface">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-tight text-white mb-6 leading-[1.2]">
                La plateforme de supervision opérationnelle.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Qeebaro donne à vos équipes une vision claire et immédiate de ce qui se passe sur le terrain. Conçue pour les organisations qui gèrent des actifs physiques à grande échelle, elle transforme des données dispersées en décisions concrètes.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-center">
              <div className="w-full p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-2xl font-semibold text-white leading-snug">
                  "Moins d'angles morts.{" "}
                  <span className="text-muted-foreground">Plus de réactivité."</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURES.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-white/5 bg-card hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* API block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-8 rounded-2xl border border-white/5 bg-card hover:border-white/10 transition-colors flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0">
              <Plug className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Une API ouverte pour vos outils existants.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Connectez vos systèmes métier, vos capteurs IoT ou vos applications tierces sans friction. SSO entreprise disponible (Keycloak / OIDC).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sectors */}
      <section className="border-t border-white/5 bg-surface">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <h2 className="text-[1.75rem] md:text-[2.25rem] font-bold tracking-tight text-white mb-4 leading-[1.2]">
              Ils pilotent avec Qeebaro
            </h2>
            <p className="text-lg text-muted-foreground">
              Une plateforme adaptée aux organisations qui gèrent des actifs et des équipes sur le terrain.
            </p>
          </div>

          <div className="border border-white/5 rounded-2xl overflow-hidden">
            {SECTORS.map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="grid grid-cols-1 md:grid-cols-12 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="md:col-span-3 px-6 py-5 border-b md:border-b-0 md:border-r border-white/5 flex items-center">
                  <span className="text-sm font-medium text-white">{row.sector}</span>
                </div>
                <div className="md:col-span-9 px-6 py-5 flex items-center">
                  <span className="text-sm text-muted-foreground">{row.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-[#F0F4F8] text-slate-900 selection:bg-primary/20">
        <div className="container mx-auto px-6 py-32 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.15]">
            Démarrez en quelques heures,{" "}
            <span className="text-primary">pas en quelques mois.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Qeebaro est disponible en SaaS, sans installation. Votre équipe est opérationnelle dès le premier jour, avec un accompagnement dédié à l'onboarding.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:pmo@bndsystems.com?subject=Démonstration Qeebaro"
              className="group flex items-center gap-2 px-8 py-4 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors shadow-xl shadow-primary/20 w-full sm:w-auto"
            >
              Demander une démonstration
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://qeebaro.dixinn.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 text-sm font-medium text-slate-700 bg-transparent hover:bg-slate-100 rounded-md transition-colors w-full sm:w-auto"
            >
              Créer un compte gratuit
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
