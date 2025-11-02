import Link from 'next/link'
import BurgerMenu from './components/burger-menu'
import NavigationMenu from './components/navigation-menu'
import styles from './styles.module.css'

const isNavBack = () => {
    return typeof window !== "undefined" && 
        (window.location.pathname.startsWith('/autor/') ||
        window.location.pathname.startsWith('/categoria/') ||
        window.location.pathname.startsWith('/sub-categoria/'))
}

const Header = () => (
    <div className={styles.headerWrapper}>
        <div className={styles.menuWrapper}>
            { isNavBack() && (
            <button
                className={styles.backButton}
                onClick={() => window.history.back()}
                aria-label="Voltar para a página anterior"
            >
                <i className="fa-solid fa-angle-left"></i>
            </button>
            )}
            { !isNavBack() && <BurgerMenu /> }
            <NavigationMenu />

            {/* Logo centralizado */}
            <div className={styles.logoWrapper}>
                {/* width="200" height="40" viewBox="28 08 300 70" */}
                <Link href="/" aria-label="Ir para a página inicial">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="20 20 320 60" height="4.2vh" preserveAspectRatio="xMidYMid meet">
                        <text
                            x="75"
                            y="69"
                            fontFamily="Segoe UI, Helvetica, Arial, sans-serif"
                            fontSize="43"
                            fontWeight="bold"
                            fill="#ededed"
                            letterSpacing="1.5">
                            MindTech
                        </text>

                        <circle cx="40" cy="54" r="15" stroke="#29D" strokeWidth="2" fill="none"/>
                        <circle cx="40" cy="39" r="2.5" fill="#29D"/>
                        <circle cx="40" cy="69" r="2.5" fill="#29D"/>
                        <circle cx="25" cy="54" r="2.5" fill="#29D"/>
                        <circle cx="55" cy="54" r="2.5" fill="#29D"/>
                    </svg>

                    {/* <span className={styles.logoText}>MindTech</span> */}
                </Link>
            </div>
        </div>
    </div>
)

export default Header