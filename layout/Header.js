import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { handleHeaderSignOut } from '../lib/handlers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/pro-solid-svg-icons'
function Header() {
  const { data: session } = useSession()
  const { push } = useRouter()

  return (
    <header className='header-container'>
      <h1>Discoverfy</h1>
      {session && (
        <button
          className='sign-out-btn'
          onClick={() => handleHeaderSignOut(push)}>
          Sign Out <FontAwesomeIcon icon={faSignOut} />
        </button>
      )}
    </header>
  )
}
export default Header
