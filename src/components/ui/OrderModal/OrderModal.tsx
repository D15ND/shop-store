import { Box, Button, Dialog, Field, Input, Portal, Stack, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { withMask } from 'use-mask-input';

import type { RootState } from '@/store/store';

import styles from './OrderModal.module.css';

const OrderModal = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const products = useSelector((state: RootState) => state.cart.products);
  const sumCost = products.reduce((acc, curr) => acc + curr.price, 0).toFixed(2);

  return (
    <Dialog.Root initialFocusEl={() => ref.current} placement="center">
      <Dialog.Trigger asChild>
        <Button variant="outline" className={styles.buy_button}>
          Buy
        </Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content className={styles.popup}>
            <Dialog.Header className={styles.header}>
              <Dialog.Title>Delivery details</Dialog.Title>
              <Text>
                Total cost: $
                <Text as="span" className={styles.cost_span}>
                  {sumCost}
                </Text>
              </Text>
            </Dialog.Header>
            <Dialog.Body pb="4">
              <Stack gap="4">
                <Field.Root>
                  <Box className={styles.names_box}>
                    <Field.Root>
                      <Field.Label>First name</Field.Label>
                      <Input placeholder="Ivan" ref={ref} className={styles.input} />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Last name</Field.Label>
                      <Input placeholder="Smith" type="text" className={styles.input} />
                    </Field.Root>
                  </Box>
                  <Field.Label>Town</Field.Label>
                  <Input placeholder="Minsk" className={styles.input} />
                </Field.Root>
                <Field.Root>
                  <Field.Label>Adress</Field.Label>
                  <Input placeholder="Gagarina street" className={styles.input} />
                </Field.Root>
                <Box className={styles.flex_box}>
                  <Field.Root className={styles.post_box}>
                    <Field.Label>Post index</Field.Label>
                    <Input placeholder="222160" ref={withMask('999999')} className={styles.input} />
                  </Field.Root>
                  <Field.Root className={styles.phone_box}>
                    <Field.Label>Phone number</Field.Label>
                    <Input
                      placeholder="(375)29-7654321"
                      ref={withMask('(999)99-9999999')}
                      className={styles.input}
                    />
                  </Field.Root>
                  <Field.Root className={styles.email_box}>
                    <Field.Label>Email</Field.Label>
                    <Input placeholder="ivanSmith@gmail.com" className={styles.input} />
                  </Field.Root>
                </Box>
              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" className={styles.button}>
                  Cancel
                </Button>
              </Dialog.ActionTrigger>
              <Button className={styles.button}>Buy</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default OrderModal;
