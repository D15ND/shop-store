import { Box, CloseButton, Drawer, IconButton, List, Portal } from '@chakra-ui/react';
import { IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router';

import { Navigation } from '@/data/navigation';

import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <Box className={styles.burger}>
      <Drawer.Root size={'full'}>
        <Drawer.Trigger asChild>
          <IconButton aria-label="Search database" variant="ghost" size={'sm'}>
            <IoMenuOutline />
          </IconButton>
        </Drawer.Trigger>
        <Portal>
          <Drawer.Positioner className={styles.positioner}>
            <Drawer.Content>
              <Drawer.Body className={styles.box}>
                <Box as="nav" className={styles.navigation}>
                  <List.Root className={styles.underlist}>
                    {Navigation.map(({ title, path }) => (
                      <Drawer.ActionTrigger asChild>
                        <List.Item key={title} className={styles.list}>
                          <Link to={path}>{title}</Link>
                        </List.Item>
                      </Drawer.ActionTrigger>
                    ))}
                  </List.Root>
                </Box>
              </Drawer.Body>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="lg" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
};

export default BurgerMenu;
