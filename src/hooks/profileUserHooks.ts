import {
  addNewAllergies,
  addNewConditions,
  getAllAllergies,
  getAllConditions,
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
    const result = await addNewConditions(activeUserID, condition);

    return result;
  };

  const sendGetAllConditions = async (activeUserID: string) => {
    const result = await getAllConditions(activeUserID);

    return result;
  };

  return {
    sendAddNewAllergies,
    sendGetAllAllergies,
    sendAddNewCondition,
    sendGetAllConditions,
  };
};
