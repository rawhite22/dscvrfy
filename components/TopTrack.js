import { useAudioContext } from '../hooks/useAudioContext'
import Image from 'next/image'
import useAudio from '../hooks/useAudio'

function TopTrack({ track, p, setP }) {
  const { dispatch, isPlaying } = useAudioContext()
  const { playing, toggle } = useAudio(track.preview_url, dispatch)
  console.log(isPlaying)
  return (
    <section id='top_artist-artist' className='top_artist-artist'>
      <div className='top_artist-artist-card'>
        <Image
          src={track.album.images[1].url}
          height={track.album.images[1].height}
          width={track.album.images[1].width}
        />
        <h2>{track.name}</h2>
        <p
          onClick={() => {
            toggle()
            dispatch({ type: 'SET_IS_PLAYING_TRUE' })
          }}>
          preview
        </p>
      </div>
    </section>
  )
}
export default TopTrack