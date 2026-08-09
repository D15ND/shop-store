import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

type ImageProps = {
  children?: ReactNode;
  imgAvif: string;
  imgWebp: string;
  imgDef: string;
  alt: string;
};

const ImageOptimization = ({ children, ...props }: ImageProps) => {
  return (
    <Box>
      <picture>
        <source srcSet={props.imgAvif} type="image/avif" />
        <source srcSet={props.imgWebp} type="image/webp" />
        <img src={props.imgDef} />
      </picture>
    </Box>
  );
};

export default ImageOptimization;
