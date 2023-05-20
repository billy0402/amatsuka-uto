import Link from 'next/link';

import { LanguageSwitcher } from 'next-export-i18n';

import useI18n from '@hooks/useI18n';
import { imageRouter } from '@lib/image';
import { useState } from 'react';

const Navbar = () => {
  const { i18nRouter } = useI18n();

  const [active, setActive] = useState(false);

  return (
    <header className='navbar'>
      <nav className={`navbar__container${active ? ' active' : ''}`}>
        <a
          onClick={() => setActive(!active)}
          className={`navbar__burger${active ? ' active' : ''}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
        <Link href={i18nRouter('/')} onClick={() => setActive(false)}>
          <img
            className='navbar__logo'
            src={imageRouter('logo.png')}
            alt='logo'
          />
        </Link>
        <ul className='navbar__items' onClick={() => setActive(false)}>
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
            <Link target='_blank' href='https://twitter.com/amatsukauto'>
              <span className='icomoon-twitter' />
            </Link>
          </li>
          <li>
            <Link
              target='_blank'
              href='https://www.youtube.com/channel/UCdYR5Oyz8Q4g0ZmB4PkTD7g'
            >
              <span className='icomoon-youtube' />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
