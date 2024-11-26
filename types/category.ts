export type CategoryType = {
  id: number;
  documentId: string;
  categoryName: string;
  slug: string;
  mainImage: {
    id: string,
    formats: {
      thumbnail: {
        url: string;
      };
    }
  }
}