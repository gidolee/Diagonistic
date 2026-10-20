type Player = { name: string; score: number };
const players = [
  { name: "Asha", score: 82 },
  { name: "Ben", score: 95 },
  { name: "Chloe", score: 67 },
  { name: "Dev", score: 91 },
];
function topThreePlayers(players: Player[]): Player[] {
  return [...players].sort((a, b) => b.score - a.score).slice(0, 3);
}
console.log(topThreePlayers(players));
console.log(
  "before:",
  players.map((p) => p.name),
);
topThreePlayers(players);
console.log(
  "after: ",
  players.map((p) => p.name),
);
async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    users.forEach((user) => {
      console.log(`${user.name} – ${user.address.city}`);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
