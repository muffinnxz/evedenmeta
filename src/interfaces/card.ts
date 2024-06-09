export enum Faction {
  ELYSIUM = "Elysium",
  ZERZURA = "Zerzura",
  ATLANTIS = "Atlantis",
  NOMADIC = "Nomadic",
  SHAMBHALA = "Shambhala",
  XUMERIAN = "Xumerian",
}

export enum CardType {
  TECH = "Tech",
  FOLLOWER = "Follower",
  SENTINEL_TECH = "Sentinel Tech",
  SENTINEL_FOLLOWER = "Sentinel Follower",
  CHAMPION = "Champion",
}

export enum Product {
  ST01 = "ST01",
  ST02 = "ST02",
  ST03 = "ST03",
  ST04 = "ST04",
  BT01 = "BT01",
}

export enum Rarity {
  COMMON = "Common",
  RARE = "Rare",
  MAJESTIC = "Majestic",
  REGALIA_RARE = "Regalia Rare",
  GENESIS_RARE = "Genesis Rare",
  DARK_MATTER_RARE = "Dark Matter Rare",
}

export interface Direction {
  north: boolean;
  northeast: boolean;
  east: boolean;
  southeast: boolean;
  south: boolean;
  southwest: boolean;
  west: boolean;
  northwest: boolean;
}

export interface Card {
  id: string;
  picture: string;
  faction: Faction;
  type: CardType;
  name: string;
  trait: string;
  ability: string;
  product: Product;
  rarity: Rarity;
  nano: number;
  attack: number;
  defense: number;
  direction: Direction;
}