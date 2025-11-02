import Link from 'next/link'
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
          <p>© 2025 Brandup Copyright</p>
          <div className={styles.footerLinks}>
            <Link href="/termos-e-condicoes">Termos</Link><span>•</span>
            <Link href="/politica-de-privacidade">Privacidade</Link><span>•</span>
            <Link href="/politica-de-cookies">Política de Cookies</Link>
          </div>
          {/* <Link href="/">Brandup</Link><span> seu canal para o conhecimento</span> */}
        </footer>
    )
}

export default Footer