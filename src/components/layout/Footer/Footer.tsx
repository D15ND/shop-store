import { Box, Link, Text } from '@chakra-ui/react';

import { SocailLinks } from '@/data/navigation';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box as="footer" className={styles.footer}>
      <Box className={styles.box}>
        <Text className={styles.title}>React Store</Text>
        <Text className={styles.rules}>2026 React Store. All rights reverved</Text>
      </Box>
      <Box className={styles.social}>
        {SocailLinks.map(({ icon: Icon, link }) => (
          <Link key={link} href={link} target="_blank" className={styles.link}>
            <Icon size={24} />
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;
