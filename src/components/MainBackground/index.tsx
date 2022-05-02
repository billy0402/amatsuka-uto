import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Background, mainBackgroundMap } from '@fixtures/main-background';
import { imageRouter } from '@lib/image';

const MainBackground = () => {
  const [background, setBackground] = useState<Background | undefined>();

  const router = useRouter();

  useEffect(() => {
    const newBackground =
      mainBackgroundMap[router.pathname as string] ?? undefined;
    setBackground(newBackground);
  }, [router.pathname]);

  return (
    <>
      {background && (
        <img
          className='main-background'
          src={imageRouter(`bg/${background.src}`)}
          alt={background.alt}
        />
      )}
    </>
  );
};

export default MainBackground;
