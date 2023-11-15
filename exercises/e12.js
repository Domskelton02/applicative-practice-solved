import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
  // Use the reduce method to sum up the moons count of each planet
  const totalMoons = data.planets.reduce((sum, planet) => {
    // Check if moonCount property exists to avoid adding endefined to the sum
    const moonsCount = planet.moonsCount ? planet.moonsCount : 0;
    return sum + moonsCount;
  }, 0);
  return totalMoons;  
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
