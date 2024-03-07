import {
  addNewAllergies,
  addNewConditions,
  getAllAllergies,
} from '../service/profile/Profile.service';
import {AllergyDTO, MedicalConditionDTO} from '../types/User.type';

export const useUserProfile = () => {
  const sendAddNewAllergies = async (
    activeUserID: string,
    allergy: AllergyDTO,
  ) => {
    const result = await addNewAllergies(activeUserID, allergy);

    return result;
  };

  const sendGetAllAllergies = async (activeUserID: string) => {
    const result = await getAllAllergies(activeUserID);

    return result;
  };

  const sendAddNewCondition = async (
    activeUserID: string,
    condition: MedicalConditionDTO,
  ) => {
    try {
      const result = await addNewConditions(activeUserID, condition);

      return result;
    } catch (err) {
      console.log('ERR');
      console.log(err);
    }
  };

  const sendGetAllConditions = async (activeUserID: string) => {
    const result = await getAllAllergies(activeUserID);

    return result;
  };

  return {
    sendAddNewAllergies,
    sendGetAllAllergies,
    sendAddNewCondition,
    sendGetAllConditions,
  };
};
