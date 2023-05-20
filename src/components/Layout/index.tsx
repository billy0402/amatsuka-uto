import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import { mainBackgroundMap } from '@fixtures/main-background';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const router = useRouter();

  const background = mainBackgroundMap[router.pathname];

  return (
    <>
      <Navbar />
      <main className={`main${background ? ` main--bg-${background}` : ''}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
