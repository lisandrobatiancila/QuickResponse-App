import {
  AllergyDTO,
  BloodTypeDTO,
  MedicalConditionDTO,
} from '../../types/User.type';
import firestore from '@react-native-firebase/firestore';

export const addNewAllergies = async (
  activeUserID: string,
  allergies: AllergyDTO,
) => {
  const result = await firestore()
    .collection('Allergies')
    .doc(activeUserID)
    .set(
      {allergies: firestore.FieldValue.arrayUnion(allergies.allergy)},
      {merge: true},
    );

  return result;
};

export const getAllAllergies = async (activeUserID: string) => {
  const result = await firestore()
    .collection('Allergies')
    .doc(activeUserID)
    .get();

  return result;
};

export const addNewConditions = async (
  activeUserID: string,
  conditions: MedicalConditionDTO,
) => {
  const result = await firestore()
    .collection('Conditions')
    .doc(activeUserID)
    .set(
      {allergies: firestore.FieldValue.arrayUnion(conditions.condition)},
      {merge: true},
    );

  return result;
};

export const getAllConditions = async (activeUserID: string) => {
  const result = await firestore()
    .collection('Conditions')
    .doc(activeUserID)
    .get();

  return result;
};

export const addNewBloodType = async (
  activeUserID: string,
  bloodType: BloodTypeDTO,
) => {
  const result = await firestore()
    .collection('BloodType')
    .doc(activeUserID)
    .set({
      bloodType: bloodType.bloodType,
    });

  return result;
};

export const getBloodType = async (activeUserId: string) => {
  const result = await firestore()
    .collection('BloodType')
    .doc(activeUserId)
    .get();

  return result;
};

export const setUserMedicalAidsInformation = async (
  activeUserID: string,
  medicalAid: boolean,
) => {
  const result = await firestore()
    .collection('Medical Aid')
    .doc(activeUserID)
    .set({
      medicalAid: medicalAid,
    });

  return result;
};
