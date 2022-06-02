export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    first_air_date: string;
    revenue: number;
    runtime: number;
    status: string;
    budget: number;
    genres: Genre[];
    
    production_companies: Companies[];
    
    
    
    name: string;
    title: string;
    
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Companies {
    name: string;
}

export interface MovieDto {
    page: number;
    results: Movie[];
    tottal_results: number;
    tottal_pages: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieVideoDto {
    id: number;
    results: MovieVideo[];
}

export interface MovieVideo {
    site: string;
    key: string;
}