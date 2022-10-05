import { useState, useEffect } from 'react'

const useAudio = (url, dispatch, isPlaying) => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)
  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => {
      setPlaying(false)
      dispatch({ type: 'SET_IS_PLAYING_FALSE' })
    })
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return { playing, toggle, audio }
}

export default useAudio
