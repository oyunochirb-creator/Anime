import { InvitationPurpose, DateActivity, ColorThemeOption } from '../types/bolzoo.ts';

export interface PurposeOption {
  id: InvitationPurpose;
  title: string;
  tag: string;
  description: string;
  icon: string;
  defaultHeadline: string;
  defaultMessage: string;
  accentBg: string;
}

export const PURPOSES: PurposeOption[] = [
  {
    id: 'crush_date',
    title: 'Crush-даа зориулсан болзооны урилга',
    tag: 'Хамгийн түгээмэл 💌',
    description: 'Зүрх догдлуулсан нандин үгс, хамтдаа өнгөрүүлэх хөөрхөн болзооны төлөвлөгөө.',
    icon: '💌',
    defaultHeadline: 'Хамтдаа болзоонд явах уу? ✨',
    defaultMessage:
      'Сайн уу? Чамтай анх танилцсанаас хойш үргэлж сэтгэлд минь гэрэл нэмэгдсэн. Хэзээ уулзаж, юу хийхээ чи өөрөө сонгоод надтай хамтдаа цагийг хөгжилтэй өнгөрүүлэх үү?',
    accentBg: 'from-[#FF85A2]/15 via-[#FFF0F5] to-[#A0C4FF]/15',
  },
  {
    id: 'apology',
    title: 'Чин сэтгэлийн эвлэрлийн захиа',
    tag: 'Эелдэг, дулаахан 🕊️',
    description: 'Гомдоосныхоо төлөө уучлалт гуйж, сэтгэлээ нээж тайлбарлах чин үнэнч захиа.',
    icon: '🕊️',
    defaultHeadline: 'Уучлаарай, миний буруу байсан... 🥺',
    defaultMessage:
      'Чамдаа уурлаж, гомдоох үг хэлсэндээ чин сэтгэлээсээ харамсаж байна. Чамгүйгээр миний өдөр хоосон санагддаг. Тохиромжтой цагаа сонгоод намайг уучлалт гуйж дайлахыг зөвшөөрөөч?',
    accentBg: 'from-[#A0C4FF]/20 via-[#FFF8FA] to-[#FFD1DC]/20',
  },
  {
    id: 'coffee_movie',
    title: 'Кофе, кино эсвэл зугаалга',
    tag: 'Тайван, энгийн ☕',
    description: 'Дарамтгүй, чөлөөтэй уур амьсгалд хамтдаа ярилцаж, кино үзэх урилга.',
    icon: '☕',
    defaultHeadline: 'Кофе уунгаа ярилцах уу? 🥐',
    defaultMessage:
      'Сүүлийн үед чамтай тухтай уулзаж ярилцахыг маш их хүссэн. Хэзээ завтай байхаа, юу хийхийг хүсэж байгаагаа өөрөө сонгоод хамт гарцгаая!',
    accentBg: 'from-[#BEE1E6]/25 via-[#FFFDF9] to-[#FDE2E4]/25',
  },
  {
    id: 'anniversary',
    title: 'Ойн баяр & Хайрын тусгай мэндчилгээ',
    tag: 'Романтик 💖',
    description: 'Бидний өнгөрүүлсэн нандин дурсамж, хамтын ирээдүйдээ зориулах тусгай урилга.',
    icon: '💖',
    defaultHeadline: 'Хамт байсан өдөр бүхэнд баярлалаа! 💍',
    defaultMessage:
      'Чи минь миний амьдралын хамгийн нандин бэлэг. Энэ өдрийг хаана, хэрхэн өнгөрүүлэхийг чи минь өөрөө дураараа сонгоорой.',
    accentBg: 'from-[#FF85A2]/20 via-[#F3E8FF] to-[#A0C4FF]/20',
  },
];

