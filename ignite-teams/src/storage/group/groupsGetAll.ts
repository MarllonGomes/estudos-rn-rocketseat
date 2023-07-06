import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "../storageConfig";

export async function groupsGetAll() {
  try {
    const storedData = await AsyncStorage.getItem(GROUP_COLLECTION);
    const groups: string[] = storedData ? JSON.parse(storedData) : [];
    return groups;
  } catch (error) {
    throw error;
  }
}