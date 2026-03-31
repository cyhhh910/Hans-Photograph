import type { PhotoItem } from '../types/photo';

export const mockPhotos: PhotoItem[] = [
  {
    _id: 'photo-1',
    title: '城市穿梭',
    titleZh: '城市穿梭',
    titleEn: 'City Tram',
    slug: 'city-tram',
    imageUrl: '/images/hero-city.png',
    location: '香港 / 中环',
    locationZh: '香港 / 中环',
    locationEn: 'Hong Kong / Central',
    city: '香港',
    cityZh: '香港',
    cityEn: 'Hong Kong',
    capturedAt: '2025-08-31',
    camera: '富士 XM5',
    lens: 'XF 35mm',
    description: '从城市缝隙中看见光线与轨道的节奏。',
    descriptionZh: '从城市缝隙中看见光线与轨道的节奏。',
    descriptionEn: 'A rhythm of light and rails framed inside the city.',
    tags: [
      { name: '城市', nameZh: '城市', nameEn: 'City', slug: 'city', group: 'subject' },
      { name: '香港', nameZh: '香港', nameEn: 'Hong Kong', slug: 'hong-kong', group: 'city' }
    ],
    isFeatured: true,
    sortOrder: 1
  },
  {
    _id: 'photo-2',
    title: '中山纪念公园',
    titleZh: '中山纪念公园',
    titleEn: 'Sun Yat Sen Memorial Park',
    slug: 'sun-yat-sen-park',
    imageUrl: '/images/works-city.png',
    location: '香港 / 西营盘',
    locationZh: '香港 / 西营盘',
    locationEn: 'Hong Kong / Sai Ying Pun',
    city: '香港',
    cityZh: '香港',
    cityEn: 'Hong Kong',
    capturedAt: '2025-04-21',
    camera: '富士 XM5',
    lens: 'XF 23mm',
    tags: [
      { name: '建筑', nameZh: '建筑', nameEn: 'Architecture', slug: 'architecture', group: 'subject' },
      { name: '香港', nameZh: '香港', nameEn: 'Hong Kong', slug: 'hong-kong', group: 'city' }
    ],
    sortOrder: 2
  },
  {
    _id: 'photo-3',
    title: '经幡里的雪山',
    titleZh: '经幡里的雪山',
    titleEn: 'Flags and Mountains',
    slug: 'flags-and-mountains',
    imageUrl: '/images/works-mountain.png',
    location: '阿坝州 / 红原',
    locationZh: '阿坝州 / 红原',
    locationEn: 'Aba / Hongyuan',
    city: '阿坝州',
    cityZh: '阿坝州',
    cityEn: 'Aba',
    capturedAt: '2024-10-03',
    camera: '富士 XM5',
    lens: 'XF 50mm',
    tags: [
      { name: '自然', nameZh: '自然', nameEn: 'Nature', slug: 'nature', group: 'subject' },
      { name: '阿坝州', nameZh: '阿坝州', nameEn: 'Aba', slug: 'aba', group: 'city' }
    ],
    sortOrder: 3
  },
  {
    _id: 'photo-4',
    title: '胡同里',
    titleZh: '胡同里',
    titleEn: 'Inside Hutong',
    slug: 'hutong-inside',
    imageUrl: '/images/works-hutong.png',
    location: '北京 / 东城区',
    locationZh: '北京 / 东城区',
    locationEn: 'Beijing / Dongcheng',
    city: '北京',
    cityZh: '北京',
    cityEn: 'Beijing',
    capturedAt: '2024-01-12',
    camera: '富士 XM5',
    lens: 'XF 35mm',
    tags: [
      { name: '街头', nameZh: '街头', nameEn: 'Street', slug: 'street', group: 'subject' },
      { name: '北京', nameZh: '北京', nameEn: 'Beijing', slug: 'beijing', group: 'city' }
    ],
    sortOrder: 4
  }
];
