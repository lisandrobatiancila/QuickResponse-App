import {
  addNewAllergies,
  addNewBloodType,
  addNewConditions,
  getAllAllergies,
  getAllConditions,
  getBloodType,
  setUserMedicalAidsInformation,
} from '../service/profile/Profile.service';
import {
  AllergyDTO,
  BloodTypeDTO,
  MedicalConditionDTO,
} from '../types/User.type';

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

  const sendAddNewBloodType = async (
    activeUserID: string,
    bloodType: BloodTypeDTO,
  ) => {
    const result = await addNewBloodType(activeUserID, bloodType);

    return result;
  };

  const sendGetBloodType = async (activeUserID: string) => {
    const result = await getBloodType(activeUserID);

    return result;
  };

  const setActiveUserMedicalAid = async (
    activeUserID: string,
    medicalAid: boolean,
  ) => {
    const result = await setUserMedicalAidsInformation(
      activeUserID,
      medicalAid,
    );

    return result;
  };

  return {
    sendAddNewAllergies,
    sendGetAllAllergies,
    sendAddNewCondition,
    sendGetAllConditions,
    sendAddNewBloodType,
    sendGetBloodType,
    setActiveUserMedicalAid,
  };
};
