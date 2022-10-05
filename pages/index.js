import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
export default function Home() {
  return (
    <main id='home-page' className='page-container home'>
      <Head>
        <title>Discoverfy</title>
      </Head>
      <Image
        src={
          'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3269&q=80'
        }
        height={500}
        width={800}
      />
      <small>
        Photo by{' '}
        <a className='credit' href='https://unsplash.com/@mohammadmetri'>
          Mohammad Metri
        </a>
      </small>
      <h2>Welcome to discoverfy</h2>
      <p>
        Disocverfy takes your most recent top rated artists and songs and gives
        you a list of recommendations.
      </p>
      <p>Discover new music based on your most current listening trends</p>
      <Link href='/signin'>Sign Into Spotify</Link>
    </main>
  )
}
