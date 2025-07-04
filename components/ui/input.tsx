import styles from "./auth.module.scss";

export default function Input({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
    return (
        <div className={styles.inputGroup}>
            <label>{label}</label>
            <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="09xxxxxxxxx" />
        </div>
    );
}