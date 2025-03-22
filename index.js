const findMatching = (drivers, str) => {
  return drivers.filter(driver => driver.toLowerCase() == str.toLowerCase());
}

const fuzzyMatch = (drivers, str) => {
  return drivers.filter(driver => driver.startsWith(str));
}

const matchName = (drivers, str) => {
  return drivers.filter(driver => driver.name == str);
}
