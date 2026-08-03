import { CiDollar } from 'react-icons/ci';
import { FaPhoneAlt, FaShippingFast } from 'react-icons/fa';
import { IoLocation, IoTimeSharp } from 'react-icons/io5';
import { MdOutlineSecurity } from 'react-icons/md';

export const ContactsInfo = [
  { icon: IoLocation, title: 'Adress', info: 'Minsk, Gazety Pravda 9a' },
  { icon: FaPhoneAlt, title: 'Phone', info: '+375297654321' },
  { icon: IoTimeSharp, title: 'Working Time', info: 'Everyday 9:00 - 21:00' },
];

export const GuaranteesInfo = [
  { icon: CiDollar, title: 'Low Price', description: 'goods directly from manufacturers' },
  { icon: MdOutlineSecurity, title: 'Warranty Protection', description: 'Over 1 year' },
  { icon: FaShippingFast, title: 'Free Shipping', description: 'Order over $100' },
];
