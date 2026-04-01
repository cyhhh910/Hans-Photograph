import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';
import groq from 'groq';
import { mockPhotos } from '../data/mockPhotos';
import type { PhotoItem, PhotoTag } from '../types/photo';
import { normalizeSlug } from './slug';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET;
const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION ?? '2025-03-01';

const canUseSanity = Boolean(projectId && dataset);

const client = canUseSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true
    })
  : null;

const imageBuilder = client ? createImageUrlBuilder(client) : null;

type SanityTag = {
  name: string;
  nameZh?: string;
  nameEn?: string;
  slug: string;
  group?: 'city' | 'subject' | 'mood';
};

type SanityPhoto = {
  _id: string;
  title: string;
  titleZh?: string;
  titleEn?: string;
  slug: string;
  image: unknown;
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
  tags?: SanityTag[];
  isFeatured?: boolean;
  sortOrder?: number;
};

const photoQuery = groq`*[_type == "photo"] | order(sortOrder asc, capturedAt desc) {
  _id,
  title,
  titleZh,
  titleEn,
  "slug": slug.current,
  image,
  location,
  locationZh,
  locationEn,
  city,
  cityZh,
  cityEn,
  capturedAt,
  camera,
  lens,
  description,
  descriptionZh,
  descriptionEn,
  isFeatured,
  sortOrder,
  "tags": tags[]->{
    name,
    nameZh,
    nameEn,
    "slug": slug.current,
    group
  }
}`;

function toTag(tag: SanityTag): PhotoTag {
  return {
    name: tag.name,
    nameZh: tag.nameZh,
    nameEn: tag.nameEn,
    slug: tag.slug,
    group: tag.group
  };
}

function toPhoto(doc: SanityPhoto): PhotoItem {
  const slug = normalizeSlug(doc.slug) || doc._id.replace(/^drafts\./, '');
  return {
    _id: doc._id,
    title: doc.title,
    titleZh: doc.titleZh,
    titleEn: doc.titleEn,
    slug,
    imageUrl: imageBuilder?.image(doc.image).width(1400).quality(85).url() ?? '',
    location: doc.location,
    locationZh: doc.locationZh,
    locationEn: doc.locationEn,
    city: doc.city,
    cityZh: doc.cityZh,
    cityEn: doc.cityEn,
    capturedAt: doc.capturedAt,
    camera: doc.camera,
    lens: doc.lens,
    description: doc.description,
    descriptionZh: doc.descriptionZh,
    descriptionEn: doc.descriptionEn,
    tags: (doc.tags ?? []).map(toTag),
    isFeatured: doc.isFeatured,
    sortOrder: doc.sortOrder
  };
}

export async function getAllPhotos(): Promise<PhotoItem[]> {
  if (!client || !imageBuilder) {
    return mockPhotos;
  }

  const docs = await client.fetch<SanityPhoto[]>(photoQuery);
  return docs.map(toPhoto);
}

export async function getPhotoBySlug(slug: string): Promise<PhotoItem | null> {
  const photos = await getAllPhotos();
  const key = normalizeSlug(slug);
  return photos.find((item) => item.slug === key) ?? null;
}
