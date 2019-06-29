// Code your solution here





function findMatching(drivers, string){
  const driver = drivers.filter(str => {
    return str.toLowerCase() === string.toLowerCase()
  });
    return (driver)
};

function fuzzyMatch(drivers, string){
  const driver = drivers.filter(str => {
    return str.startsWith(string)
  })
  console.log(driver)
  return(driver)

};

function matchName(drivers, string){
  const driver = drivers.filter(str => {
    return str.name === string
  })
  console.log(string)
  return (driver)

}
