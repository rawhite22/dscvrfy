import Link from 'next/link'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer() {
  return (
    <footer className='footer'>
      <Link href={'https://github.com/rawhite22/dscvrfy'}>
        <a>
          <FontAwesomeIcon className='footer-icon' icon={faGithub} />
        </a>
      </Link>
      <Link href={'https://www.instagram.com/_discoverfy/'}>
        <a>
          {' '}
          <FontAwesomeIcon className='footer-icon' icon={faInstagram} />
        </a>
      </Link>
    </footer>
  )
}
export default Footer
