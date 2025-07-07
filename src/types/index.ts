export interface Driver {
  name: string;
  image: string;
  country: string;
}

export interface Team {
  name: string;
  logo: string;
  color: string;
}

export interface Standing {
  position: number;
  driver: string;
  nationality: string;
  team: string;
  points: number;
  carLogo?: string;
}
