import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(groupName: string) {
  try {
    const groups = await groupsGetAll();

    const groupExists = groups.includes(groupName);
    if (groupExists) {
      throw new AppError("Já existe um grupo cadastrado com este nome.");
    }

    await AsyncStorage.setItem(
      GROUP_COLLECTION, 
      JSON.stringify([groupName, ...groups])
    );
  } catch (error) {
    throw error;
  }
}