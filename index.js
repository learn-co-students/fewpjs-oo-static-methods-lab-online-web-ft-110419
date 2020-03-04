class Formatter {
	static capitalize(string){
		return string[0].toUpperCase() + string.slice(1, string.length)
	}

	static sanitize(string){
		return string.split("").filter(char => !char.match(/[^A-Za-z0-9-'\s]/)).join("")
	}

	static titleize(phrase){
		let word_array = phrase.split(" ")
		let lower_case_words = ["the", "a", "at", "and", "by", "from", "an", "but", "for", "of"]
		let is_lower = function(word) {
			return lower_case_words.find(smallword => word === smallword)
		}
		word_array = word_array.map(function(word, index){
			if (index === 0) {
				return word[0].toUpperCase() + word.slice(1, word.length)
			}
			else if (is_lower(word)) {
				return word
			}
			else {
				return word[0].toUpperCase() + word.slice(1, word.length)
			}
		})
		return word_array.join(" ")
	}
  //add static methods here
}