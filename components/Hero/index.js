import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Hero() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                Welcome to <br/>
                <Link href="/">
                    <a>Next.js & Tailwind</a></Link>
            </h1>
        </main>
    );
};

