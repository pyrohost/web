import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <Image src="/img/logo.png" alt="Logo" width={256} height={114} />
        </Link>
      </nav>
    </header>
  )
}

export default NavBar