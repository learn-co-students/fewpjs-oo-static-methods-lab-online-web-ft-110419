class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static sanitize(string){
    return string.split("").filter(char => !char.match(/[^A-Za-z0-9-'\s]/)).join("")
  };

  static titleize(string){
    let exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let lowerCase = string.split(" ").map(word => Formatter.sanitize(word));
    let titleString = [];
    
    for (let i = 0; i < lowerCase.length; i++) {
      if (i === 0) {
        titleString.push(Formatter.capitalize(lowerCase[i]));
      } else {
        if (exceptions.find(element => element === lowerCase[i])) {
          titleString.push(lowerCase[i])
        } else {
          titleString.push(Formatter.capitalize(lowerCase[i]))
        }
      };
    };
    return titleString.join(" ");
  };

}