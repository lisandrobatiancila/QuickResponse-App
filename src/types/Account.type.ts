export type AccountTypeDTO = {
  firstname?: string;
  middlename?: string;
  lastname?: string;
  contactno?: string;
  email?: string;
};

export type AccountContextTypeDTO = AccountTypeDTO & {
  setFirstname: (param: string) => void;
  setMiddlename: (param: string) => void;
  setLastname: (param: string) => void;
  setContactno: (param: string) => void;
  setEmail: (param: string) => void;
};
