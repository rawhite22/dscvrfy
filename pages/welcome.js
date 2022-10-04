import dynamic from 'next/dynamic'
import { getSession } from 'next-auth/react'
import TopArtist from '../components/TopArtist'

import {
  getUsersTopArtists,
  getUsersTopTracks,
  getRecomendations,
} from '../lib/spotify'
import { useState } from 'react'

const DynamicTopTrack = dynamic(() => import('../components/TopTrack'), {
  ssr: false,
})
function Welcome({ artists, tracks }) {
  const [p, setP] = useState(false)
  return (
    <main id='welcome-page' className='page-container welcome-page'>
      <h2>Top Artists</h2>
      <div className='top-artists-container'>
        {artists.map((artist) => (
          <TopArtist key={artist.id} artist={artist} />
        ))}
      </div>
      <h2>Top Songs</h2>
      <div className='top-artists-container'>
        {tracks.map((track) => (
          <DynamicTopTrack key={track.id} track={track} p={p} setP={setP} />
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
  const recomendations = await getRecomendations(taData.items, ttData.items)
  return {
    props: { artists: taData.items, tracks: ttData.items },
  }
}
