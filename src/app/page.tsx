import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.headline_wrapper}>
        <h1>
          KIK Gum
        </h1>
        <p>All natural caffeinated gum with L-theanine and B vitamins.</p>
        <p>For clean and simple energy on a busy schedule.</p>
      </div>
    </main>
  );
}
