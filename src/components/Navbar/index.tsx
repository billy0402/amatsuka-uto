import Link from 'next/link';

import { LanguageSwitcher } from 'next-export-i18n';

import Icon, { IconName } from '@components/Icon';
import useI18n from '@hooks/useI18n';
import { imageRouter } from '@lib/image';

const Navbar = () => {
  const { i18nRouter } = useI18n();

  return (
    <header className='navbar'>
      <Link href={i18nRouter('/')}>
        <a>
          <img
            className='navbar__logo'
            src={imageRouter('logo.png')}
            alt='logo'
          />
        </a>
      </Link>
      <nav className='navbar__nav'>
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
        </ul>
        <ul className='navbar__items'>
          <li>
            <LanguageSwitcher lang='ja-JP'>JP</LanguageSwitcher>
          </li>
          <li>
            <LanguageSwitcher lang='en-US'>EN</LanguageSwitcher>
          </li>
          <li>
            <LanguageSwitcher lang='zh-TW'>TW</LanguageSwitcher>
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
