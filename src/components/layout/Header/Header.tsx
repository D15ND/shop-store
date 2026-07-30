import { Box, IconButton, Image, List, Text } from '@chakra-ui/react';
import { SlBasket } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

import logo from '@/assets/icons/logo.svg';
import { ColorModeButton } from '@/components/ui/color-mode';
import { Navigation } from '@/data/navigation';
import { ROUTE_PATHS } from '@/routes/routePaths';
import type { RootState } from '@/store/store';

import styles from './Header.module.css';

const Header = () => {
  const cartIds = useSelector((state: RootState) => state.cart.productIds);
  const cartQuantity = Array.from(new Set(cartIds)).length;

  return (
    <Box as="header" className={styles.header}>
      <a href={ROUTE_PATHS.HOME} className={styles.logo_box}>
        <Image src={logo} className={styles.logo} />
        <Text className={styles.logo_title}>React Store</Text>
      </a>
      <Box as="nav" className={styles.navigation}>
        <List.Root className={styles.underlist}>
          {Navigation.map(({ title, path }) => (
            <List.Item key={title} className={styles.list}>
              <Link to={path}>{title}</Link>
            </List.Item>
          ))}
        </List.Root>
      </Box>
      <Box className={styles.store_menu}>
        <ColorModeButton />
        <IconButton aria-label="Search database" variant="ghost" className={styles.cart}>
          <SlBasket />
          <Text className={styles.cart_count}>{cartQuantity}</Text>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
