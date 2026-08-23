import { Box, Button, Image, Spinner, Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PaginationUI from '@/components/ui/PaginationUI/PaginationUI';
import SortSelect from '@/components/ui/SortSelect/SortSelect';
import Preview from '@/shared/Preview/Preview';
import { addToCart } from '@/store/cartCount';
import { useGetProductsQuery } from '@/store/productsAPI';
import type { RootState } from '@/store/store';

import styles from './ShopPage.module.css';

const ShopPage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.pagination.page);
  const sortSelect = useSelector((state: RootState) => state.select.sortValue);

  const { data, isLoading } = useGetProductsQuery(page);

  const products = data?.products;

  const sortProducts = useMemo(() => {
    if (!products) return [];
    if (sortSelect === 'low') {
      return products.toSorted((a, b) => a.price - b.price);
    }
    if (sortSelect === 'high') {
      return products.toSorted((a, b) => b.price - a.price);
    }
    return products;
  }, [products, sortSelect]);

  return (
    <Box className={styles.page}>
      <Preview>Shop</Preview>
      <Box className={styles.select_box}>
        <SortSelect />
      </Box>
      <Box className={styles.cards}>
        {isLoading ? (
          <Box className={styles.centered}>
            <Spinner size="lg" />
          </Box>
        ) : (
          sortProducts?.map(({ id, images, title, price }) => (
            <Box key={id} className={styles.card}>
              <Box className={styles.card_img_box}>
                <Image src={images[0]} alt={title} className={styles.card_img} />
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
