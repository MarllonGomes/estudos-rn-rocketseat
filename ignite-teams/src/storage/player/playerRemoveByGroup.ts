import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "../storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export const playerRemoveByGroup = async (
  playerName: string,
  group: string
) => {
  try {
    const players = await playersGetByGroup(group);
    const newPlayers = players.filter((player) => player.name !== playerName);
    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify(newPlayers)
    );
  } catch (error) {
    throw error;
  }
};
