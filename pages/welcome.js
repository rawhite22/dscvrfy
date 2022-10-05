import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'
import TopArtist from '../components/TopArtist'

import {
  getUsersTopArtists,
  getUsersTopTracks,
  getRecomendations,
} from '../lib/spotify'

const DynamicTopTrack = dynamic(() => import('../components/TopTrack'), {
  ssr: false,
})
const DynamicRecommendation = dynamic(
  () => import('../components/Recommendation'),
  { ssr: false }
)

function Welcome({ artists, tracks, recs }) {
  return (
    <main id='welcome-page' className='page-container welcome-page'>
      <h2>Top Artists</h2>
      <div className='top-artists-container'>
        {artists.map((artist) => (
          <TopArtist key={artist.id} artist={artist} />
        ))}
      </div>
      <h2>Top Songs</h2>
      <div className='top-songs-container'>
        {tracks.map((track) => (
          <DynamicTopTrack key={track.id} track={track} />
        ))}
      </div>
      <h2>Recomendations</h2>
      <div className='recommendation-container'>
        {recs.map((track) => (
          <DynamicRecommendation key={track.id} track={track} />
        ))}
      </div>
    </main>
  )
}
export default Welcome

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })
  if (!session) {
    return {
      redirect: { destination: '/' },
    }
  }
  const {
    token: { accessToken },
  } = session

  const topArtists = await getUsersTopArtists(accessToken)
  const taData = await topArtists.json()
  const topTracks = await getUsersTopTracks(accessToken)
  const ttData = await topTracks.json()
  const recomendations = await getRecomendations(
    taData.items,
    ttData.items,
    accessToken
  )
  const recs = await recomendations.json()
  const availablePreviews = recs.tracks.filter(
    (track) => track.preview_url !== null
  )
  return {
    props: {
      artists: taData.items,
      tracks: ttData.items,
      recs: availablePreviews,
    },
  }
}
