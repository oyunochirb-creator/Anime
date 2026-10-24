export interface AnimeFavorite {
  rank: number;
  title: string;
  japaneseTitle?: string;
  favoriteCharacter: string;
  characterRole: string;
  description: string;
  quote: string;
  genre: string[];
  themeColor: string;
  accentGradient: string;
  // Official character portrait & background banner
  characterIconicImage: string;
  characterBanner: string;
  badgeTitle: string;
}

export const FAVORITE_ANIMES: AnimeFavorite[] = [
  {
    rank: 1,
    title: 'One Piece',
    japaneseTitle: 'ワンピース',
    favoriteCharacter: 'Roronoa Zoro (Зоро)',
    characterRole: 'Straw Hat Pirates · First Mate & Master Swordsman',
    badgeTitle: 'Илдний Хаан · Санторюү',
    description:
      'Илдний урлагийг туйлд нь хүртэл эзэмшсэн, 3 сэлэмт техник (Santoryu), "Nothing happened" хэмээх домгийн агшин, үнэнч нөхөрлөл, хатуу сахилга батаараа дэлхий даяар сая сая хүнийг байлдан дагуулсан дүр.',
    quote: 'Scars on the back are a swordsman’s shame. (Нуруундаа авсан шарх бол сэлэмчний гутамшиг.)',
    genre: ['Action', 'Adventure', 'Fantasy'],
    themeColor: '#10b981',
    accentGradient: 'linear-gradient(135deg, #022c22 0%, #065f46 50%, #10b981 100%)',
    characterIconicImage:
      'https://s4.anilist.co/file/anilistcdn/character/large/b62-S7oAeA9WInjV.png',
    characterBanner:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg',
  },
  {
    rank: 2,
    title: 'My Dress-Up Darling',
    japaneseTitle: 'その着せ替え人形は恋をする',
    favoriteCharacter: 'Marin Kitagawa (Марин)',
    characterRole: 'Gyaru · Passionate Cosplayer',
    badgeTitle: 'Косплэй Дүр · Хамгийн Цоглог',
    description:
      'Өөрийн дуртай анимэ, тоглоомын баатруудаа косплэй хийх чин хүсэлтэй. Шизүкү-тан дүрийг амилуулж, өөрийн хүсэл мөрөөдөлдөө үнэнч, бусдын сонирхлыг хэзээ ч шоолдоггүй супер гэгээлэг, хайр татам дүр.',
    quote: 'You shouldn’t make fun of the things people genuinely love! (Хүмүүсийн чин сэтгэлээсээ дурлаж хайрладаг зүйлийг шоолж болохгүй!)',
    genre: ['Romance', 'Cosplay', 'Slice of Life'],
    themeColor: '#ec4899',
    accentGradient: 'linear-gradient(135deg, #4c0519 0%, #9d174d 50%, #ec4899 100%)',
    characterIconicImage:
      'https://s4.anilist.co/file/anilistcdn/character/large/b133676-kV2czE3C8Qls.png',
    characterBanner:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/132405-LnPQaqaksEpN.jpg',
  },
  {
    rank: 3,
    title: 'My Hero Academia',
    japaneseTitle: '僕のヒーローアカデミア',
    favoriteCharacter: 'Izuku Midoriya - Deku (Дэкү)',
    characterRole: '9th Successor of One For All · Top Hero',
    badgeTitle: 'One For All · Шантрашгүй Баатар',
    description:
      'Чадваргүй төрсөн ч шантралгүй тэмдэглэл хөтөлж, бусдыг аврахын төлөө биеэ үл хайрлан зүтгэсээр "Full Cowl", "Blackwhip", "Dark Deku" зэрэг туйлын хүчийг эзэмшсэн шилдэг баатар.',
    quote: 'A smiling, dependable, cool hero… That’s what I wanna be! (Инээмсэглэсэн, найдвартай, бахархам баатар… Тийм л хүн болохыг би хүснэ!)',
    genre: ['Action', 'Superhero', 'Shounen'],
    themeColor: '#059669',
    accentGradient: 'linear-gradient(135deg, #022c22 0%, #047857 50%, #10b981 100%)',
    characterIconicImage:
      'https://s4.anilist.co/file/anilistcdn/character/large/b89028-8w1I9o1ISHMg.png',
    characterBanner:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg',
  },
  {
    rank: 4,
    title: 'More Than a Married Couple, But Not Lovers',
    japaneseTitle: '夫婦以上、恋人未満。',
    favoriteCharacter: 'Jirou Yakuin (Жиро)',
    characterRole: 'Gamer · High School Student',
    badgeTitle: 'Даруухан Геймер · Үнэнч Сэтгэл',
    description:
      'Гэрлэлтийн дадлага хичээлээр Акаритай нэг баг болсон ч цаг хугацааны явцад өөрийн чин сэтгэлийг таньж, бусдыг хайрлаж халамжлах эр хүний үүрэг хариуцлагыг ойлгодог өхөөрдөм зан чанартай дүр.',
    quote: 'I might not be the most confident guy, but I want to protect what matters to me.',
    genre: ['Romance', 'School', 'Comedy'],
    themeColor: '#8b5cf6',
    accentGradient: 'linear-gradient(135deg, #2e1065 0%, #6d28d9 50%, #8b5cf6 100%)',
    characterIconicImage:
      'https://s4.anilist.co/file/anilistcdn/character/large/b191673-eD8IFBOdAFv5.jpg',
    characterBanner:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/141949-37BoBF129jLT.jpg',
  },
  {
    rank: 5,
    title: 'Alya Sometimes Hides Her Feelings in Russian',
    japaneseTitle: '時々ボソッとロシア語でデレる隣のアーlyaさん',
    favoriteCharacter: 'Alisa Mikhailovna Kujou - Alya (Аля)',
    characterRole: 'Student Council Star · Half-Russian Prodigy',
    badgeTitle: 'Орос Шивнээ · Мөнгөлөг Үст Цунгир',
    description:
      'Мөнгөлөг гэгээлэг үс, үзэсгэлэнт төрх, сурлагын онц сурагч. Өөрийн ичимхий бөгөөд нандин сэтгэлээ бусдад мэдэгдэхгүйн тулд зөвхөн орос хэлээр нууцхан шивнэдэг өхөөрдөм, өвөрмөц дүр.',
    quote: 'Идиот (Тэнэг минь)... но ты мне нравишься (гэхдээ би чамд дуртай).',
    genre: ['Romance', 'School', 'Tsundere'],
    themeColor: '#38bdf8',
    accentGradient: 'linear-gradient(135deg, #082f49 0%, #0284c7 50%, #38bdf8 100%)',
    characterIconicImage:
      'https://s4.anilist.co/file/anilistcdn/character/large/b217334-buImnwO26SgS.jpg',
    characterBanner:
      'https://s4.anilist.co/file/anilistcdn/media/anime/banner/162804-NwvD3Lya8IZp.jpg',
  },
];
