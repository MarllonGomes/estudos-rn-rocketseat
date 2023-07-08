import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";
import { PLAYER_COLLECTION } from "../storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
  player: PlayerStorageDTO,
  group: string
) {
  try {
    const players = await playersGetByGroup(group);
    const playerExists = players.find((item) => item.name === player.name);
    if (playerExists) {
      throw new AppError("Jogador já cadastrado");
    }
    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      JSON.stringify([...players, player])
    );
  } catch (error) {
    throw error;
  }
}
