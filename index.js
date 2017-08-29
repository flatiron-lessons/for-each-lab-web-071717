function iterativeLog(array) {
  array.forEach(function (element) {
    console.log(`${array.indexOf(element)}: ${element}`)
  })
}

function iterate(callback) {
  const arr = ["the", "lone", "wolf", "dies", "but", "the", "pack", "survives"]
  arr.forEach(callback)
  return arr
}

function doToArray(array, callback) {
  array.forEach(callback)
}
