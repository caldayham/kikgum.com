import Image from "next/image";
import styles from "./page.module.css";
import BuyButton from "@/components/BuyButton";

export default function Home() {
  return (
    <main>
      <div className={styles.headline_wrapper}>
        <h1>
          KIK Gum
        </h1>
        <p>All natural caffeinated gum with L-theanine and B vitamins.</p>
        <p>Clean energy and focus on a busy schedule.</p>

        <BuyButton>Order Now!</BuyButton>
      </div>
    </main>
  );
}
