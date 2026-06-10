import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";
import { useThemeContext } from "@/context/ThemeContext";

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
  const { theme, toggle } = useThemeContext();
  const isDark = theme === "dark";

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
          ? isDark
            ? "bg-black/80 backdrop-blur-md border-border py-4"
            : "bg-white/80 backdrop-blur-md border-border py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center gap-10">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <Logo className={cn("h-7 w-auto", isDark ? "text-white" : "text-[#0B1B3D]")} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
                isSolutionsOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Solutions
              <ChevronDown className={cn("w-4 h-4 transition-transform", isSolutionsOpen && "rotate-180")} />
            </button>

            {isSolutionsOpen && (
              <div className={cn(
                "absolute top-full left-0 mt-3 w-56 rounded-xl border shadow-2xl overflow-hidden",
                isDark
                  ? "border-white/10 bg-black/90 backdrop-blur-xl"
                  : "border-border bg-white"
              )}>
                {SOLUTIONS.map((sol) => (
                  <Link
                    key={sol.name}
                    to={sol.href}
                    className="flex flex-col px-4 py-3 hover:bg-accent/5 transition-colors border-b border-border last:border-b-0"
                  >
                    <span className="text-sm font-medium text-foreground">{sol.name}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">{sol.desc}</span>
                  </Link>
                ))}
                {isHome && (
                  <a
                    href="#solutions"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex flex-col px-4 py-3 hover:bg-accent/5 transition-colors border-t border-border"
                  >
                    <span className="text-xs text-accent font-medium">Voir tout l'écosystème →</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right side — theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
            className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
              isDark
                ? "text-muted-foreground hover:text-white hover:bg-white/10"
                : "text-muted-foreground hover:text-foreground hover:bg-black/5"
            )}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="mailto:pmo@bndsystems.com"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-primary hover:bg-navy-clair rounded-md overflow-hidden transition-all"
          >
            <span>Nous contacter</span>
            {/* Orange bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2 ml-auto">
          <button
            onClick={toggle}
            aria-label="Changer de thème"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            className="text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={cn(
          "md:hidden absolute top-full left-0 right-0 border-b py-4 px-6 flex flex-col space-y-4 shadow-xl",
          isDark ? "bg-black border-border" : "bg-white border-border"
        )}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="border-t border-border pt-4">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Solutions</p>
            {SOLUTIONS.map((sol) => (
              <Link
                key={sol.name}
                to={sol.href}
                className="flex items-center justify-between py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <span>{sol.name}</span>
                <span className="text-xs text-muted-foreground/60">{sol.desc}</span>
              </Link>
            ))}
          </div>
          <a
            href="mailto:pmo@bndsystems.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-primary rounded-md w-full"
          >
            Nous contacter
          </a>
        </div>
      )}
    </nav>
  );
}
