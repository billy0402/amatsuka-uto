import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { mainBackgroundMap } from '@fixtures/main-background';

const defaultImage = mainBackgroundMap['/'];

const MainBackground = () => {
  const [background, setBackground] = useState(defaultImage);

  const router = useRouter();

  useEffect(() => {
    const newBackground =
      mainBackgroundMap[router.pathname as string] ?? defaultImage;
    setBackground(newBackground);
  }, [router.pathname]);

  return (
    <img
      className='main-background'
      src={`images/${background.src}`}
      alt={background.alt}
    />
  );
};

export default MainBackground;
