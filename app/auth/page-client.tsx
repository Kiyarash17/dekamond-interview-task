"use client";

import styles from "./auth.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

const phoneRegex = /^09\d{9}$/;

export default function PageClient() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!phoneRegex.test(phone)) {
      setError("شماره تلفن معتبر نیست");
      return;
    }

    const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
    const data = await res.json();
    const user = data.results[0];

    localStorage.setItem("user", JSON.stringify(user));
    router.push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h1>ورود</h1>
      <div className={styles.form}>
        <Input value={phone} onChange={setPhone} label="شماره تلفن" />
        {error && <p className={styles.error}>{error}</p>}
        <Button onClick={handleLogin} label="ورود" />
      </div>
    </div>
  );
}

function Input({ value, onChange, label }: { value: string; onChange: (v: string) => void; label: string }) {
  return (
    <div className={styles.inputGroup}>
      <label>{label}</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="09xxxxxxxxx" />
    </div>
  );
}

function Button({ onClick, label }: { onClick: () => void; label: string }) {
  return <button className={styles.button} onClick={onClick}>{label}</button>;
}