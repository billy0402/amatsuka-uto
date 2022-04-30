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
    </>
  );
};

export default Layout;
