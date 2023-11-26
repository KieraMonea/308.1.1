// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Part 1
const isSum50 = (n1 + n2 + n3 + n4) == 50;
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

console.log(`The four numbers are valid according to the provided criteria: ${isValid}.`);

//Activity 2
const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
const firstLargerThanLast = n1 > n4;
const result = ((n2 - n1) * n3) % n4;
const isUnder25 = result <= 25;
console.log(`All numbers divisible by 5: ${allDivisibleBy5}`);
console.log(`First number larger than last: ${firstLargerThanLast}`);
console.log(`Arithmetic chain result: ${result}`);
console.log(`Is under 25: ${isUnder25}`);

//Part 2
const totalDistance = 1500;
const fuelEfficiency = {
  55: 30,
  60: 28,
  75: 23,
};
const fuelBudget = 175;
const fuelCostPerGallon = 3;

for (let speed in fuelEfficiency) {
    let gallonsNeeded = totalDistance / fuelEfficiency[speed];
    let cost = gallonsNeeded * fuelCostPerGallon;
    let isBudgetEnough = cost <= fuelBudget;
  
    console.log(
      `Speed: ${speed} mph | Gallons needed: ${gallonsNeeded.toFixed(2)} | Cost: $${cost.toFixed(2)} | Budget enough: ${isBudgetEnough}`
    );
  }
  
