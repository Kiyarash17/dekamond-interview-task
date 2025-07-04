import styles from "./auth.module.scss";


export default function Button({ onClick, label }: { onClick: () => void; label: string }) {
    return <button className={styles.button} onClick={onClick}>{label}</button>;
}