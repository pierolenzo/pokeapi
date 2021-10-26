export interface Sprites {
  front_default: string;
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  sprites: Sprites;
}
