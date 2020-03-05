class Formatter {
  //add static methods here
  static capitalize(str) {
    return `${str[0].toUpperCase()}${str.substring(1)}`;
  }

  static sanitize(str) {
    return str.replace(/[^\w\d\s-']/gi, '');
  }

  static titleize(str) {
    const exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

    return str.split(" ").map((word, index) => {
      return index === 0 || !exemptWords.find(exemptWord => exemptWord === word) ?
        Formatter.capitalize(word) :
        word;
    }).join(" ");
  }
}