import { genres } from '@/enums/genres'

export type TFilm = {
  id: string,
  title: string,
  posterUrl?: string,
  releaseYear?: string,
  description?: string,
  genre: keyof typeof genres,
  rating: number,
  director: string,
  reviewIds?: TReview[],
}

export type TReview = {
  id: string,
  name: string,
  text: string,
  rating: number,
}

export type TMovie = {
  id: string,
  name: string,
  movieIds: string[]
}
