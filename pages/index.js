import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts'
import Card from '../components/card';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    let destinations = [{'name': 'California', 'id': 'ca'}, {'name': 'Colorado', 'id': 'co'}, {'name': 'Idaho', 'id': 'id'}, {'name': 'Oregon', 'id': 'or'}, {'name': 'Utah', 'id': 'ut'}, {'name': 'Wyoming', 'id': 'wy'}]

    let card; 
    let cardArr = [];
    destinations.forEach((dest) => {
        console.log('LOAD DEST: ', dest.name);
        card = <Card background="darkblue" title={dest.name} linkDest={dest.id} /> 
        cardArr.push(card);
    })

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className="m_grid m_grid3">
                {cardArr}
            </section>
            <section>
                <nav className="m_grid m_grid2">
                    {allPostsData.map(({ id, title }) => (
                        <div key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                        </div>
                    ))}
                </nav>
            </section>
        </Layout>
    )
}