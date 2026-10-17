
import type { Product } from '../types/product'

/* =========================================================
   DRIVE MOTORCYCLES
   PRODUCT INVENTORY — V2

   Central motorcycle data source.

   Used by:
   - Home / Featured Motorcycles
   - Catalog
   - Product Cards
   - Product Detail Pages
   - Footer

   Important:
   Availability must be confirmed with the dealership.
   Generic motorcycle names are temporary identifiers
   until official model details are provided.
   ========================================================= */

/* =========================================================
   FEATURED MOTORCYCLE IMAGES
   ========================================================= */

import falconRed from '../assets/products/falcon-250-red.jpeg'
import titanRed from '../assets/products/titan-250-red.jpeg'
import carreraBlue from '../assets/products/carrera-250-blue.jpeg'
import carreraGreen from '../assets/products/carrera-250-green.jpeg'

/* =========================================================
   ADDITIONAL IDENTIFIED MOTORCYCLES
   ========================================================= */

import xmt250Red from '../assets/products/xmt-250-red.jpeg'
import tank200Black from '../assets/products/tank-200-black.jpeg'
import raven250Green from '../assets/products/raven-250-green.jpeg'

/* =========================================================
   MOTORCYCLES PENDING MODEL IDENTIFICATION
   ========================================================= */

import bike05Black from '../assets/products/bike-05-black.jpeg'
import bike06Red from '../assets/products/bike-06-red.jpeg'
import bike08White from '../assets/products/bike-08-white.jpeg'
import bike09Green from '../assets/products/bike-09-green.jpeg'
import bike10Red from '../assets/products/bike-10-red.jpeg'

/* =========================================================
   PRODUCT INVENTORY
   ========================================================= */

export const products: Product[] = [
  /* =======================================================
     01 — FALCON 250 / RED
     ======================================================= */

  {
    id: 1,
    slug: 'falcon-250-red',
    name: 'Falcon 250',
    brand: 'Falcon',
    displacement: '250CC',
    color: 'Red',
    image: falconRed,

    description:
      'Sport-inspired 250CC motorcycle with aggressive styling and a distinctive red finish.',

    featured: true,
    available: true,
  },

  /* =======================================================
     02 — TITAN 250 / RED
     ======================================================= */

  {
    id: 2,
    slug: 'titan-250-red',
    name: 'Titan 250',
    brand: 'Titan',
    displacement: '250CC',
    color: 'Red',
    image: titanRed,

    description:
      'A bold 250CC motorcycle with distinctive street styling and a striking red finish.',

    featured: true,
    available: true,
  },

  /* =======================================================
     03 — CARRERA 250 / BLUE
     ======================================================= */

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

  /* =======================================================
     04 — CARRERA 250 / GREEN
     ======================================================= */

  {
    id: 4,
    slug: 'carrera-250-green',
    name: 'Carrera 250',
    brand: 'Carrera',
    displacement: '250CC',
    color: 'Green',
    image: carreraGreen,

    description:
      'Carrera 250 motorcycle presented in a green finish with modern street-inspired styling.',

    featured: false,
    available: true,
  },

  /* =======================================================
     05 — MOTORCYCLE / BLACK

     Official model name pending confirmation.
     ======================================================= */

  {
    id: 5,
    slug: 'motorcycle-05-black',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Black',
    image: bike05Black,

    description:
      'Black motorcycle listed in the DRIVE collection. Contact us to confirm model details and current availability.',

    featured: false,
    available: true,
  },

  /* =======================================================
     06 — MOTORCYCLE / RED

     Official model name pending confirmation.
     ======================================================= */

  {
    id: 6,
    slug: 'motorcycle-06-red',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Red',
    image: bike06Red,

    description:
      'Red motorcycle listed in the DRIVE collection. Contact us for model information and current availability.',

    featured: false,
    available: true,
  },

  /* =======================================================
     07 — MOTORCYCLE / WHITE

     Official model name pending confirmation.
     ======================================================= */

  {
    id: 7,
    slug: 'motorcycle-08-white',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'White',
    image: bike08White,

    description:
      'White motorcycle featured in the DRIVE inventory. Contact the dealership for confirmed specifications.',

    featured: false,
    available: true,
  },

  /* =======================================================
     08 — MOTORCYCLE / GREEN

     Official model name pending confirmation.
     ======================================================= */

  {
    id: 8,
    slug: 'motorcycle-09-green',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Green',
    image: bike09Green,

    description:
      'Green motorcycle listed in the DRIVE collection. Ask our team about model details and current availability.',

    featured: false,
    available: true,
  },

  /* =======================================================
     09 — MOTORCYCLE / RED

     Official model name pending confirmation.
     ======================================================= */

  {
    id: 9,
    slug: 'motorcycle-10-red',
    name: '250CC Motorcycle',
    brand: 'DRIVE',
    displacement: '250CC',
    color: 'Red',
    image: bike10Red,

    description:
      'Red motorcycle featured in the DRIVE inventory. Contact us to confirm specifications and availability.',

    featured: false,
    available: true,
  },

  /* =======================================================
     10 — XMT 250 / RED
     ======================================================= */

  {
    id: 10,
    slug: 'xmt-250-red',
    name: 'XMT 250',
    brand: 'XMT',
    displacement: '250CC',
    color: 'Red',
    image: xmt250Red,

    description:
      'XMT 250 motorcycle in a red finish. Contact DRIVE for additional specifications and availability.',

    featured: false,
    available: true,
  },

  /* =======================================================
     11 — TANK 200 / BLACK
     ======================================================= */

  {
    id: 11,
    slug: 'tank-200-black',
    name: 'Tank 200',
    brand: 'Tank',
    displacement: '200CC',
    color: 'Black',
    image: tank200Black,

    description:
      'Tank 200 motorcycle in a black finish. Contact DRIVE for model information and current availability.',

    featured: false,
    available: true,
  },

  /* =======================================================
     12 — RAVEN 250 / GREEN
     ======================================================= */

  {
    id: 12,
    slug: 'raven-250-green',
    name: 'Raven 250',
    brand: 'Raven',
    displacement: '250CC',
    color: 'Green',
    image: raven250Green,

    description:
      'Raven 250 motorcycle in a green finish. Contact DRIVE for specifications and current availability.',

    featured: false,
    available: true,
  },
]

/* =========================================================
   FEATURED PRODUCTS

   Used in:
   - Home
   - Footer

   Only products marked featured and available
   will appear in these sections.
   ========================================================= */

export const featuredProducts: Product[] = products.filter(
  (product) => product.featured && product.available
)
