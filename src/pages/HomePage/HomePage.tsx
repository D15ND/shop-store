import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import img from '@/assets/images/Home.jpg';
import { ProductsList } from '@/data/products';
import { ROUTE_PATHS } from '@/routes/routePaths';

import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.page}>
      <Image src={img} className={styles.main_img} />
      <Box className={styles.products_box}>
        <Text className={styles.title}>Out products</Text>
        <Box className={styles.product_cards}>
          {ProductsList.map(({ image, description }) => (
            <Box className={styles.product_card} key={description}>
              <Box className={styles.img_box}>
                <Image src={image} alt={description} className={styles.card_img} />
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
