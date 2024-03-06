import {AllergyDTO} from '../../types/User.type';
import firestore from '@react-native-firebase/firestore';

export const addNewAllergies = async (
  activeUserID: string,
  allergies: AllergyDTO,
) => {
  const result = await firestore()
    .collection('Allergies')
    .doc(activeUserID)
    .update({allergies: firestore.FieldValue.arrayUnion(allergies.allergy)});

  return result;
};

export const getAllAllergies = async (activeUserID: string) => {
  const result = await firestore()
    .collection('Allergies')
    .doc(activeUserID)
    .get();

  return result;
};
