import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAsyncStorage = async (key: string, param: any) => {
    const record = JSON.stringify(param);
    
    await AsyncStorage.setItem(key, record);
};

export const getAsyncStorage = async (key: string) => {
    try{
        const record = await AsyncStorage.getItem(key);

        return record;
    }
    catch(error) {
        console.error(error);
    }
};
