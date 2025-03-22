function findMatching(drivers, str){
  let name = drivers.filter(n => {
    return n.toLowerCase() === str.toLowerCase();
  })
  return name;
}

function fuzzyMatch(drivers, str){
  let firstLetter = drivers.filter(n => {
    return n[0] + n[1] === str;
    // Hard coded, need some better way.
  })
  return firstLetter;
}

function matchName(drivers, str){
  let name = drivers.filter(n => {
    return n.name === str;
  })
  return name;
}
