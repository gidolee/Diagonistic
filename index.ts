function topThreePlayers(players: { name: string; score: number }[]): {
  name: string;
  score: number;
}[] {
  return players.sort((a, b) => b.score - a.score).slice(0, 3);
}
const players = [
  { name: "Asha", score: 82 },
  { name: "Ben", score: 95 },
  { name: "Chloe", score: 67 },
  { name: "Dev", score: 91 },
];
console.log(players);
console.log(topThreePlayers(players));

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
