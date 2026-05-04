import { Code2, ExternalLink, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const { query } = useRouter();
 
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (query.theme === "light" || query.theme === "dark") {
      setTheme(query.theme)
    }
  }, [query.theme])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.location.href = '/'}>
            {/* <svg width="44" height="44" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="21" fill="#0F0F17"></circle>
              <path d="M 8 28 C 8 16 14 14 22 22 C 30 30 36 28 36 16" fill="none" stroke="#9B8FFF" strokeWidth="3.2" strokeLinecap="round"></path>
              <circle cx="36" cy="16" r="3.5" fill="#9B8FFF"></circle>
            </svg> */}
            <div className="flex flex-col justify-center gap-0.5 font-sans">
              <div className="flex items-center" style={{lineHeight: 'normal'}}>
                <span className="text-[22px] font-medium text-foreground" style={{ letterSpacing: '-0.3px' }}>Mind</span>
                <span className="text-[22px] font-medium text-[#7C6FEC]" style={{ letterSpacing: '-0.3px' }}>Tech</span>
              </div>
              <span className="text-[11px] font-normal text-muted-foreground uppercase text-right" style={{ letterSpacing: '1.8px', lineHeight: '1' }}>Insights</span>
            </div>
          </div>
        
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          {/* <Link 
            href="/sobre-nos" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre Nós
          </Link> */}
          <Link 
            href={`https://brandup-lp.vercel.app/`}
            className="text-sm flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Portal
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Alternar tema">
              {theme === "dark" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary hover:bg-muted transition-colors"
            aria-label="Alternar tema">
              {theme === "dark" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
          </button>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden sticky backdrop-blur-lg bg-background/80 border-b border-border px-4 py-4 animate-fade-in">
          <div className="flex items-center flex-col gap-4">
            {/* <Link 
              href="/sobre-nos" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nós
            </Link> */}
            <Link 
              href={`https://brandup-lp.vercel.app/`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portal
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
