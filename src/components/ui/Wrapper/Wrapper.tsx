import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import styles from './Wrapper.module.css';

type WrapperProps = {
  children?: ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return <Box className={styles.wrapper}>{children}</Box>;
};

export default Wrapper;
