import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja list |  homepage</title>
    </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        dolorem illum voluptate, autem similique perspiciatis provident commodi
        maiores nulla. Facilis velit autem placeat unde sapiente repellat
        maiores rem, aut perferendis.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        dolorem illum voluptate, autem similique perspiciatis provident commodi
        maiores nulla. Facilis velit autem placeat unde sapiente repellat
        maiores rem, aut perferendis.
      </p>
      <Link href="/ninjas"><a className={styles.btn}>View all listing</a></Link>
    </div>
    </>
  );
}
