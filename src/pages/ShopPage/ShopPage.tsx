import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import image from '@/assets/images/preview.png';
import { API_URL } from '@/services/API';
import type { Cards } from '@/types/Cards';

import styles from './ShopPage.module.css';

const ShopPage = () => {
  const [cards, setCards] = useState<Cards[]>([]);

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
        {cards.map((card) => (
          <Box key={card.id} className={styles.card}>
            <Box className={styles.card_img_box}>
              <Image src={card.image} alt="card" className={styles.card_img} />
            </Box>
            <Text>{card.title}</Text>
            <Text>$ {card.price}</Text>
            <Button>Add to cart</Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShopPage;
