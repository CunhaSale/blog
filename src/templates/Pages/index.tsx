import Footer from "@/components/footer";
import HeaderTemplate from "../Header";
import styles from './styles.module.css';

export type PageTemplateProps = {
  title: string;
  body: string;
}

const PageTemplate = ({ title, body}: PageTemplateProps) => {
  return (
    <div>
      <HeaderTemplate />
      <div className={styles.pageContent}>
        <div className={styles.pageSection}>
          <h1>{title}</h1>
          <div dangerouslySetInnerHTML={{ __html: body}} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PageTemplate;