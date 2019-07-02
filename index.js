// Code your solution here
function findMatching(drivers, searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  return drivers.filter((driver) => {
    return  driver.toLowerCase() === searchTerm;
  })
}

function fuzzyMatch(drivers, searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  const searchTermLength = searchTerm.length
  // console.log(searchTerm.length);
  return drivers.filter((driver) => {
    if(driver.slice(0,searchTermLength).toLowerCase() == searchTerm){
      return driver;
    }
  })
}

function matchName(drivers, searchTerm) {
  searchTerm = searchTerm.toLowerCase()
  return drivers.filter((driver) => {
    return  driver.name.toLowerCase() === searchTerm;
  })

}
