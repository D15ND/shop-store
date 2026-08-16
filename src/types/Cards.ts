export type Cards = {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  images: string[];
};

export type ProductsResponse = {
  products: Cards[];
  total: number;
  skip: number;
  limit: number;
};

export type ErrorResponse = {
  status: number;
  data: {
    message: string;
  };
};
