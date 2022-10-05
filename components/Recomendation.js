import { useAudioContext } from '../hooks/useAudioContext'
import Image from 'next/image'
import useAudio from '../hooks/useAudio'
import { faPlay, faPause } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Recomendation({ track }) {
  const { dispatch, isPlaying } = useAudioContext()
  const { playing, toggle } = useAudio(track.preview_url, dispatch, isPlaying)
  console.log(track)
  return (
    <section id='top_artist-artist' className='top_artist-artist'>
      <div className='top_artist-artist-card'>
        <Image
          src={track.album.images[1].url}
          height={track.album.images[1].height}
          width={track.album.images[1].width}
        />
        <h2>{track.name}</h2>
        <p onMouseEnter={() => toggle()} onMouseLeave={() => toggle()}>
          {playing ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </p>
      </div>
    </section>
  )
}
export default Recomendation
