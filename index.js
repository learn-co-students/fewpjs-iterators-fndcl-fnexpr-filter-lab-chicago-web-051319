// Code your solution here
function findMatching(drivers, str) {
  return drivers.filter(driver => {return driver.toLowerCase() === str.toLowerCase();
});
}


function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => {return driver[0] === string[0]})
}

function matchName(drivers, string) {
  return drivers.filter(driver => {return driver.name === string})

}





// let even = arr.filter(n => {
//   return n % 2 === 0;
// });
// even = [2,4,6]
