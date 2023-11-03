export interface Product {
  id: string;
  image: string;
  title: string;
  category: Category | string;
  name: string;
  price: string;
  isFeatured: boolean;
  images?: Image[];
  rating?: {
    rate: number;
    count: number;
  };
}

export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard?: Billboard;
}

export interface TFilter {
  id: string;
  name?: string;
  value: string;
}
