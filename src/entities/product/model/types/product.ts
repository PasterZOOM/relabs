export type CharacteristicsType = {
  brand: string
  memory: string
  model: string
  screen: {
    diagonal: string
    extension: string
    technology: string
  }
}
export type PriceType = {
  current: number
  discount: number
  old: number
}
export type RatingType = {
  averageRating: number
  ratings: number
}
export type TagsType = Record<string, string>

export type ProductType = {
  characteristics: CharacteristicsType
  id: string
  photos: string[]
  price: PriceType
  rating: RatingType
  tags: TagsType
}
