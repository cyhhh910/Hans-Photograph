import type { PhotoItem } from '../types/photo';

export const mockPhotos: PhotoItem[] = [
  {
    _id: 'photo-1',
    title: '城市穿梭',
    slug: 'city-tram',
    imageUrl: '/images/hero-city.png',
    location: '香港 / 中环',
    city: '香港',
    capturedAt: '2025-08-31',
    camera: '富士 XM5',
    lens: 'XF 35mm',
    description: '从城市缝隙中看见光线与轨道的节奏。',
    tags: [
      { name: '城市', slug: 'city', group: 'subject' },
      { name: '香港', slug: 'hong-kong', group: 'city' }
    ],
    isFeatured: true,
    sortOrder: 1
  },
  {
    _id: 'photo-2',
    title: '中山纪念公园',
    slug: 'sun-yat-sen-park',
    imageUrl: '/images/works-city.png',
    location: '香港 / 西营盘',
    city: '香港',
    capturedAt: '2025-04-21',
    camera: '富士 XM5',
    lens: 'XF 23mm',
    tags: [
      { name: '建筑', slug: 'architecture', group: 'subject' },
      { name: '香港', slug: 'hong-kong', group: 'city' }
    ],
    sortOrder: 2
  },
  {
    _id: 'photo-3',
    title: '经幡里的雪山',
    slug: 'flags-and-mountains',
    imageUrl: '/images/works-mountain.png',
    location: '阿坝州 / 红原',
    city: '阿坝州',
    capturedAt: '2024-10-03',
    camera: '富士 XM5',
    lens: 'XF 50mm',
    tags: [
      { name: '自然', slug: 'nature', group: 'subject' },
      { name: '阿坝州', slug: 'aba', group: 'city' }
    ],
    sortOrder: 3
  },
  {
    _id: 'photo-4',
    title: '胡同里',
    slug: 'hutong-inside',
    imageUrl: '/images/works-hutong.png',
    location: '北京 / 东城区',
    city: '北京',
    capturedAt: '2024-01-12',
    camera: '富士 XM5',
    lens: 'XF 35mm',
    tags: [
      { name: '街头', slug: 'street', group: 'subject' },
      { name: '北京', slug: 'beijing', group: 'city' }
    ],
    sortOrder: 4
  }
];
