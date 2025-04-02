import { Bike } from './types';

export const bikes: Bike[] = [
  {
    id: '1',
    name: 'Tarmac SL7',
    brand: 'Specialized',
    type: 'road',
    price: 4500,
    image: '/placeholder.svg?height=300&width=400',
    featured: true,
    specs: {
      frame: 'Carbon',
      groupset: 'Shimano Ultegra',
      weight: 7.2,
      wheelSize: '700c',
      material: 'Carbon',
      gears: '12-speed',
    },
  },
  {
    id: '2',
    name: 'Stumpjumper',
    brand: 'Specialized',
    type: 'mountain',
    price: 3500,
    image: '/placeholder.svg?height=300&width=400',
    featured: true,
    specs: {
      frame: 'Carbon',
      groupset: 'SRAM GX',
      weight: 13.5,
      wheelSize: '29"',
      material: 'Carbon',
      gears: '12-speed',
    },
  },
  {
    id: '3',
    name: 'Diverge',
    brand: 'Specialized',
    type: 'gravel',
    price: 2800,
    image: '/placeholder.svg?height=300&width=400',
    featured: false,
    specs: {
      frame: 'Aluminum',
      groupset: 'Shimano GRX',
      weight: 9.8,
      wheelSize: '700c',
      material: 'Aluminum',
      gears: '11-speed',
    },
  },
  {
    id: '4',
    name: 'Sirrus',
    brand: 'Specialized',
    type: 'urban',
    price: 1200,
    image: '/placeholder.svg?height=300&width=400',
    featured: false,
    specs: {
      frame: 'Aluminum',
      groupset: 'Shimano Acera',
      weight: 11.2,
      wheelSize: '700c',
      material: 'Aluminum',
      gears: '9-speed',
    },
  },
]; 