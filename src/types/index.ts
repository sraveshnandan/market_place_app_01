import { ImageProps } from "react-native";

export interface ICategories {
  id: number;
  name: string;
  icon: string;
}

export interface ISlider {
  id: number;
  name: string;
  icon: ImageProps;
}

export interface IShop {
  id: number;
  name: string;
  description: string;
  Categories: ICategories[];
  image: string;
  owner: {
    name: string;
    image: string;
  };
  address: string;
  website: string;
  products: Iproduct[];
}

export interface Iproduct {
  id: number;
  name: string;
  description: string;
  images: string[];
  original_price: number;
  discount_price: number;
  Category: string;
}
