class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let words = string.split(' ')
    const sanitized = words.map( word => word.replace(/[^A-Za-z-']+/g, ''))
    return sanitized.join(' ')
  }

  static titleize(string) {
    const exceptions = ['the', 'an', 'a', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const words = string.split(' ')
    const lead = words[0].charAt(0).toUpperCase() + words[0].slice(1)
    const rest = words.slice(1)
    const upRest = []

    for (let word of rest) {
      if (!exceptions.includes(word)) {
        word = word.charAt(0).toUpperCase() + word.slice(1)
      }
      upRest.push(word)
    }
    const title = (lead + ' ' + upRest.join(' '))
    return title
  }
}