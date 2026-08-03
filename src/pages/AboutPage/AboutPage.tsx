import { Box, Text } from '@chakra-ui/react';

import { ContactsInfo, GuaranteesInfo } from '@/data/contacts';
import Preview from '@/shared/Preview/Preview';

import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <Box className={styles.page}>
      <Preview>About</Preview>
      <Box className={styles.box}>
        <Box className={styles.info_box}>
          <Text className={styles.title}>
            <Text as="span" className={styles.title_modification}>
              React Store
            </Text>{' '}
            - online shop
          </Text>
          <Text className={styles.description}>
            The store offers electronics, clothing and jewelry.
          </Text>
        </Box>
      </Box>
      <Box className={styles.work_box}>
        {ContactsInfo.map(({ icon: Icon, title, info }) => (
          <Box className={styles.container} key={title}>
            <Icon size={20} />
            <Box className={styles.container_info}>
              <Text>{title}</Text>
              <Text>{info}</Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Box className={styles.box_guarantees}>
        {GuaranteesInfo.map(({ icon: Icon, title, description }) => (
          <Box className={styles.guarantees_card} key={title}>
            <Icon size={32} />
            <Box className={styles.guarantees_card_box}>
              <Text>{title}</Text>
              <Text className={styles.description}>{description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutPage;
