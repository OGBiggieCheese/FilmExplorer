interface ISpokenLanguages{
    lang: string,
    english_name: string,
}
export interface IMovieList {
    id: string;
    name: string;
    poster_path: string;
    movies: IFilm[];
  }
export interface IMediaItem {
    key: string,
    src: string,
}
export interface IMedia{
    videos: IMediaItem[],
    images: IMediaItem[],
    posters: IMediaItem[],
} 
export interface IGenre{
    id: string,
    name: string, 
}

export interface IFilm{
    title: string,
    originalTitle: string,
    description: string,
    imageUrl: string,
    posterUrl: string,
    genres: IGenre[],
    releaseDate: string,
    rated: number,
    status: string,
    spokenLanguages: ISpokenLanguages[],
    budget: number,
    revenue: number,
    videos: IMediaItem[],
    images: IMediaItem[],
    posters: IMediaItem[],
    id: string,
    runtime: number,
    source: "api" | "database",
}

export interface ICast{
    title: string;
    imageUrl: string;
    voice: string;
}

export interface ICard{
    id: number;
    title: string;
    poster_path: string;
    showButton?: boolean;
    source: "api" | "database",
}

export interface IFavouriteFilm{
    id: string;
    title: string;
    poster_path: string;
    source: "api" | "database",
}

export interface IList{
    id: string;
    name: string;
    movies: IFilm[];
}

export interface IFilmForm extends Omit<IFilm, "id">{
    id: string;
}

