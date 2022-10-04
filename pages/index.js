import Link from 'next/link'

export default function Home() {
  return (
    <main id='home-page' className='page-container'>
      <Link href='/signin'>Sign Into Spotify</Link>
    </main>
  )
}
