import { Box, Button, Image, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import CounterStepper from '@/components/ui/CounterStepper/CounterStepper';
import OrderModal from '@/components/ui/OrderModal/OrderModal';
import Preview from '@/shared/Preview/Preview';
import { removeCart } from '@/store/cartCount';
import type { RootState } from '@/store/store';

import styles from './CartPage.module.css';

const CartPage = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const sumCost = products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);
  const dispatch = useDispatch();

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
            <OrderModal />
            <Text className={styles.sum_cost}>
              Total cost: ${' '}
              <Text as="span" className={styles.cost_span}>
                {sumCost}
              </Text>
            </Text>
          </Box>
          <Box className={styles.cards}>
            {products.map(({ id, images, title, price }) => (
              <Box className={styles.card} key={id}>
                <Box className={styles.card_img_box}>
                  <Image src={images[0]} alt="card" className={styles.card_img} />
                </Box>
                <Text>{title}</Text>
                <Text>$ {price}</Text>
                <Box className={styles.quantity_box}>
                  <CounterStepper />
                </Box>
                <Button className={styles.card_button} onClick={() => dispatch(removeCart(id))}>
                  Remove
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
