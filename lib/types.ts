export interface Bike {
  id: string;
  name: string;
  brand: string;
  type: string;
  price: number;
  image?: string;
  featured?: boolean;
  specs: {
    frame: string;
    groupset: string;
    weight: number;
    wheelSize: string;
    material?: string;
    gears?: string;
  };
}

export type BikeType = 'road' | 'mountain' | 'gravel' | 'urban'; 