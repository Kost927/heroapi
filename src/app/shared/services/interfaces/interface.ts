export interface User {
  email: string;
  password: string;
}

export interface NewUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface Hero {
  id: string;
  name: string;
  biography?: object;
  appearance?: object;
  work?: object;
  image: { url: string };
  powerstats: PowerStats;
}

export interface PowerStats {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
}

export interface History {
  date: Date;
  heroName: string;
  heroId: string;
  enemyName: string;
  enemyId: string;
  result: 'win' | 'lose';
}

export interface PowerUp {
  title: string;
  image: string;
  description: string;
  usesLeft: number;
}
