class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
   return string.replace(/[^A-Za-z0-9 '-]+/g, "")

  }
  static titleize(string) {
   let isExcepted = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let word = [];
    let words = string.split( " " )
    for ( let n = 0; n < words.length; n++ ) {
      if ( n == 0 ) {
        word.push( this.capitalize( words[ n ] ) )
      } else {
        if ( isExcepted.includes( words[ n ] ) ) {
          word.push( words[ n ] )
        } else {
          word.push( this.capitalize( words[ n ] ) )
        }
      }

    }
    return word.join(" ")
  }
}