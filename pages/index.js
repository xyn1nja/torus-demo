import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from '../components/Login'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Torus Demo</title>
        <meta name="description" content="Torus Demo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Torus Demo.
        </h1>
        <Login />
      </main>
    </div>
  )
}
