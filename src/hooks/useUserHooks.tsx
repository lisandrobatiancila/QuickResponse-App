import {
  loginUser,
  registrationUser,
  updateUserInformation,
} from '../service/registration/User.service';
import {RegistrationDTO} from '../types/Registration.type';
import {LoginDTO, UpdateProfileDTO, UserDTO} from '../types/User.type';

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
    activeUserID: string,
    profileInformation: UpdateProfileDTO,
  ) => {
    const record = await updateUserInformation(activeUserID, profileInformation);
    
    return record;
  };

  return {
    sendRegisterQRUser,
    sendLoginQRUser,
    sendUpdateInfromationOfQRUser,
  };
};
