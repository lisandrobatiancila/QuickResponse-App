import firestore from '@react-native-firebase/firestore';

export const getAllFirstAid = async () => {
  const result = await firestore().collection('FirstAid').get();

  return result;
};

export const getSpecifiFirstAid = async (firstAidID: string) => {
  const result = await firestore().collection('FirstAid').doc(firstAidID).get();

  return result;
};
