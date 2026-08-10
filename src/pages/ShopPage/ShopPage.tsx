import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PaginationUI from '@/components/ui/PaginationUI/PaginationUI';
import { limitProducts } from '@/data/constants';
import { API_URL } from '@/services/API';
import Preview from '@/shared/Preview/Preview';
import { addToCart } from '@/store/cartCount';
import type { RootState } from '@/store/store';
import { totalStore } from '@/store/totalProducts';
import type { Cards, ProductsResponse } from '@/types/Cards';

import styles from './ShopPage.module.css';

const ShopPage = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pagination.page);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await fetch(
          `${API_URL}?limit=${limitProducts}&skip=${limitProducts * page}`,
        );
        const data: ProductsResponse = await response.json();
        dispatch(totalStore(data.total));
        setCards(data.products);
      } catch {
        throw new Error('Error response to API');
      }
    };
    fetchResponse();
  }, [page]);

  return (
    <Box className={styles.page}>
      <Preview>Shop</Preview>
      <Box className={styles.cards}>
        {cards.map(({ id, images, title, price }) => (
          <Box key={id} className={styles.card}>
            <Box className={styles.card_img_box}>
              <Image src={images[0]} alt="card" className={styles.card_img} />
            </Box>
            <Text>{title}</Text>
            <Text>$ {price}</Text>
            <Button onClick={() => dispatch(addToCart({ id, images, title, price }))}>
              Add to cart
            </Button>
          </Box>
        ))}
      </Box>
      <PaginationUI />
    </Box>
  );
};

export default ShopPage;
