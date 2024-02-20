import httpInstance from '../../config/config';
import {RegistrationDTO} from '../../types/Registration.type';

export const registration = async (registrationDTO: RegistrationDTO) => {
  const {data} = await httpInstance.post('users', registrationDTO);

  return data;
};
