/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from './e17';

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  
  // Create an object to hold the count of discoveries per year
  const discoveriesPerYear = data.asteroids.reduce((acc, asteroids) => {
    // If year is already in the accumalator object, increment it's count
    if (acc[asteroids.discoveryYear]) {
      acc[asteroids.discoveryYear]++;
    } else {
      // Otherwise start counting from 1
      acc[asteroids.discoveryYear] = 1;
    }
    return acc;
  }, {});
  // Use the maxBy function to find the year with the highest number of discoveries
  const greatestYear = maxBy(Object.keys(discoveriesPerYear), (year) => {
    return discoveriesPerYear[year];
  });
  // maxBy will return the year as a string, so convert it to a number
  console.log(greatestYear);
  return Number(greatestYear);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
