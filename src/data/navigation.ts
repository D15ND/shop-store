import { FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';

import { ROUTE_PATHS } from '@/routes/routePaths';

export const Navigation = [
  { title: 'Home', path: ROUTE_PATHS.HOME },
  { title: 'Shop', path: ROUTE_PATHS.SHOP },
  { title: 'About', path: ROUTE_PATHS.ABOUT },
];

export const SocailLinks = [
  { icon: FaGithub, link: 'https://github.com/D15ND' },
  { icon: IoLogoLinkedin, link: 'https://www.linkedin.com/in/boundaries/' },
];
