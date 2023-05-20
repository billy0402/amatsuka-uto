import Link from 'next/link';

import { LanguageSwitcher } from 'next-export-i18n';

import useI18n from '@hooks/useI18n';
import { imageRouter } from '@lib/image';

const Navbar = () => {
  const { i18nRouter } = useI18n();

  return (
    <header className='navbar'>
      <nav className='navbar__container'>
        <Link href={i18nRouter('/')}>
          <img
            className='navbar__logo'
            src={imageRouter('logo.png')}
            alt='logo'
          />
        </Link>
        <ul className='navbar__items'>
          <li>
            <Link href={i18nRouter('/about')}>About</Link>
          </li>
          <li>
            <Link href={i18nRouter('/goods')}>Goods</Link>
          </li>
          <li>
            <Link href={i18nRouter('/guildline')}>Guildline</Link>
          </li>
          <li>
            <Link href={i18nRouter('/contact')}>Contact</Link>
          </li>
          <li className='margin-left'>
            <LanguageSwitcher lang='ja-JP'>JP</LanguageSwitcher>
          </li>
          <li>
            <LanguageSwitcher lang='en-US'>EN</LanguageSwitcher>
          </li>
          <li>
            <LanguageSwitcher lang='zh-TW'>TW</LanguageSwitcher>
          </li>
          <li className='margin-left'>
            <Link href='https://twitter.com/amatsukauto'>
              <span className='icomoon-twitter' />
            </Link>
          </li>
          <li>
            <Link href='https://www.youtube.com/channel/UCdYR5Oyz8Q4g0ZmB4PkTD7g'>
              <span className='icomoon-youtube' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
