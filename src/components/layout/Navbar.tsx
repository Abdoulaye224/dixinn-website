import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const SOLUTIONS = [
  { name: "Qeebaro", href: "/qeebaro", desc: "Supervision opérationnelle" },
  { name: "Lawal", href: "/lawal", desc: "Partage de position GPS" },
];

const NAV_LINKS = [
  { name: "Accueil", href: "/" },
  { name: "Expertise", href: "/#expertise" },
  { name: "Vision", href: "/#vision" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSolutionsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center gap-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded border border-white/20 bg-white/5 flex items-center justify-center">
            <span className="text-white font-bold font-sans text-sm">D'</span>
          </div>
          <span className="text-xl font-semibold tracking-tight text-white">DixInn'</span>
        </Link>

        {/* Desktop Navigation — left-aligned next to logo */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Solutions dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors",
                isSolutionsOpen ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              Solutions
              <ChevronDown className={cn("w-4 h-4 transition-transform", isSolutionsOpen && "rotate-180")} />
            </button>

            {isSolutionsOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 rounded-xl border border-white/10 bg-black/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                {SOLUTIONS.map((sol) => (
                  <Link
                    key={sol.name}
                    to={sol.href}
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0"
                  >
                    <span className="text-sm font-medium text-white">{sol.name}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">{sol.desc}</span>
                  </Link>
                ))}
                {isHome && (
                  <a
                    href="#solutions"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors border-t border-white/10"
                  >
                    <span className="text-xs text-muted-foreground">Voir tout l'écosystème →</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* CTA — pushed to the right */}
        <div className="hidden md:flex items-center ml-auto">
          <a
            href="mailto:contact@dixinn.com"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-md overflow-hidden transition-all hover:bg-primary/90"
          >
            <span>Nous contacter</span>
            <div className="absolute inset-0 border border-white/10 rounded-md pointer-events-none transition-all group-hover:border-accent/50" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-border py-4 px-6 flex flex-col space-y-4 shadow-xl">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-white/5 pt-4">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Solutions</p>
            {SOLUTIONS.map((sol) => (
              <Link
                key={sol.name}
                to={sol.href}
                className="flex items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors"
              >
                <span>{sol.name}</span>
                <span className="text-xs text-muted-foreground/60">{sol.desc}</span>
              </Link>
            ))}
          </div>
          <a
            href="mailto:contact@dixinn.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-md w-full"
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
}
