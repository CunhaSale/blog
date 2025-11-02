import styles from './styles.module.css';

interface TextDividerProps {
    text: string;
}

const TextDivider = ({ text }: TextDividerProps) => 
    <div className={styles.divider}>{text}</div>

export default TextDivider;