// ИЛҮҮ ОЛОН ХАМТ ХИЙЖ БОЛОХ ҮЙЛ АЖИЛЛАГААНУУД (16 төрөл)
export const ACTIVITY_OPTIONS: DateActivity[] = [
  { id: 'movie', name: 'Кино театрт кино үзэх', emoji: '🎬', category: 'activity', desc: 'Хамгийн сүүлийн үеийн сонирхолтой кино' },
  { id: 'photobooth', name: 'Photo Booth зураг даруулах', emoji: '📸', category: 'activity', desc: 'Хөөрхөн дурсамжтай 4 зураг' },
  { id: 'walk', name: 'Оройн салхинд гар барьж алхах', emoji: '🌙', category: 'activity', desc: 'Намуухан үдэш тухтай ярилцах' },
  { id: 'cafe', name: 'Хөөрхөн кафенд кофе ууж суух', emoji: '☕', category: 'activity', desc: 'Дулаахан уур амьсгал, амттай бялуу' },
  { id: 'bookstore', name: 'Номын дэлгүүрээр хамт хэсэх', emoji: '📚', category: 'activity', desc: 'Бие биедээ сонирхолтой ном сонгож өгөх' },
  { id: 'cat_cafe', name: 'Мууртай/Нохойтой кафе орох', emoji: '🐱', category: 'activity', desc: 'Хөөрхөн амьтад эрхлүүлж инээлдэх' },
  { id: 'arcade', name: 'Arcade / Тоглоомын газар', emoji: '🕹️', category: 'activity', desc: 'Сагс шидэж, хонжвор сугалах' },
  { id: 'picnic', name: 'Парк эсвэл зүлгэн дээр пикник хийх', emoji: '🧺', category: 'activity', desc: 'Нарлаг өдөр амттан дэлгэж суух' },
  { id: 'pottery', name: 'Шаазан урлал / Уран зургийн урлан', emoji: '🎨', category: 'activity', desc: 'Хамтдаа өөрсдийн гараар аяга урлах' },
  { id: 'ice_skate', name: 'Тэшүүрээр гулгах / Мөсөн талбай', emoji: '⛸️', category: 'activity', desc: 'Бие биенээсээ түшин хөгжилтэй гулгах' },
  { id: 'city_view', name: 'Шөнийн хотын гэрэл тольдох', emoji: '🌃', category: 'activity', desc: 'Өндөрлөг газраас хотоо харах' },
  { id: 'boardgames', name: 'Хөлөгт тоглоом тоглох', emoji: '🎲', category: 'activity', desc: 'Цагийг өрсөлдөөнтэй, хөгжилтэй өнгөрөөх' },
  { id: 'karaoke', name: 'Караоке орж хамт дуулах', emoji: '🎤', category: 'activity', desc: 'Дуртай дуугаа чангаар дуулах' },
  { id: 'cycling', name: 'Дугуй эсвэл скүүтэр унах', emoji: '🚲', category: 'activity', desc: 'Цэвэр агаарт хөнгөн спортлог салхилах' },
  { id: 'cooking', name: 'Хамтдаа хоол / жигнэмэг хийх', emoji: '🍪', category: 'activity', desc: 'Өөрсдийн гараар амттан бэлтгэх' },
  { id: 'stargazing', name: 'Шөнийн од харах & шивнэлдэх', emoji: '✨', category: 'activity', desc: 'Чимээгүй орон зайд мөрөөдлөө ярих' },
];

// ХООЛ БА АМТТАНУУД (8 төрөл)
export const FOOD_OPTIONS: DateActivity[] = [
  { id: 'ramen', name: 'Халуун Рамен шөл', emoji: '🍜', category: 'food' },
  { id: 'sushi', name: 'Амтат Сүши & Ролл', emoji: '🍣', category: 'food' },
  { id: 'boba', name: 'Бөмбөлөгтэй Цай & Чизкэйк', emoji: '🧋', category: 'food' },
  { id: 'pizza', name: 'Бяслагтай халуун Пицца', emoji: '🍕', category: 'food' },
  { id: 'kbbq', name: 'Солонгос Барбекю / Шарсан мах', emoji: '🥩', category: 'food' },
  { id: 'icecream', name: 'Зайрмаг & Бельги Вафли', emoji: '🍨', category: 'food' },
  { id: 'burger', name: 'Шүүслэг Бургер & Шарсан төмс', emoji: '🍔', category: 'food' },
  { id: 'hot_choco', name: 'Халуун шоколад & Кроассан', emoji: '🥐', category: 'food' },
];

// УУЛЗАХ ХУГАЦААНЫ БЭЛЭН СОНГОЛТУУД
export const PRESET_DATE_OPTIONS = [
  { label: 'Энэ Баасан гарагт 🌙', time: '18:30 цагт' },
  { label: 'Энэ Бямба гарагт 🌸', time: '14:00 цагт (Өдөр)' },
  { label: 'Энэ Бямба гарагт ✨', time: '18:00 цагт (Орой)' },
  { label: 'Энэ Ням гарагт ☀️', time: '15:00 цагт' },
  { label: 'Ирэх 7 хоногийн амралтын өдөр 🗓️', time: '17:00 цагт' },
];

