import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import Preview from '@/shared/Preview/Preview';
import type { RootState } from '@/store/store';

import styles from './CartPage.module.css';

const CartPage = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const sumCost = products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  return (
    <Box className={styles.page}>
      <Preview>Cart</Preview>
      {products.length === 0 ? (
        <Box className={styles.spare_box}>
          <Text className={styles.spare_desc}>Cart is empty</Text>
        </Box>
      ) : (
        <Box className={styles.box}>
          <Box className={styles.order_box}>
            <Button className={styles.buy_button}>Buy</Button>
            <Text className={styles.sum_cost}>
              Total cost: ${' '}
              <Text as="span" className={styles.cost_span}>
                {sumCost}
              </Text>
            </Text>
          </Box>
          <Box className={styles.cards}>
            {products.map(({ id, image, title, price }) => (
              <Box className={styles.card} key={id}>
                <Box className={styles.card_img_box}>
                  <Image src={image} alt="card" className={styles.card_img} />
                </Box>
                <Text>{title}</Text>
                <Text>$ {price}</Text>
                <Box className={styles.quantity_box}>
                  <Button>-</Button>
                  <Text>Quantity</Text>
                  <Button>+</Button>
                </Box>
                <Button className={styles.card_button}>Remove</Button>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
