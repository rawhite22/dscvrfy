import { AudioContext } from '../context/AudioContext'
import { useContext } from 'react'

export const useAudioContext = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error(
      'useAudioContext must be used inside an ThemeContextProvider'
    )
  }
  return context
}
