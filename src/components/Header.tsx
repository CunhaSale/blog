import { Code2, ExternalLink, Facebook, Instagram, Linkedin, Mail, Menu, Moon, Sun, X, Youtube } from "lucide-react";
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
          <div className="flex flex-col font-sans">
            <div className="flex items-baseline leading-none">
              <span className="text-[22px] font-bold text-foreground tracking-tight">Mind</span>
              <span className="text-[22px] font-bold text-[#7C6FEC] tracking-tight">Tech</span>
            </div>
            <span className="text-[11px] font-bold text-muted-foreground tracking-[1.8px] uppercase text-right leading-none mt-1">Insights</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 ml-auto">
          <Link 
            href="/news" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            News
          </Link>
          <Link 
            href="/trending" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Trending
          </Link>
          <Link 
            href="/comunidade" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            Comunidade
            {/* <span className="bg-[#7C6FEC] text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">NEW</span> */}
          </Link>

          {/* <Link 
            href={`https://brandup-lp.vercel.app/`}
            className="text-sm flex items-center gap-2 font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            MindTech Solutions */}
            {/* <ExternalLink className="h-3.5 w-3.5" /> */}
          {/* </Link> */}

          <Link
            href="/newsletter"
            className="flex items-center gap-2 px-3 py-1 bg-background border border-gray-300 text-foreground hover:bg-muted transition-colors"
          >
            <Mail className="w-4 h-4" />
            NEWSLETTER
          </Link>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
              aria-label="X"
            >
              <X className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
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
            className="md:hidden p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
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
            <Link 
              href="/news" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <Link 
              href="/trending" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Trending
            </Link>
            <Link 
              href="/comunidade" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Comunidade
              {/* <span className="bg-[#7C6FEC] text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">NEW</span> */}
            </Link>
            {/* <Link 
              href={`https://brandup-lp.vercel.app/`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              MindTech Solutions
            </Link> */}
            <Link
              href="/Newsletter"
              className="flex items-center gap-2 px-3 py-2 bg-background border border-gray-300 rounded-lg text-foreground hover:bg-muted transition-colors"
            >
              <Mail className="w-4 h-4" />
              NEWSLETTER
            </Link>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="#"
                className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
                aria-label="X"
              >
                <X className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg text-foreground hover:text-[#7C6FEC] hover:bg-muted transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
