import { Box, Text } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { preview, previewAvif, previewWebp } from '@/assets/images';
import ImageOptimization from '@/shared/ImageOptimization/ImageOptimization';

import styles from './Preview.module.css';

type PreviewProp = {
  children?: ReactNode;
};

const Preview = ({ children }: PreviewProp) => {
  return (
    <Box className={styles.img_box}>
      <Box className={styles.img}>
        <ImageOptimization
          imgAvif={previewAvif}
          imgWebp={previewWebp}
          imgDef={preview}
          alt="preview"
        />
      </Box>
      <Text as="h1" className={styles.img_title}>
        {children}
      </Text>
    </Box>
  );
};

export default Preview;
