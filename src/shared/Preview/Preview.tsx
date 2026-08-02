import { Box, Image, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import image from '@/assets/images/preview.png';

import styles from './Preview.module.css';

type PreviewProp = {
  children?: ReactNode;
};

const Preview = ({ children }: PreviewProp) => {
  return (
    <Box className={styles.img_box}>
      <Image src={image} alt="image" className={styles.img} />
      <Text as="h1" className={styles.img_title}>
        {children}
      </Text>
    </Box>
  );
};

export default Preview;
