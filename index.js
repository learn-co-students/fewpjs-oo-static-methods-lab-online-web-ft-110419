class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
   return string.replace(/[^A-Za-z0-9 '-]+/g, "")

  }
  static titleize(string) {
    let str = string.split(" ")
    let word = []
    for(let char of str) 
     (word.push(str[char].toUpperCase()))
     return word.join(" ")
  }
}