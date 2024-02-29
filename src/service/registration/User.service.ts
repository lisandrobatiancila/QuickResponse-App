import httpInstance from '../../config/config';
import { RegistrationDTO } from '../../types/Registration.type';
import {AccountDTO, LoginDTO, UserDTO} from '../../types/User.type';
import firestore, { Filter } from '@react-native-firebase/firestore';
import { sha256 } from 'react-native-sha256';

export const registrationUser = async (loginFormValues: RegistrationDTO) => {
  const {profile, firstname, middlename, lastname, mobilenumber, address, email, password, isActive} = loginFormValues;
  const sha256Password = await sha256(password);

  const users = await firestore().collection('Users').add({
    email,
    password: sha256Password,
    isActive,
    account: {
      profile, firstname, middlename, lastname, mobilenumber, address
    }
  });

  return users;
};

export const loginUser = async (loginFormValues: LoginDTO): Promise<UserDTO> => {
  const {loginEmail, loginPassword} = loginFormValues;
      const results = await firestore().collection('Users').where('email', '==', loginEmail).get();
    
      if (results.docs.length === 0) {
        return {} as UserDTO;
      }
      const activeUser: UserDTO = results.docs[0].data() as UserDTO;
      const {password} = activeUser;
      
      const loginPassSha256 = await sha256(loginPassword);
      
      if (loginPassSha256 !== password) {
        return {} as UserDTO;
      }

  return activeUser;
};
