export interface Product {
  id: number
  slug: string

  name: string
  brand: string

  displacement: string
  color: string

  image: string
  images?: string[]

  description: string

  featured: boolean
  available: boolean
}