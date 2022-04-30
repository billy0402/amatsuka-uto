import { useEffect, useState } from 'react';

import type { NextPage } from 'next';

import { useSelectedLanguage, useTranslation } from 'next-export-i18n';

import { Language } from '@enums/language';
import guildlineEN from '@i18n/guildline/en-US';
import guildlineJP from '@i18n/guildline/ja-JP';

const GuildlinePage: NextPage = () => {
  const { t } = useTranslation();
  const { lang }: { lang: Language } = useSelectedLanguage();
  const [guildline, setGuildline] = useState<string>();

  useEffect(() => {
    switch (lang) {
      case Language.EN:
        setGuildline(guildlineEN);
        break;
      default:
        setGuildline(guildlineJP);
    }
  }, [lang]);

  return (
    <article className='article'>
      <h1 className='article__title'>{t('GUILDLINE.TITLE')}</h1>
      <p className='pre-line'>{guildline}</p>
    </article>
  );
};

export default GuildlinePage;
