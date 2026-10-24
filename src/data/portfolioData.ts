import { ProjectItem, ServiceItem } from '../types/index.ts';

export const MARQUEE_GIFS_ROW_1: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

export const MARQUEE_GIFS_ROW_2: string[] = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    number: '01',
    title: 'Анимег сонирхох',
    category: 'Эхлэл · One Piece',
    subtitle: 'Агуу адал явдал, эрх чөлөөний ертөнцөд хөл тавих анхны алхам',
    description:
      'Дэлхийн хамгийн алдартай, 1000+ ангитай домогт бүтээл One Piece. Дарвуулт хөлөг онгоц, Их далайн дээрэмчид, Луффи болон Зоро нарын анхны учирсан гайхамшигт эхлэл.',
    featuredAnime: ['One Piece (1-р анги)'],
    liveUrl: '#one-piece-ep1',
    videoType: 'episode',
    // One Piece Episode 1 Official Toei Stream (safe embed)
    videoEmbedUrl: 'https://www.youtube.com/embed/eYvT37fV_G4?autoplay=1',
    images: {
      col1Top:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx141902-fTyoTk8F8qOl.jpg',
      col1TopTitle: 'One Piece Film: Red Албан Ёсны Постер',
      col1Bottom:
        'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg',
      col1BottomTitle: 'One Piece · Straw Hats Их Далайн Постер',
      col2Tall:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-ELSYx3yMPcKM.jpg',
      col2TallTitle: 'One Piece · Үндсэн Албан Ёсны Түлхүүр Постер',
    },
  },
  {
    id: 'project-2',
    number: '02',
    title: 'Анименд дурлах',
    category: 'Дурлал · Shounen & Romance',
    subtitle: 'Шантрашгүй хүсэл зориг, сэтгэл догдлуулам хайр дурлалын ертөнц',
    description:
      'Анимэ урлагт жинхэнээсээ татагдан орох шилдэг бүтээлүүд: "My Hero Academia"-гийн супер баатрын тэмцэл, "Hajime no Ippo"-гийн хөлс дуслуулсан боксын дайчин сэтгэл, "More Than a Married Couple, But Not Lovers"-ийн нандин догдлол.',
    featuredAnime: [
      'My Hero Academia',
      'Hajime no Ippo',
      'More Than a Married Couple, But Not Lovers',
    ],
    liveUrl: '#passion-anime',
    videoType: 'showcase',
    videoEmbedUrl: 'https://www.youtube.com/embed/EPZe_Z_w-YI?autoplay=1',
    images: {
      col1Top:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx19647-cIy7ShTL6e9h.jpg',
      col1TopTitle: 'Hajime no Ippo · Иппогийн Домогт Боксын Постер',
      col1Bottom:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141949-tViCIRHPZAyG.jpg',
      col1BottomTitle: 'More Than a Married Couple · Хайр Дурлалын Постер',
      col2Tall:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-nYh85uj2Fuwr.jpg',
      col2TallTitle: 'My Hero Academia · Дэкү болон Баатруудын Постер',
    },
  },
  {
    id: 'project-3',
    number: '03',
    title: 'Анименд гүн дурлах',
    category: 'Гүн Сэтгэгдэл · Dark & Emotional',
    subtitle: 'Хүний сэтгэлийн гүн, өр өвтгөм хагацал, уран бүтээлийн дээд туйл',
    description:
      'Үзэгчийн сэтгэл зүрхийг хамгийн гүнзгий хөнддөг шилдэг анимэнүүд: "Akame ga Kill!"-ийн өршөөлгүй тэмцэл ба үхэл, "Devilman Crybaby"-ийн хүний мөн чанарыг нүцгэлсэн авангард урлаг, "Plastic Memories"-ийн нулимс дуслуулам дурсамж, хайрын үнэ цэнэ.',
    featuredAnime: [
      'Akame ga Kill!',
      'Devilman Crybaby',
      'Plastic Memories',
    ],
    liveUrl: '#deep-impact-anime',
    videoType: 'showcase',
    videoEmbedUrl: 'https://www.youtube.com/embed/jZ_y8YFpM5U?autoplay=1',
    images: {
      col1Top:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx98460-bLtH2c3jd6sV.png',
      col1TopTitle: 'Devilman Crybaby · Харанхуй Урлагийн Постер',
      col1Bottom:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20872-j5PBzzVtrYDM.jpg',
      col1BottomTitle: 'Plastic Memories · Айсла ба Дурсамжийн Постер',
      col2Tall:
        'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20613-HXHpec4bemk5.jpg',
      col2TallTitle: 'Akame ga Kill! · Night Raid Домогт Илдний Постер',
    },
  },
];
