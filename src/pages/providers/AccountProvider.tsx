import React, {useState} from 'react';
import createAppContext from '../../utils/createContext';
import {AccountContextTypeDTO} from '../../types/Account.type';

type AccountProviderProps = {
  children: React.ReactNode;
};

export const AccountContextProvider = (props: AccountProviderProps) => {
  const {children} = props;
  const [AppProvider] = createAppContext();
  const [firstname, setFirstname] = useState<string>('');
  const [middlename, setMiddlename] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [contactno, setContactno] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const getValues = (): AccountContextTypeDTO => {
    return {
      firstname,
      middlename,
      lastname,
      contactno,
      email,
      setFirstname,
      setMiddlename,
      setLastname,
      setContactno,
      setEmail,
    };
  };

  return <AppProvider value={getValues()}>{children}</AppProvider>;
};
