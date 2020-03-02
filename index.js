class Formatter {
  static capitalize(string) {
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }
  
  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9 '-]/g, '');
  }
  
  static titleize(string) {
    const titleizedStringArray = [];
    const stringArray = string.split(' ');
    const preservedWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    titleizedStringArray.push(this.capitalize(stringArray[0]));
    for (let i = 1; i < stringArray.length; i++) {
      if (preservedWords.includes(stringArray[i])) {
        titleizedStringArray.push(stringArray[i]);
      }
      else {
        titleizedStringArray.push(this.capitalize(stringArray[i]));
      }
    }
    return titleizedStringArray.join(' ');
  }
}
