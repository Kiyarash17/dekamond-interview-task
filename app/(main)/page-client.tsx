"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./home.module.scss";

export default function PageClient() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth");
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <p>در حال انتقال...</p>
    </div>
  );
}
