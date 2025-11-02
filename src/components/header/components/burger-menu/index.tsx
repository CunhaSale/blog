import { slide as Menu } from 'react-burger-menu'
import styles from './styles.module.css'
import Link from 'next/link';
import { useState } from 'react';

// function showSettings (event: any) {
//     event.preventDefault();
//   }
function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStateChange = (state: any) => {
    setIsMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <Menu isOpen={isMenuOpen} onStateChange={handleStateChange}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/sobre-nos" onClick={closeMenu}>Sobre Nós</Link>
        <Link href="/anuncios" onClick={closeMenu}>Jobs</Link>
        {/* <Link href="/contact">Contato</Link> */}
      </Menu>
    </div>
  )
}

export default BurgerMenu