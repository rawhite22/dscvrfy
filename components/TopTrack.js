import Image from 'next/image'

function TopTrack({ track }) {
  return (
    <section id='top_artist-artist' className='top_artist-artist'>
      <div className='top_artist-artist-card'>
        <Image
          src={track.album.images[1].url}
          height={track.album.images[1].height}
          width={track.album.images[1].width}
          alt='Album Artwork'
        />
        <h3>{track.name}</h3>
      </div>
    </section>
  )
}
export default TopTrack
