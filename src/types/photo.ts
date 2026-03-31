export type PhotoTag = {
  name: string;
  nameZh?: string;
  nameEn?: string;
  slug: string;
  group?: 'city' | 'subject' | 'mood';
};

export type PhotoItem = {
  _id: string;
  title: string;
  titleZh?: string;
  titleEn?: string;
  slug: string;
  imageUrl: string;
  location: string;
  locationZh?: string;
  locationEn?: string;
  city: string;
  cityZh?: string;
  cityEn?: string;
  capturedAt: string;
  camera: string;
  lens?: string;
  description?: string;
  descriptionZh?: string;
  descriptionEn?: string;
  tags: PhotoTag[];
  isFeatured?: boolean;
  sortOrder?: number;
};
