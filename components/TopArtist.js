import Image from 'next/image'
import Link from 'next/link'
function TopArtist({ artist }) {
  return (
    <section id='top_artist-artist' className='top_artist-artist'>
      <div className='top_artist-artist-card'>
        <Image
          src={artist.images[1].url}
          height={artist.images[1].height}
          width={artist.images[1].width}
        />
        <h3>{artist.name}</h3>
      </div>
    </section>
  )
}
export default TopArtist
