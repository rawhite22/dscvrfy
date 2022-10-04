import { signOut } from 'next-auth/react'

export const handleHeaderSignOut = async (push) => {
  signOut()
  push('/')
}

export const handleEmailSignUpForm = async (
  e,
  email,
  loading,
  success,
  setEmail
) => {
  e.preventDefault()
  loading(true)
  success(false)
  const res = await fetch('api/contact', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  })
  const resData = await res.json()
  if (resData.accepted.length > 0) {
    setEmail('')
    loading(false)
    success(true)
  }
}
