import { registration } from "../service/registration/User.service"
import { RegistrationDTO } from "../types/Registration.type";

export const useUserCredentials = () => {
    const sendRegisterQRUser = async (registrationDTO: RegistrationDTO) => {
        const record = await registration(registrationDTO);
    }

    return {
        sendRegisterQRUser
    }
}
