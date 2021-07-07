export interface IDeal {
  media: string[];
  title: string;
  price: number;
  key: string;
}

export interface IDealFull extends IDeal {
  user: TUser;
}

export type TUser = {
  avatar: string;
};
