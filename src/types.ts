export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  priceR?: number | null;
  priceL?: number | null;
  description?: string;
  isVeg: boolean;
  isSpicy?: boolean;
  isChefPick?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
  aspectRatio: 'aspect-square' | 'aspect-[4/3]' | 'aspect-[3/4]' | 'aspect-[16/9]';
}
