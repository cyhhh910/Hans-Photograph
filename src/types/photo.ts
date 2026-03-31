export type PhotoTag = {
  name: string;
  slug: string;
  group?: 'city' | 'subject' | 'mood';
};

export type PhotoItem = {
  _id: string;
  title: string;
  slug: string;
  imageUrl: string;
  location: string;
  city: string;
  capturedAt: string;
  camera: string;
  lens?: string;
  description?: string;
  tags: PhotoTag[];
  isFeatured?: boolean;
  sortOrder?: number;
};
