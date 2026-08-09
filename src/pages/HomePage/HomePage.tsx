import { Box, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { Home, HomeAvif, HomeWebp } from '@/assets/images';
import { ProductsList } from '@/data/products';
import { ROUTE_PATHS } from '@/routes/routePaths';
import ImageOptimization from '@/shared/Preview/ImageOptimization/ImageOptimization';

import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.page}>
      <ImageOptimization imgAvif={HomeAvif} imgWebp={HomeWebp} imgDef={Home} alt="home" />
      <Box className={styles.products_box}>
        <Text className={styles.title}>Out products</Text>
        <Box className={styles.product_cards}>
          {ProductsList.map(({ image, description }) => (
            <Box className={styles.product_card} key={description}>
              <Box className={styles.img_box}>
                <Box className={styles.card_img}>
                  <ImageOptimization
                    imgAvif={image.imgAvif}
                    imgWebp={image.imgWebp}
                    imgDef={image.imgDef}
                    alt={description}
                  />
                </Box>
              </Box>
              <Text className={styles.card_description}>{description}</Text>
            </Box>
          ))}
        </Box>
        <Button className={styles.show_button} onClick={() => navigate(ROUTE_PATHS.SHOP)}>
          Show More
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
