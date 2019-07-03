// Code your solution here
function findMatching(arr, str){
    return arr.filter(e => e.toLowerCase() == str.toLowerCase())
}

function fuzzyMatch(arr, str){
    return arr.filter(x => x.toLowerCase().includes(str.toLowerCase())).filter(e => e.startsWith(str))
}

function matchName(arr, str){
    return arr.filter(e => e.name == str)
}