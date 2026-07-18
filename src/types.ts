export interface AtmosphereItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  bgColor: string;  // Hex or Tailwind class for background
  textColor: string; // Tailwind class for text
  accentColor: string; // Hex or Tailwind class for small highlight
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
}
