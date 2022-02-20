import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSS Sorter</title>
        <meta name="description" content="Sort your CSS code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">CSS Sorter!</a>
        </h1>

        <p className={styles.description}>
          Get started by choosing one from the below options
        </p>


        <div className={styles.grid}>
          <Link href="/upload/" passHref>
            <span className={styles.card}>
              <h2>Upload &rarr;</h2>
              <p>Upload CSS file directly online</p>
            </span>
          </Link>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Paste &rarr;</h2>
            <p>Paste the code directly online</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
