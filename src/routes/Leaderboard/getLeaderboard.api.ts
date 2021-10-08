const getLeaderboard = async () => {
  const res = await fetch("https://hackathon-backend.azurewebsites.net/leaderboard");

  const data = (await res.json()) as LeaderboardData[];

  return data;
};

export interface LeaderboardData {
  username: string;
  nOfCoins: number;
}
export { getLeaderboard };
