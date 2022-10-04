import { useState } from 'react'
import { getProviders, signIn, getSession, getCsrfToken } from 'next-auth/react'
import { handleEmailSignUpForm } from '../lib/handlers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane } from '@fortawesome/pro-solid-svg-icons'

function SignIn({ providers }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  return (
    <main id='sign-in-page' className='page-container sign-in-page'>
      <p>
        Spotify limits the amount of users while the app is in development mode.
        If you would like early access and help test the app please enter your
        email below.
      </p>
      <form
        onSubmit={(e) =>
          handleEmailSignUpForm(e, email, setLoading, setSuccess, setEmail)
        }>
        <div className='form-group'>
          <FontAwesomeIcon className='icon' icon={faEnvelope} size='2x' />
          <input
            type='email'
            name='email'
            value={email}
            placeholder='Email'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {loading ? (
          <button disabled type='submit' value='Submit'>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        ) : (
          <button type='submit' value='Submit'>
            Sign me up
          </button>
        )}
      </form>
      {success && (
        <div className='success-container'>
          <p>
            Email sent successfully this process may take up to 24 hours to
            complete.
          </p>
        </div>
      )}
      <p className='sign-in-message'>
        If you've already have access please sign in to spotify below.
      </p>
      {Object.values(providers).map((provider) => {
        return (
          <section className='sign-in' key={provider.name}>
            <button onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </section>
        )
      })}
    </main>
  )
}

export default SignIn

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/welcome' },
    }
  }

  return {
    props: {
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
    },
  }
}
