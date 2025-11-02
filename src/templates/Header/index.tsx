import Header from '@/components/header';
import styles from './styles.module.css';

export default function HeaderTemplate() {
  return (
    <div className={styles.headerWrapper}>
      <Header />
    </div>
  )
}