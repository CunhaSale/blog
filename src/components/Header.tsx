import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">MindTech Blog</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          {/* <Link 
            href="/sobre-nos" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre Nós
          </Link> */}
          <Link 
            href={`https://brandup-lp.vercel.app/`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Conheça nossos serviços
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
              Conheça nossos serviços
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
