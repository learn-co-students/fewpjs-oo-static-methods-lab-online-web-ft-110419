class Formatter {
  //add static methods here
  
  static capitalize( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(sentence) {
    let wordExcept = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let results = [];
    let arrayW = sentence.split( " " )
    for ( let w = 0; w < arrayW.length; w++ ) {
      if ( w === 0 ) {
        results.push( this.capitalize( arrayW[ w ] ) )
      } else {
        if ( wordExcept.includes( arrayW[ w ] ) ) {
          results.push( arrayW[ w ] )
        } else {
          results.push( this.capitalize( arrayW[ w ] ) )
        }
      }

    }
    return results.join( " " );
  }
}