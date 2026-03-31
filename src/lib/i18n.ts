export type Lang = 'zh' | 'en';

export function getLang(input: string | null): Lang {
  return input === 'en' ? 'en' : 'zh';
}

export function withLang(path: string, lang: Lang): string {
  return `${path}?lang=${lang}`;
}

type LocalizedPhotoInput = {
  title: string;
  titleZh?: string;
  titleEn?: string;
  location: string;
  locationZh?: string;
  locationEn?: string;
  city: string;
  cityZh?: string;
  cityEn?: string;
  description?: string;
  descriptionZh?: string;
  descriptionEn?: string;
};

export function getLocalizedPhotoText(photo: LocalizedPhotoInput, lang: Lang) {
  if (lang === 'en') {
    return {
      title: photo.titleEn || photo.title,
      location: photo.locationEn || photo.location,
      city: photo.cityEn || photo.city,
      description: photo.descriptionEn || photo.description || ''
    };
  }

  return {
    title: photo.titleZh || photo.title,
    location: photo.locationZh || photo.location,
    city: photo.cityZh || photo.city,
    description: photo.descriptionZh || photo.description || ''
  };
}

type LocalizedTagInput = {
  name: string;
  nameZh?: string;
  nameEn?: string;
};

export function getLocalizedTagName(tag: LocalizedTagInput, lang: Lang): string {
  if (lang === 'en') {
    return tag.nameEn || tag.name;
  }
  return tag.nameZh || tag.name;
}
