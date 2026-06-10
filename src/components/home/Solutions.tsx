import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, LayoutDashboard, Cable, GraduationCap, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export function Solutions() {
  return (
    <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
      <div className="max-w-2xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          L'Écosystème DixInn'
        </h2>
        <p className="text-lg text-muted-foreground">
          Une suite de plateformes et de connecteurs conçus pour s'intégrer,
          évoluer et transformer vos opérations de manière cohérente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 auto-rows-[280px]">

        {/* Qeebaro - Hyperviseur */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="col-span-1 md:col-span-6 lg:col-span-5 group relative rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-white/10 transition-colors p-8 flex flex-col justify-between"
        >
          <Link to="/qeebaro" className="absolute inset-0 z-10" aria-label="Découvrir Qeebaro" />
          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-white">Qeebaro</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white">
                Hyperviseur
              </span>
            </div>
            <p className="text-muted-foreground">
              Unifie vos actifs, vos alertes et vos données terrain sur une carte vivante — pour que vos équipes agissent vite, au bon endroit, au bon moment.
            </p>
          </div>
        </motion.div>

        {/* Lawal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-6 lg:col-span-7 group relative rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-white/10 transition-colors p-8 flex flex-col justify-between"
        >
          <Link to="/lawal" className="absolute inset-0 z-10" aria-label="Découvrir Lawal" />
          <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold text-white">Lawal</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-white/10 text-white">
                Déployé
              </span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Capturez et partagez vos positions, sans adresse. Conçu pour la Guinée et sa diaspora — aucun compte, aucun serveur, aucun suivi.
            </p>
          </div>
        </motion.div>

        {/* Connecteurs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-1 md:col-span-4 lg:col-span-4 group relative rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-white/10 transition-colors p-8 flex flex-col justify-between"
        >
          <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
            <Cable className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Connecteurs</h3>
            <p className="text-sm text-muted-foreground">
              Unification et intégration transparente des systèmes d'information existants.
            </p>
          </div>
        </motion.div>

        {/* LMS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-1 md:col-span-4 lg:col-span-4 relative rounded-2xl bg-white/[0.01] border border-dashed border-white/10 overflow-hidden p-8 flex flex-col justify-between opacity-80"
        >
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground mb-6">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-muted-foreground">LMS</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                À venir
              </span>
            </div>
            <p className="text-sm text-muted-foreground/80">
              Plateforme d'apprentissage pour accompagner la montée en compétence.
            </p>
          </div>
        </motion.div>

        {/* Marketplace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="col-span-1 md:col-span-4 lg:col-span-4 relative rounded-2xl bg-white/[0.01] border border-dashed border-white/10 overflow-hidden p-8 flex flex-col justify-between opacity-80"
        >
          <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground mb-6">
            <ShoppingCart className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold text-muted-foreground">Marketplace</h3>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
                À venir
              </span>
            </div>
            <p className="text-sm text-muted-foreground/80">
              Écosystème transactionnel intégré aux réalités locales.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
