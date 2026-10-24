export type InvitationPurpose =
  | 'crush_date'
  | 'apology'
  | 'anniversary'
  | 'coffee_movie';

export interface DateActivity {
  id: string;
  name: string;
  emoji: string;
  category: 'food' | 'activity' | 'vibe';
  desc?: string;
}

export interface ColorThemeOption {
  id: string;
  name: string;
  gradientDirection: 'to-b';
  bgGradientClass: string;
  preview: string;
  primaryColor: string;
  secondaryColor: string;
  cardBg: string;
  badgeBg: string;
}

export interface InvitationData {
  id: string;
  purpose: InvitationPurpose;
  // Step 2: Names
  crushName: string;
  senderName: string;
  nickname?: string;
  // Step 3: Vibe, top-to-bottom colors, youtube music
  colorTheme: string;
  musicType: 'youtube' | 'preset';
  youtubeQuery: string;
  youtubeVideoId?: string;
  musicTrackId: string;
  musicTitle: string;
  floatingEffect: 'hearts' | 'stars' | 'cherry_blossom' | 'teddy_bears';
  // Step 4: Message & Sender preferences
  headline: string;
  message: string;
  // Recipient chooses or Sender suggests
  letRecipientChooseDate: boolean;
  suggestedDateDay?: string;
  suggestedDateTime?: string;
  dateDay?: string;
  dateTime?: string;
  selectedFoods: string[];
  selectedActivities: string[];
  // Status & Recipient Choices
  createdAt: number;
  rsvpResponse?: {
    accepted: boolean;
    respondedAt?: number;
    // Choices made by recipient
    pickedDate?: string;
    pickedTime?: string;
    pickedActivities?: string[];
    pickedFoods?: string[];
    customNote?: string;
  };
}
