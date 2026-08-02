import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { API_URL } from '@/services/API';
import Preview from '@/shared/Preview/Preview';
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
      <Preview>Shop</Preview>
      <Box className={styles.cards}>
        {cards.map(({ id, image, title, price }) => (
          <Box key={id} className={styles.card}>
            <Box className={styles.card_img_box}>
              <Image src={image} alt="card" className={styles.card_img} />
            </Box>
            <Text>{title}</Text>
            <Text>$ {price}</Text>
            <Button onClick={() => dispatch(addToCart({ id, image, title, price }))}>
              Add to cart
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShopPage;
