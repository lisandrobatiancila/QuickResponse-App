export type AccountTypeDTO = {
  firstname?: string;
  middlename?: string;
  lastname?: string;
  contactno?: string;
  email?: string;
};

export type AccountContextTypeDTO = AccountTypeDTO & {
  setActiveUserInformation: (params: AccountTypeDTO) => void;
};
