import httpInstance from '../../config/config';
import {LoginDTO, RegistrationDTO} from '../../types/User.type';

export const registrationUser = async (registrationDTO: RegistrationDTO) => {
  const {data} = await httpInstance.post('users', registrationDTO);

  return data;
};

export const loginUser = async (loginDTO: LoginDTO) => {
  const {data} = await httpInstance.post('users/login', loginDTO);

  return data;
};
