import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { handleHeaderSignOut } from '../lib/handlers'

function Header() {
  const { data: session } = useSession()
  const { push } = useRouter()
  return (
    <header>
      {session && (
        <button onClick={() => handleHeaderSignOut(push)}>Sign Out</button>
      )}
    </header>
  )
}
export default Header
