import { Box } from '@chakra-ui/react';

type ImageProps = {
  imgAvif: string;
  imgWebp: string;
  imgDef: string;
  alt: string;
};

const ImageOptimization = ({ ...props }: ImageProps) => {
  return (
    <Box>
      <picture>
        <source srcSet={props.imgAvif} type="image/avif" />
        <source srcSet={props.imgWebp} type="image/webp" />
        <img src={props.imgDef} alt={props.alt} />
      </picture>
    </Box>
  );
};

export default ImageOptimization;
