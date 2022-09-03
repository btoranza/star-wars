export interface Film {
  title: string;
  episode_id: number;
  director: string;
  characters: string[];
  opening_crawl: string;
}

export interface Character {
  name: string;
  eye_color: string;
  gender: string;
  films: string[];
}

export interface Filter {
  eye_color: string;
  gender: string;
  film: number;
}
