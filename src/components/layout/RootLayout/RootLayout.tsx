import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Wrapper from '@/components/ui/Wrapper/Wrapper';

import styles from './RootLayout.module.css';

const RootLayout = () => {
  return (
    <Wrapper>
      <Box className={styles.container}>
        <Header />
        <Box as="main" className={styles.main}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </Wrapper>
  );
};

export default RootLayout;
