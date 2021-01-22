export type IInput = {
  name: string;
  ref: any;
  type: string;
};

export type IContainer = {
  id: number;
  name: string;
};

export type IItem = {
  id: number;
  name: string;
  isExp: boolean;
  limit: string;
  num: number;
};

export type IUser = {
  id: string;
  email: string;
};
