interface ISpokenLanguages{
    lang: string,
    english_name: string,
}
export interface IMedia{
    videos: Array<{ key: string; src: string }>;
    images: Array<{ key: string; src: string }>;
    posters: Array<{ key: string; src: string }>;
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
    videos: IMedia[],
    images: IMedia[],
    posters: IMedia[],
    id: string,
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
    imageUrl: string;
    source: "api" | "database",
}

export interface IFilmForm extends Omit<IFilm, "id">{
    id: string;
}