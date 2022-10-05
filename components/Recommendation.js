import Image from 'next/image'
import Link from 'next/link'

function Recommendation({ track }) {
  return (
    <section id='recommendations' className='recommendations'>
      <div className='recommendation-card'>
        <Image
          src={track.album.images[1].url}
          height={track.album.images[1].height}
          width={track.album.images[1].width}
          alt='Album Artwork'
        />
        <h2>{track.name}</h2>

        <Link href={`${track.external_urls.spotify}`}>Open In Spotify</Link>
      </div>
    </section>
  )
}
export default Recommendation
