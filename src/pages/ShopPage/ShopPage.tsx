import { Box, Button, Image, Spinner, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import PaginationUI from '@/components/ui/PaginationUI/PaginationUI';
import Preview from '@/shared/Preview/Preview';
import { addToCart } from '@/store/cartCount';
import { useGetProductsQuery } from '@/store/productsAPI';
import type { RootState } from '@/store/store';

import styles from './ShopPage.module.css';

const ShopPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pagination.page);

  const { data, isLoading } = useGetProductsQuery(page);

  const products = data?.products;

  return (
    <Box className={styles.page}>
      <Preview>Shop</Preview>
      <Box className={styles.cards}>
        {isLoading ? (
          <Box className={styles.centered}>
            <Spinner size="lg" />
          </Box>
        ) : (
          products?.map(({ id, images, title, price }) => (
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
          ))
        )}
      </Box>
      <PaginationUI total={data?.total || 0} />
    </Box>
  );
};

export default ShopPage;
