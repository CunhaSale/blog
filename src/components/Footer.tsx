import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="backdrop-blur-lg bg-background/80 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                        <Link href="/contate-nos" className="text-muted-foreground hover:text-foreground hover:underline">
                            Contate-nos
                        </Link>
                        <Link href="/termos-de-uso" className="text-muted-foreground hover:text-foreground hover:underline">
                            Termos de uso
                        </Link>
                        <Link href="/politicas-de-privacidade" className="text-muted-foreground hover:text-foreground hover:underline">
                            Políticas de privacidade
                        </Link>
                    </div>
                    <span className="text-sm text-muted-foreground text-center md:text-left">
                        © 2026 <Link href={`https://brandup-lp.vercel.app/`} className="text-[#7C6FEC] hover:underline">
                            MindTech Solutions
                        </Link> - Todos os direitos reservados.
                    </span>
                </div>
            </div>
        </footer>
    )
}
