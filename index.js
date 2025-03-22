// Code your solution here
function findMatching(drivers, str){
   const match = drivers.filter(function(driver){
        if(driver.toLowerCase()==str.toLowerCase()){
            return driver
        }
    })
    return match;
}

function fuzzyMatch(drivers, str){
   const fuzzy =  drivers.filter(function(driver){
        if (driver.startsWith(str)){
            return driver
        }
    })
    return fuzzy;
}

function matchName(drivers, str){
    const matched = drivers.filter(function(driver){
        if (driver.name == str){
            return driver
        }
    })
    return matched;
}