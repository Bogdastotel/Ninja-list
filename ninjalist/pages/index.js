import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
        voluptatibus eos alias, quam minima pariatur veniam eius exercitationem
        maxime? Earum, vitae explicabo? Mollitia laborum, voluptatibus minus
        asperiores est facilis laudantium?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ratione
        temporibus esse? Molestias, et repellat voluptate nam consectetur sequi
        illo ducimus hic culpa amet tenetur nemo facilis maxime fuga saepe.
      </p>
      <Footer />
    </div>
  );
}
