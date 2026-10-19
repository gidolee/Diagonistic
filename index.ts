function topThreePlayers(players: { name: string; score: number }[]): {
  name: string;
  score: number;
} {
  return players.sort((a, b) => b.score - a.score).slice(0, 3);
}
const players = [
  { name: "Asha", score: 82 },
  { name: "Ben", score: 95 },
  { name: "Chloe", score: 67 },
  { name: "Dev", score: 91 },
];
