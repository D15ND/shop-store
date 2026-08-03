import { Box, Button, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { ROUTE_PATHS } from '@/routes/routePaths';
import Preview from '@/shared/Preview/Preview';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles.page}>
      <Preview />
      <Box className={styles.box}>
        <Heading className={styles.title}>404</Heading>
        <Text className={styles.description}>Page not found</Text>
        <Button className={styles.button} onClick={() => navigate(ROUTE_PATHS.HOME)}>
          Go back
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
