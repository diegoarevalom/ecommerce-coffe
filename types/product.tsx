export type ProductType = {
  id: number;
  documentId: string;
  productName: string;
  slug: string;
  description: string;
  active: boolean;
  price: number;
  origin: string;
  taste: string;
  isFeatured: boolean;
  images: {
    id: number;
    formats: {
      thumbnail: {
        url: string;
      };
      medium?: {
        url: string;
      };
      small?: {
        url: string;
      };
      large?: {
        url: string;
      };
    };
  }[];
  category: {
    id: number;
    documentId: string;
    categoryName: string;
    slug: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
