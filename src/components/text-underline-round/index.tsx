import styles from './styles.module.css'

interface TextUnderlineRoundProps {
    text: string;
}

const TextUnderlineRound = ({ text }: TextUnderlineRoundProps) => {
    return (
        <div className={styles.dividerWrapper}>
            <div className={styles.divider}>{text}</div>
            <svg
            className={styles.underline}
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="6"
            viewBox="0 0 100 8"
            fill="none"
            >
            <path
                d="M2 4C25 2 95 2 118 4"
                stroke="#3B82F6"
                strokeWidth="4"
                strokeLinecap="round"
            />
            </svg>
        </div>
    )

}

export default TextUnderlineRound;