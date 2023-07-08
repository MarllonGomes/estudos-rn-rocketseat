import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playersGetByGroup(
  group: string
): Promise<PlayerStorageDTO[]> {
  try {
    const players = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);
    const playersParsed = players ? JSON.parse(players) : [];
    return playersParsed;
  } catch (error) {
    throw error;
  }
}
