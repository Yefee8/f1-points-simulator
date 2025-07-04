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
  driver: Driver;
  team: Team;
  points: number;
  wins: number;
  podiums: number;
} 