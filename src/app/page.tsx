import Image from "next/image";
import styles from "./page.module.css";
import BuyButton from "@/components/BuyButton";

export default function Home() {
  return (
    <main className={styles.main_wrapper}>
      <div className={styles.headline_wrapper}>
        <Image src="/kik-logo-v2.png" width={400} height={400} alt="kik logo"/>

        <h1>Your tool for <span style={{background: 'black', color: 'white', padding: '0.5rem 1rem', fontStyle: 'italic'}}>FLOW</span></h1>

        <BuyButton>Order Now!</BuyButton>


        <p>All natural caffeinated gum with L-theanine and B vitamins. Clean energy and flow on a busy schedule.</p>
      </div>
    </main>
  );
}
