import type { Product } from '../types/product'

import falconRed from '../assets/products/falcon-250-red.jpeg'
import titanRed from '../assets/products/titan-250-red.jpeg'
import carreraBlue from '../assets/products/carrera-250-blue.jpeg'
import carreraGreen from '../assets/products/carrera-250-green.jpeg'

import xmt250Red from '../assets/products/xmt-250-red.jpeg'
import tank200Black from '../assets/products/tank-200-black.jpeg'
import raven250Green from '../assets/products/raven-250-green.jpeg'

import bike05Black from '../assets/products/bike-05-black.jpeg'
import bike06Red from '../assets/products/bike-06-red.jpeg'
import bike08White from '../assets/products/bike-08-white.jpeg'
import bike09Green from '../assets/products/bike-09-green.jpeg'
import bike10Red from '../assets/products/bike-10-red.jpeg'

export const products: Product[] = [
  {
    id: 1,
    slug: 'falcon-250-red',
    name: 'Falcon 250',
    brand: 'Falcon',
    displacement: '250CC',
    color: 'Red',
    image: falconRed,
    description:
      'Sport-inspired 250CC motorcycle with an aggressive design built for everyday riding.',
    featured: true,
    available: true,
  },

  {
    id: 2,
    slug: 'titan-250-red',
    name: 'Titan 250',
    brand: 'Titan',
    displacement: '250CC',
    color: 'Red',
    image: titanRed,
    description:
      'A bold 250CC motorcycle combining street styling, comfort and everyday performance.',
    featured: true,
    available: true,
  },

  {
    id: 3,
    slug: 'carrera-250-blue',
    name: 'Carrera 250',
    brand: 'Carrera',
    displacement: '250CC',
    color: 'Blue',
    image: carreraBlue,
    description:
      'A sporty 250CC motorcycle with sharp styling and a distinctive blue finish.',
    featured: true,
    available: true,
  },

  {
    id: 4,
    slug: 'carrera-250-green',
    name: 'Carrera 250',
    brand: 'Carrera',
    displacement: '250CC',
    color: 'Green',
    image: carreraGreen,
    description:
      'Carrera 250 finished in green with a modern street-focused design.',
    featured: false,
    available: true,
  },

  {
    id: 5,
    slug: 'motorcycle-05-black',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Black',
    image: bike05Black,
    description:
      '250CC motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },

  {
    id: 6,
    slug: 'motorcycle-06-red',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Red',
    image: bike06Red,
    description:
      '250CC motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },

  {
    id: 7,
    slug: 'motorcycle-08-white',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'White',
    image: bike08White,
    description:
      '250CC motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },

  {
    id: 8,
    slug: 'motorcycle-09-green',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Green',
    image: bike09Green,
    description:
      '250CC motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },

  {
    id: 9,
    slug: 'motorcycle-10-red',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Red',
    image: bike10Red,
    description:
      '250CC motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },

  {
    id: 10,
    slug: 'xmt-250-red',
    name: 'XMT 250',
    brand: 'XMT',
    displacement: '250CC',
    color: 'Red',
    image: xmt250Red,
    description:
      'XMT 250 motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },

  {
    id: 11,
    slug: 'tank-200-black',
    name: 'Tank 200',
    brand: 'Tank',
    displacement: '200CC',
    color: 'Black',
    image: tank200Black,
    description:
      'Tank 200 motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },

  {
    id: 12,
    slug: 'raven-250-green',
    name: 'Raven 250',
    brand: 'Raven',
    displacement: '250CC',
    color: 'Green',
    image: raven250Green,
    description:
      'Raven 250 motorcycle available at DRIVE Motorcycles in South Florida.',
    featured: false,
    available: true,
  },
]

export const featuredProducts = products.filter(
  (product) => product.featured && product.available
)