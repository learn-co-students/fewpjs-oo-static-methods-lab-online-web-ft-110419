class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-' ']+/g, '');  
  }

  static titleize(string) {
    let array = string.toLowerCase().split(" ")
    let newString = []

    for(let i = 0; i< array.length; i++){
      if (i === 0) {
        newString.push(array[i][0].toUpperCase() + array[i].slice(1))
      } else if (array[i] === 'the' || array[i] === 'a' || array[i] === 'an' || array[i] === 'but' || array[i] === 'of' || array[i] === 'and' || array[i] === 'for' || array[i] === 'at' || array[i] === 'by'  || array[i] === 'from') {
        newString.push(array[i])  
      } else {
        newString.push(array[i][0].toUpperCase() + array[i].slice(1))
      }
    }
    return newString.join(" ")
  }
}