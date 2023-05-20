import type { NextPage } from 'next';
import Link from 'next/link';

import { goods } from '@fixtures/goods';
import { imageRouter } from '@lib/image';
import { useSelectedLanguage } from 'next-export-i18n';

const GoodsPage: NextPage = () => {
  const { lang } = useSelectedLanguage();

  return (
    <article className='article'>
      <ul className='goods'>
        {goods.map((good) => (
          <li key={good.title}>
            <img
              className='goods__cover'
              src={imageRouter(`goods/${good.image}`)}
              alt={good.title}
            />
            <article className='goods__info'>
              <h2>{good.title}</h2>
              <p className='pre-line'>{good.description}</p>
              <time>
                販売期間：
                {good.start.toLocaleDateString(lang)}
                {good.end && (
                  <span> ~ {good.end.toLocaleDateString(lang)}</span>
                )}
              </time>
              <section className='goods__actions'>
                <Link className='btn' target='_blank' href={good.link}>
                  More
                </Link>
              </section>
            </article>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default GoodsPage;
