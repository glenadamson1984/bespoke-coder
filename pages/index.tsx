import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import * as url from "url";
import { useState } from "react";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal ? (
        <Modal setShowModal={() => setShowModal(!showModal)} />
      ) : null}
      <div
        style={{
          backgroundImage: `url("/iStock-1274394138.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
        className={styles.container}
      >
        <Head>
          <title>Modern Software</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <span style={{ color: "red" }}>Modern Software!</span>
          </h1>

          <p className={styles.description}>Clean, professional and modern</p>

          <div className={styles.grid}>
            <div
              onClick={() => setShowModal(!showModal)}
              className={styles.card}
            >
              <h2>Bespoke Software &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>

            <div
              onClick={() => setShowModal(!showModal)}
              className={styles.card}
            >
              <h2>App Build &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>

            <div
              onClick={() => setShowModal(!showModal)}
              className={styles.card}
            >
              <h2>Hire Developers &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </div>

            <div
              onClick={() => setShowModal(!showModal)}
              className={styles.card}
            >
              <h2>Get Advice &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </div>
          </div>
        </main>
        <Image
          src="/1.png"
          alt="Modern Software Logo"
          width={200}
          height={200}
        />
      </div>
    </>
  );
};

export default Home;
