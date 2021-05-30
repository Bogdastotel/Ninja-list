import Head from 'next/head'
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
      <>
          <Head>
              <title>Ninja list | Home</title>
          </Head>
          <div><h1 className={styles.title}>Homepage</h1><p className={styles.text}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              voluptatibus eos alias, quam minima pariatur veniam eius exercitationem
              maxime? Earum, vitae explicabo? Mollitia laborum, voluptatibus minus
              asperiores est facilis laudantium?
          </p><p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione
              temporibus esse? Molestias, et repellat voluptate nam consectetur sequi
              illo ducimus hic culpa amet tenetur nemo facilis maxime fuga saepe.
          </p><Link href="/ninjas">
              <a className={styles.btn}>See Ninja Listing</a>
          </Link>
          </div>
      </>
  );
}
