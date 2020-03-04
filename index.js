class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);

  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');

  }
  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}

// function titleize(title){
//   let lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
//   let newTitle = [];
//   let x = title.split(' ');
//   for (let i = 0; i < x.length ; i++){
//     if (i === 0){
//       newTitle.push(this.capitalize(x[i]));
//     } else {
//       if (lowerCaseWords.includes(x[i])){
//         newTitle.push(x[i]);
//       } else {
//         newTitle.push(x[i].charAt(0).toUpperCase + x[i].slice(1));
//       }
//     };
//   }
//   return newTitle.toString();
// };
// titleize("A TALE OF TWO CITIES");
