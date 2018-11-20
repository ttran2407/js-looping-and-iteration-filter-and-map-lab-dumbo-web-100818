// Code your solution here:
function driversWithRevenueOver(array, value) {
  const newArr =  array.filter(function(obj){
    return obj.revenue > value
  })
  return newArr
}


function driverNamesWithRevenueOver(array, value){
  const newArr = driversWithRevenueOver(array, value)
  return newArr.map(function(obj){
    return obj.name
  })
}

function exactMatch(array, object){
  const key = Object.keys(object)[0];
  const value = object[key];
  const newArr =  array.filter(function(obj){
    return obj[key] == value
  })
  return newArr
}

function exactMatchToList(array, object){
  const newArr = exactMatch(array, object);
  return newArr.map(function(obj){
    return obj.name
  })
}
