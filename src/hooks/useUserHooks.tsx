import {
  loginUser,
  registrationUser,
} from '../service/registration/User.service';
import {LoginDTO, RegistrationDTO} from '../types/User.type';

export const useUserCredentials = () => {
  const sendRegisterQRUser = async (registrationDTO: RegistrationDTO) => {
    const record = await registrationUser(registrationDTO);

    return record;
  };

  const sendLoginQRUser = async (loginDTO: LoginDTO) => {
    const record = await loginUser(loginDTO);

    return record;
  };

  return {
    sendRegisterQRUser,
    sendLoginQRUser,
  };
};
