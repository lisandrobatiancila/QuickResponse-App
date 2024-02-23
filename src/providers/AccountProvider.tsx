import React, {useState} from 'react';
import createAppContext from '../utils/createContext';
import {AccountContextTypeDTO, AccountTypeDTO} from '../types/Account.type';

type AccountProviderProps = {
  children: React.ReactNode;
};

const [useAccountContext, AccountContextProvider] = createAppContext<AccountContextTypeDTO>();

function AccountProvider (props: AccountProviderProps){
  const [firstname, setFirstname] = useState<string>('');
  const [middlename, setMiddlename] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [contactno, setContactno] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const setActiveUserInformation = (params: AccountTypeDTO) => {
    const {firstname, middlename, lastname, contactno, email } = params;

    setFirstname(firstname ?? '');
    setMiddlename(middlename ?? '');
    setLastname(lastname ?? '');
    setContactno(contactno ?? '');
    setEmail(email ?? '');
  }
  const getValues = (): AccountContextTypeDTO => {
    return {
      firstname,
      middlename,
      lastname,
      contactno,
      email,
      setActiveUserInformation
    };
  };

  return <AccountContextProvider value={getValues()}>{props.children}</AccountContextProvider>;
};

export {AccountProvider, useAccountContext};
