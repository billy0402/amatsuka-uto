import type { NextPage } from 'next';

import { useTranslation } from 'next-export-i18n';

const AboutPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <article className='article'>
      <h1 className='article__title'>Amatsuka Uto / 天使うと Profile</h1>
      <section className='article__introduction'>
        <p>{t('ABOUT.HEIGHT')}</p>
        <p>{t('ABOUT.AGE')}</p>
        <p>{t('ABOUT.BIRTHDAY')}</p>
      </section>

      <section className='article__introduction'>
        <p className='pre-line'>{t('ABOUT.SELF_INTRODUCTION')}</p>
      </section>

      <section className='article__introduction'>
        <p>{t('ABOUT.ILLUSTRATOR')}</p>
        <p>{t('ABOUT.LIVE2D_MODELER')}</p>
      </section>

      <p>{t('ABOUT.ACTIVITIES_BEGIN')}</p>
    </article>
  );
};

export default AboutPage;
