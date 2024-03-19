import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

export const setAsyncStorage = async (key: string, param: any) => {
  try {
    const record = JSON.stringify(param);

    await AsyncStorage.setItem(key, record);
  } catch (error) {
    console.error(error);
  }
};

export const getAsyncStorage = async (key: string) => {
  try {
    const record = await AsyncStorage.getItem(key);

    return record;
  } catch (error) {
    console.error(error);
  }
};

export const validateIfUserExists = async (email: string): Promise<boolean> => {
  const response = await firestore()
    .collection('Users')
    .where('email', '==', email)
    .get();

  if (!response.docs[0]) {
    return false;
  }

  const isExists = response.docs[0].data()?.email === email;

  return isExists;
};
