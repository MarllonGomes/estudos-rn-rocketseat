import { playersGetByGroup } from "./playersGetByGroup";

export async function playerGetByGroupAndTeam(group: string, team: string) {
  try {
    const players = await playersGetByGroup(group);
    return players.filter(item => item.team === team).map(item => item.name)
  } catch (error) {
    throw error;
  }
}