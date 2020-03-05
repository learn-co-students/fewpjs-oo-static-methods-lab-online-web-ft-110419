class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.replace(string[0], string[0].toUpperCase());
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9_\s'-]/g, "");
  }

  static titleize(string) {
    let other = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    let newString = string.split(" ").map((word, i) => {
      return !other.includes(word) || i === 0 ? this.capitalize(word) : word;
    });
    return newString.join(" ");
  }
}
