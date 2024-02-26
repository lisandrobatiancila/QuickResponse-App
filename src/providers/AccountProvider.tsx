import React, {useState} from 'react';
import createAppContext from '../utils/createContext';
import {AccountContextTypeDTO, AccountTypeDTO} from '../types/Account.type';

type AccountProviderProps = {
  children: React.ReactNode;
};

const [useAccountContext, AccountContextProvider] = createAppContext<AccountContextTypeDTO>();

function AccountProvider (props: AccountProviderProps){
  const [activeUserInformation, setActiveUserInformation] = useState<AccountTypeDTO | undefined>(undefined);

  const setActiveUserInformationFunction = (activeUserInformation: AccountTypeDTO) => {
    setActiveUserInformation(activeUserInformation);
  };

  const getValues = (): AccountContextTypeDTO => {
    return {
      activeUserInformation,
      setActiveUserInformationFunction
    };
  };

  return <AccountContextProvider value={getValues()}>{props.children}</AccountContextProvider>;
};

export {AccountProvider, useAccountContext};
