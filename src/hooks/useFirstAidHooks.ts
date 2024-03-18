import {
  getAllFirstAid,
  getSpecifiFirstAid,
} from '../service/firstaid/firstaid.service';

export const useFirstAid = () => {
  const sendGetAllFirstAid = async () => {
    const result = await getAllFirstAid();

    return result;
  };

  const sendGetSpecificFirstAid = async (firstAidID: string) => {
    const result = await getSpecifiFirstAid(firstAidID);

    return result;
  };

  return {sendGetAllFirstAid, sendGetSpecificFirstAid};
};
