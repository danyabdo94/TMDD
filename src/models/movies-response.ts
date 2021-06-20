import { MovieItem } from "./movie-item";

export interface MoviesResponse {
    page: number;
    results: [MovieItem] | [];
    total_pages: number | null;
    total_results: number | null;
  }
    