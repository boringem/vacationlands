import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'All Aboard!';
export const siteTitle = 'All Aboard';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="description" content="Railroad travel pamphlets" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <h2 className={utilStyles.heading2Xl}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div>
                    <Link href="/">
                        <a>Back to Home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}