import {
  loginUser,
  registrationUser,
  updateUserInformation,
} from '../service/registration/User.service';
import {RegistrationDTO} from '../types/Registration.type';
import {LoginDTO, ProfileDTO, UserDTO} from '../types/User.type';

export const useUserCredentials = () => {
  const sendRegisterQRUser = async (registrationDTO: RegistrationDTO) => {
    const record = await registrationUser(registrationDTO);

    return record;
  };

  const sendLoginQRUser = async (loginDTO: LoginDTO): Promise<UserDTO> => {
    const record = await loginUser(loginDTO);

    return record;
  };

  const sendUpdateInfromationOfQRUser = async (
    profileInformation: ProfileDTO,
  ) => {
    const record = await updateUserInformation(profileInformation);

    return record;
  };

  return {
    sendRegisterQRUser,
    sendLoginQRUser,
    sendUpdateInfromationOfQRUser,
  };
};
