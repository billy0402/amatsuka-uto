import Footer from '@components/Footer';
import MainBackground from '@components/MainBackground';
import Navbar from '@components/Navbar';

type Props = {
  children?: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <MainBackground />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
