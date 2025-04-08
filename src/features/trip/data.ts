import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PaymentsIcon from '@mui/icons-material/Payments';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

import Ellipse1 from './assets/Ellipse 1.jpg';
import Ellipse2 from './assets/Ellipse 2.jpg';
import Ellipse3 from './assets/Ellipse 3.jpg';
import Ellipse4 from './assets/Ellipse 4.jpg';
import Expenses from './assets/Expenses (2).jpg';
import HomePageContent from './assets/Home page content (1).jpg';
import Rectangle1 from './assets/Rectangle 1.jpg';
import Rectangle2 from './assets/Rectangle 2.jpg';
import Rectangle3 from './assets/Rectangle 3.jpg';
import Rectangle6 from './assets/Rectangle 6.jpg';
import VectorImage12 from './assets/Vector12.svg';
import VectorImage9 from './assets/Vector 9 (1).svg';
import VectorImage10 from './assets/Vector 10 (2).svg';
import VectorImage11 from './assets/Vector 11 (2).svg';
import PreviewImage1 from './assets/preview_1.jpg.jpg';
import PreviewImage2 from './assets/preview_2.jpg.jpg';
import PreviewImage3 from './assets/preview_3.jpg.jpg';
import PreviewImage4 from './assets/preview_4.jpg.jpg';
import PreviewImage5 from './assets/preview_5.jpg.jpg';
import type { ExpenseCategory } from './types';

export interface TripPreviewImage {
  id: string;
  src: string;
  alt: string;
}
export const TRIP_PREVIEW_IMAGES: TripPreviewImage[] = [
  {
    id: 'PreviewImage1',
    src: PreviewImage1,
    alt: 'Mountains and lake with sunset.',
  },
  {
    id: 'PreviewImage2',
    src: PreviewImage2,
    alt: 'Beautiful sunset in village.',
  },
  {
    id: 'PreviewImage3',
    src: PreviewImage3,
    alt: 'Big city view.',
  },
  {
    id: 'PreviewImage4',
    src: PreviewImage4,
    alt: 'People doing Yoga.',
  },
  {
    id: 'PreviewImage5',
    src: PreviewImage5,
    alt: 'Rock surrounded by palms on an island surrounded by the sea.',
  },
];
interface CategoryIconProps {
  icon: OverridableComponent<SvgIconTypeMap<object, 'svg'>>;
  backgroundColor: string;
  color: string;
}
export const EXPENSE_ICON_BY_CATEGORY: Record<
  ExpenseCategory,
  CategoryIconProps
> = {
  Tickets: {
    icon: LocalActivityIcon,
    backgroundColor: 'rgba(165,189,158, 0.32)',
    color: '#729E65',
  },
  Food: {
    icon: RestaurantIcon,
    backgroundColor: 'rgba(126,169,195, 0.17)',
    color: '#5486A6',
  },
  Fun: {
    icon: EmojiEmotionsIcon,
    backgroundColor: 'rgba(255,201,153, 0.43)',
    color: '#E78835',
  },
  Hotel: {
    icon: HotelIcon,
    backgroundColor: 'rgba(156,19,25, 0.23)',
    color: '#810403',
  },
  Shopping: {
    icon: ShoppingBagIcon,
    backgroundColor: 'rgba(10,154,206, 0.21)',
    color: '#0A9ACE',
  },
  Other: {
    icon: PaymentsIcon,
    backgroundColor: 'rgba(87,95,101, 0.28)',
    color: '#37434B',
  },
};

// DO NOT MODIFY EXISTING IDS
// DO NOT REMOVE ITEMS, IT CAN AFFECT EXISTING USERS
interface ExpenseCategoryProps {
  id: number;
  category: ExpenseCategory;
}
export const EXPENSES_CATEGORIES: ExpenseCategoryProps[] = [
  {
    id: 1,
    category: 'Tickets',
  },
  {
    id: 2,
    category: 'Food',
  },
  {
    id: 3,
    category: 'Fun',
  },
  {
    id: 4,
    category: 'Hotel',
  },
  {
    id: 5,
    category: 'Shopping',
  },
  {
    id: 6,
    category: 'Other',
  },
];
export interface LandingPageImage {
  id: string;
  src: string;
  alt: string;
}
export const LANDING_PAGE_IMAGES: LandingPageImage[] = [
  {
    id: 'VectorImage11',
    src: VectorImage11,
    alt: 'A detailed travel itinerary displayed on a dashboard.',
  },
  {
    id: 'VectorImage12',
    src: VectorImage12,
    alt: 'An interactive trip planning interface with a world map.',
  },
  {
    id: 'VectorImage10',
    src: VectorImage10,
    alt: 'A person booking flights and hotels on a travel website.',
  },
  {
    id: 'VectorImage9',
    src: VectorImage9,
    alt: 'A soft, fluffy white cloud floating in a bright blue sky.',
  },
];

export interface LandingAvatarImage {
  id: string;
  src: string;
  alt: string;
}

export const LANDING_AVATAR_IMAGES: LandingAvatarImage[] = [
  {
    id: 'Ellipse1',
    src: Ellipse1,
    alt: 'A group of travelers planning their next adventure together.',
  },
  {
    id: 'Ellipse2',
    src: Ellipse2,
    alt: 'A scenic view of a travel destination displayed on a dashboard.',
  },
  {
    id: 'Ellipse3',
    src: Ellipse3,
    alt: 'A traveler marking places on an interactive world map.',
  },
  {
    id: 'Ellipse4',
    src: Ellipse4,
    alt: 'A user-friendly trip itinerary with activities and schedules.',
  },
];
export interface TravelImagesProps {
  id: string;
  src: string;
  alt: string;
}
export const TRAVEL_SECTION_IMAGES: TravelImagesProps[] = [
  {
    id: 'Rectangle1',
    src: Rectangle1,
    alt: 'A scenic natural landscape with lush greenery and rolling hills.',
  },
  {
    id: 'Rectangle2',
    src: Rectangle2,
    alt: 'A serene tropical beach with palm trees and crystal-clear waves.',
  },
  {
    id: 'Rectangle6',
    src: Rectangle6,
    alt: 'A serene tropical beach .',
  },
  {
    id: 'Rectangle3',
    src: Rectangle3,
    alt: 'A bustling city skyline with modern skyscrapers at sunset',
  },
];
export interface HomeLayoutProps {
  id: string;
  src: string;
  alt: string;
}
export const HOME_SECTION_IMAGES: HomeLayoutProps[] = [
  {
    id: 'HomePageContent',
    src: HomePageContent,
    alt: 'Home page content',
  },
  {
    id: 'Expenses',
    src: Expenses,
    alt: 'Expenses',
  },
];
