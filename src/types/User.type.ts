export type LoginDTO = {
  loginEmail: string;
  loginPassword: string;
};

export type AccountDTO = {
  fbID?: string;
  profile: string;
  firstname: string;
  middlename: string;
  lastname: string;
  mobilenumber: string;
  address: string;
};

export type UserDTO = {
  email: string;
  password: string;
  isActive: boolean;
  account: AccountDTO;
};
