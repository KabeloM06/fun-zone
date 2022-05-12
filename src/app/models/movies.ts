export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    
    name: string;
    title: string;
    
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface MovieDto {
    page: number;
    results: Movie[];
    tottal_results: number;
    tottal_pages: number;
}