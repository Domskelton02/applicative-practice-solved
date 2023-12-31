import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
  // Filter the planets witho no moonsCount property and
  // Filter the planets with less than 10 moons
  const filteredPlanets = data.planets.filter(planets =>
     planets.moonsCount === undefined || planets.moonsCount < 10);

  // Extract the names of these filtered planets
  const planetNames = filteredPlanets.map(planet => planet.name);

  console.log('Filtered Planets:', filteredPlanets);
  console.log('Planet Names:', planetNames);

  // Return the array of names
  return planetNames;



}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
