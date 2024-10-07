export interface IRegister {
  email: string;
  username: string;
  password: string;
  name: string | string;
  phone: number | string;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface InterfaceLike {
  quantity: number;
  post_id: number;
}

export interface Users {
  id: number;
  name: string;
}
