import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { mainBackgroundMap } from '@fixtures/main-background';
import { imageRouter } from '@lib/image';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const background = mainBackgroundMap[router.pathname] ?? 'bg-close-eyes.jpg';

  return (
    <>
      <Navbar />
      <main
        className='main'
        style={{
          backgroundImage: `url(${imageRouter(`bg/${background.src}`)})`,
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
