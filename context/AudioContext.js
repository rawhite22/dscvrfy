import { createContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

export const AudioContext = createContext()
export const AudioContextReducer = (state, action) => {
  switch (action.type) {
    case 'SET_IS_PLAYING_TRUE':
      return { ...state, isPlaying: true }
    case 'SET_IS_PLAYING_FALSE':
      return { ...state, isPlaying: false }

    default:
      return state
  }
}
export const AudioContextProvider = ({ children, component }) => {
  const [state, dispatch] = useReducer(AudioContextReducer, {
    isPlaying: false,
  })
  const { events } = useRouter()
  useEffect(() => {
    const handleStart = () => {}
    const handleComplete = () => {}
    events.on('routeChangeStart', handleStart)
    events.on('routeChangeComplete', handleComplete)
  }, [])
  return (
    <AudioContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AudioContext.Provider>
  )
}
