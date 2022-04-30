import Link from 'next/link';

import Icon, { IconName } from '@components/Icon';

const Navbar = () => {
  return (
    <header className='navbar'>
      <Link href='/'>
        <a>
          <img className='navbar__logo' src='images/logo.png' alt='logo' />
        </a>
      </Link>
      <nav className='navbar__nav'>
        <ul className='navbar__items'>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/guildline'>Guildline</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
        <ul className='navbar__items'>
          <li>
            <Link href='https://twitter.com/amatsukauto'>
              <a>
                <Icon name={IconName.twitter} size='large' />
              </a>
            </Link>
          </li>
          <li>
            <Link href='https://www.youtube.com/channel/UCdYR5Oyz8Q4g0ZmB4PkTD7g'>
              <a>
                <Icon name={IconName.youtube} size='large' />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
