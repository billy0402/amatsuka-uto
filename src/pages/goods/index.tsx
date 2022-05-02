import type { NextPage } from 'next';
import Link from 'next/link';

import { goods } from '@fixtures/goods';
import { imageRouter } from '@lib/image';

const GoodsPage: NextPage = () => {
  return (
    <article className='article'>
      <ul className='goods__items'>
        {goods.map((good) => (
          <li key={good.title} className='goods__item'>
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
                {good.start.toLocaleDateString()}
                {good.end && <span> ~ {good.end?.toLocaleDateString()}</span>}
              </time>
              <section className='goods__actions'>
                <Link href={good.link}>
                  <a className='btn'>More</a>
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
