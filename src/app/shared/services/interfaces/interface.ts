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
  image: { url: string };
  powerstats: PowerStats;
}

interface PowerStats {
  combat: string;
  durability: string;
  intelligence: string;
  power: string;
  speed: string;
  strength: string;
}
