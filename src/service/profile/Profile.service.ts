import {AllergyDTO, MedicalConditionDTO} from '../../types/User.type';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';

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
