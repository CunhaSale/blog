import styles from './styles.module.css'
import Link from 'next/link'


const NavigationMenu = () => (
    <div className={styles.wrapper}>
        {/* <S.SubNav>
            <S.SubNavButton>
                Categorias
                <S.ArrowBack className="icon" />
            </S.SubNavButton>
            <S.SubNavContent className="subnav-content">
                <LinkWrapper href='/'>
                    categoria 1
                </LinkWrapper>
                <LinkWrapper href='/'>
                    categoria 2
                </LinkWrapper>
                <LinkWrapper href='/'>
                    categoria 3
                </LinkWrapper>
            </S.SubNavContent>
        </S.SubNav> */}
        <Link href="/sobre-nos">Sobre Nós</Link>
        <Link href="/anuncios">Jobs</Link>
        {/* <Link href="/contact">Contato</Link> */}
    </div>
)

export default NavigationMenu