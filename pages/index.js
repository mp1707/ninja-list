import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          incidunt. Dicta facilis totam architecto itaque nam, ullam facere
          cumque quas, aspernatur inventore placeat ad numquam sint sit illo
          voluptas quis ab autem, eum maxime unde natus! Hic blanditiis dolorem,
          culpa mollitia nesciunt voluptates repellat vitae autem quas sed, eum
          vero.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste,
          incidunt. Dicta facilis totam architecto itaque nam, ullam facere
          cumque quas, aspernatur inventore placeat ad numquam sint sit illo
          voluptas quis ab autem, eum maxime unde natus! Hic blanditiis dolorem,
          culpa mollitia nesciunt voluptates repellat vitae autem quas sed, eum
          vero.
        </p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  );
}
