export interface Sprites {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: Sprites;
  stats: Stat[];
}

export interface Stat2 {
  name: string;
  url: string;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

export interface RootObject {
  stats: Stat[];
}
