import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
  // Find the planet object where the moons array includes the moonName
  const planet = data.planets.find(planet => planet.moons && planet.moons.includes(moonName));
  // If a planet is found, return its name, otherwise return undefined
  console.log(planet ? planet.name : undefined);
  return planet ? planet.name : undefined;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
