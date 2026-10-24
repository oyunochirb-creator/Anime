export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  subtitle?: string;
  description?: string;
  featuredAnime: string[];
  liveUrl?: string;
  videoType?: 'episode' | 'showcase';
  videoEmbedUrl?: string;
  images: {
    col1Top: string;
    col1TopTitle?: string;
    col1Bottom: string;
    col1BottomTitle?: string;
    col2Tall: string;
    col2TallTitle?: string;
  };
}

export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}
