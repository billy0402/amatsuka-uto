import { useState } from 'react';

import Link from 'next/link';

import { LanguageSwitcher } from 'next-export-i18n';

import { languages } from '@fixtures/languages';
import { routers } from '@fixtures/routers';
import { socialLinks } from '@fixtures/social-links';
import useI18n from '@hooks/useI18n';
import { imageRouter } from '@lib/image';

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
          {routers.map(({ label, href }) => (
            <li key={href}>
              <Link href={i18nRouter(href)}>{label}</Link>
            </li>
          ))}
          <hr />
          {languages.map(({ label, locale }) => (
            <li key={locale}>
              <LanguageSwitcher lang={locale}>{label}</LanguageSwitcher>
            </li>
          ))}
          <hr />
          {socialLinks.map(({ icon, href }) => (
            <li key={href}>
              <Link
                target='_blank'
                href={href}
                style={{ textDecoration: 'none' }}
              >
                <span className={`icomoon-${icon}`} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
