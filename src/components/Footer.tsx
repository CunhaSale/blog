import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="backdrop-blur-lg bg-background/80 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex justify-center items-center">
                <span className="text-sm text-muted-foreground">
                    © 2026 <Link href={`https://brandup-lp.vercel.app/`} className="text-[#7C6FEC] hover:underline">
                        MindTech Solutions
                    </Link> - Todos os direitos reservados.
                </span>
                </div>
            </div>
        </footer>
    )
}
