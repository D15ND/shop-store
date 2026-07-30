import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import image from '@/assets/images/preview.png';
import { API_URL } from '@/services/API';
import { addToCart } from '@/store/cartCount';
import type { Cards } from '@/types/Cards';

import styles from './ShopPage.module.css';

const ShopPage = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(API_URL);
        const data: Cards[] = await response.json();
        setCards(data);
      } catch {
        throw new Error('Error response to API');
      }
    };
    fetchResponse();
  }, []);

  return (
    <Box className={styles.page}>
      <Box className={styles.img_box}>
        <Image src={image} alt="image" className={styles.img} />
        <Text as="h1" className={styles.img_title}>
          Shop
        </Text>
      </Box>
      <Box className={styles.cards}>
        {cards.map(({ id, image, title, price }) => (
          <Box key={id} className={styles.card}>
            <Box className={styles.card_img_box}>
              <Image src={image} alt="card" className={styles.card_img} />
            </Box>
            <Text>{title}</Text>
            <Text>$ {price}</Text>
            <Button onClick={() => dispatch(addToCart(id))}>Add to cart</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShopPage;
