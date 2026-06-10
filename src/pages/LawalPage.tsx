import { motion } from "framer-motion";
import { ArrowRight, MapPin, Share2, WifiOff, Lock, ArrowLeft, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

const FEATURES = [
  {
    icon: MapPin,
    title: "Capturez votre position en un geste.",
    desc: "D'un seul geste, l'application capture votre position GPS, vous permet de la nommer, de la noter, puis de la partager instantanément.",
  },
  {
    icon: Share2,
    title: "Partagez par WhatsApp, SMS ou email.",
    desc: "Envoyez votre position directement depuis Lawal via les canaux que vous utilisez déjà — sans copier-coller, sans friction.",
  },
  {
    icon: WifiOff,
    title: "Fonctionne sans connexion.",
    desc: "Vos lieux enregistrés sont disponibles même hors ligne. Lawal fonctionne entièrement en local, sur votre appareil.",
  },
  {
    icon: Lock,
    title: "Aucun compte. Aucun suivi.",
    desc: "Aucun serveur, aucun compte, aucun suivi. Vos lieux restent sur votre appareil, et restent vôtres.",
  },
];

export function LawalPage() {
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-black/50 backdrop-blur-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Déployé · Gratuit pour toujours
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15] max-w-4xl"
          >
            Capturez et partagez vos positions,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-muted-foreground">
              sans adresse.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Lawal résout un problème concret : comment indiquer précisément où vous êtes quand les adresses n'existent pas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#"
              className="group flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-accent hover:bg-accent/90 rounded-md transition-all"
            >
              Télécharger Lawal
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* À propos */}
      <section className="border-t border-white/5 bg-[#080E17]">
        <div className="container mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Conçu pour la Guinée et sa diaspora.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Lawal fonctionne entièrement en local. Aucun compte, aucun serveur, aucun suivi. Vos lieux restent sur votre appareil, et restent vôtres.
              </p>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03]">
                <span className="text-2xl font-bold text-white">Gratuit.</span>
                <span className="text-lg text-muted-foreground">Pour toujours.</span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-48 h-48 rounded-3xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
                <Smartphone className="w-20 h-20 text-muted-foreground/40" />
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
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lawal Pro */}
      <section className="border-t border-white/5 bg-[#080E17]">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-8">
              <span className="text-xs font-mono text-accent uppercase tracking-wider">Bientôt disponible</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
              Lawal Pro
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Vous gérez une équipe, une flotte, ou plusieurs points de livraison ? Lawal Pro est fait pour vous.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12 max-w-2xl">
              Là où Lawal simplifie le partage de position pour les particuliers, Lawal Pro apporte la puissance dont les professionnels ont besoin : synchronisation multi-appareils, gestion centralisée de lieux partagés, listes d'équipe, exports avancés et bien plus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              {[
                "Synchronisation multi-appareils",
                "Gestion centralisée des lieux",
                "Listes d'équipe",
                "Exports avancés",
                "Tableau de bord partagé",
                "Support dédié",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="mailto:contact@dixinn.com?subject=Liste d'attente Lawal Pro"
              className="group inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-all"
            >
              Rejoindre la liste d'attente
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
