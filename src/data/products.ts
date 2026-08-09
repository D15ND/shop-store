import {
  clothing,
  clothingAvif,
  clothingWebp,
  electron,
  electronAvif,
  electronWebp,
  jewelry,
  jewelryAvif,
  jewelryWebp,
} from '@/assets/images';

export const ProductsList = [
  {
    image: { imgAvif: electronAvif, imgWebp: electronWebp, imgDef: electron },
    description: 'Electronics',
  },
  {
    image: { imgAvif: jewelryAvif, imgWebp: jewelryWebp, imgDef: jewelry },
    description: 'Jewelry',
  },
  {
    image: { imgAvif: clothingAvif, imgWebp: clothingWebp, imgDef: clothing },
    description: 'Clothing',
  },
];
