export type Player = { name: string; score: number };

const players: Player[] = [
  { name: "Asha", score: 82 },
  { name: "Ben", score: 95 },
  { name: "Chloe", score: 67 },
  { name: "Dev", score: 91 },
];

// Exercise 1: players who scored over 80
const playersOver80 = players.filter((player) => player.score > 80);
console.log(playersOver80);

// Exercise 2: players names
const names = players.map((p) => p.name);
console.log(names);

// Exercise 3: player that starts with D
const firstD = players.find((player) => player.name.startsWith("D"));
console.log(firstD);

// Exercise 4: Average score
const averageScore =
  players.reduce((acc, player) => acc + player.score, 0) / players.length;
console.log(averageScore);
