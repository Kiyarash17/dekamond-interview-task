"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.scss";

export default function PageClient() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/auth");
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <h1>خوش آمدید به داشبورد</h1>
    </div>
  );
}
