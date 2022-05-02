type Background = { src: string; alt: string };

const mainBackgroundMap: { [key in string]: Background } = {
  '/': {
    src: 'bg-close-eyes.jpg',
    alt: 'Amatsuka Uto',
  },
  '/about': {
    src: 'bg-intro.jpg',
    alt: 'Amatsuka Uto',
  },
  '/goods': {
    src: 'bg-utopia.jpg',
    alt: 'Amatsuka Uto',
  },
  '/guildline': {
    src: 'bg-loli.jpg',
    alt: 'Amatsuka Uto',
  },
  '/contact': {
    src: 'bg-open-eyes.jpg',
    alt: 'Amatsuka Uto',
  },
};

export type { Background };
export { mainBackgroundMap };