// ДЭЭРЭЭС ДООШ ЧИГЛЭЛТЭЙ ӨНГӨНИЙ УУСГАЛТУУД
export const COLOR_THEMES: ColorThemeOption[] = [
  {
    id: 'pink_to_blue_down',
    name: 'Сакура Ягаанаас Бүдэг Цэнхэр рүү (Дээрээс доош) 🌸⬇️',
    gradientDirection: 'to-b',
    bgGradientClass: 'bg-gradient-to-b from-[#FFB6C1] via-[#FFF0F5] to-[#BEE3F8]',
    preview: 'bg-gradient-to-b from-[#FFB6C1] via-[#FFF0F5] to-[#BEE3F8]',
    primaryColor: '#FF6B9D',
    secondaryColor: '#90CDF4',
    cardBg: 'from-[#FFF0F5] to-[#EBF8FF]',
    badgeBg: 'bg-pink-100 text-[#FF4D82] border-pink-200',
  },
  {
    id: 'peach_to_rose_down',
    name: 'Тоорын Гэгээнээс Сарнай Ягаан руу (Дээрээс доош) 🍑⬇️',
    gradientDirection: 'to-b',
    bgGradientClass: 'bg-gradient-to-b from-[#FED7AA] via-[#FFF1F2] to-[#FBCFE8]',
    preview: 'bg-gradient-to-b from-[#FED7AA] via-[#FFF1F2] to-[#FBCFE8]',
    primaryColor: '#F472B6',
    secondaryColor: '#FB923C',
    cardBg: 'from-[#FFF7ED] to-[#FDF2F8]',
    badgeBg: 'bg-rose-100 text-rose-700 border-rose-200',
  },
  {
    id: 'sky_to_cotton_down',
    name: 'Цэлмэг Цэнхэрээс Хөвсгөр Ягаан руу (Дээрээс доош) ☁️⬇️',
    gradientDirection: 'to-b',
    bgGradientClass: 'bg-gradient-to-b from-[#BAE6FD] via-[#F0F9FF] to-[#F5D0FE]',
    preview: 'bg-gradient-to-b from-[#BAE6FD] via-[#F0F9FF] to-[#F5D0FE]',
    primaryColor: '#38BDF8',
    secondaryColor: '#E879F9',
    cardBg: 'from-[#F0F9FF] to-[#FAF5FF]',
    badgeBg: 'bg-sky-100 text-sky-700 border-sky-200',
  },
  {
    id: 'white_to_pastel_down',
    name: 'Сүүн Цагаанаас Хонгор Ягаан-Цэнхэр рүү (Дээрээс доош) 🕊️⬇️',
    gradientDirection: 'to-b',
    bgGradientClass: 'bg-gradient-to-b from-[#FFFFFF] via-[#FFF5F8] to-[#E0F2FE]',
    preview: 'bg-gradient-to-b from-[#FFFFFF] via-[#FFF5F8] to-[#E0F2FE]',
    primaryColor: '#FF85A2',
    secondaryColor: '#93C5FD',
    cardBg: 'from-[#FFFFFF] to-[#EFF6FF]',
    badgeBg: 'bg-pink-50 text-pink-600 border-pink-200',
  },
];

export const POPULAR_YOUTUBE_SONGS = [
  { name: 'Stephen Sanchez - Until I Found You', tag: 'Хамгийн романтик 🌹' },
  { name: 'Lofi Fruit - Warm Cute Love Beats', tag: 'Зөөлөн, тайван 🎧' },
  { name: 'Bruno Mars - Just The Way You Are', tag: 'Сонгодог хайрын дуу ✨' },
  { name: 'JVKE - Golden Hour (Instrumental Piano)', tag: 'Төгөлдөр хуур 🎹' },
  { name: 'Batu - Hairtai bolchihjee', tag: 'Монгол хайрын дуу 🇲🇳' },
  { name: 'Nene - Chamdaa zoriulay', tag: 'Монгол дуу 💖' },
];

export const MUSIC_TRACKS = [
  {
    id: 'lofi_love',
    title: 'Warm Lofi Love Beat 🎧',
    desc: 'Тайван, зөөлөн хөгжмийн ая',
    audioUrl: 'https://cdn.freesound.org/previews/612/612613_5674468-lq.mp3',
  },
  {
    id: 'cute_piano',
    title: 'Cute Romantic Piano 🎹',
    desc: 'Хөөрхөн ялдам төгөлдөр хуурын ая',
    audioUrl: 'https://cdn.freesound.org/previews/563/563814_2282212-lq.mp3',
  },
  {
    id: 'acoustic_guitar',
    title: 'Sweet Acoustic Romance 🎸',
    desc: 'Сэтгэл хөдөлгөм дулаахан гитар',
    audioUrl: 'https://cdn.freesound.org/previews/415/415446_8043-lq.mp3',
  },
];
