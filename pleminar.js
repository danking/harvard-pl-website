function doit () {
  var items =
    Array.prototype.slice.call(
      document.getElementsByTagName("h1")).concat(
        Array.prototype.slice.call(
          document.getElementsByTagName("h2")).concat(
            Array.prototype.slice.call(
              document.getElementsByTagName("h3")).concat(
                Array.prototype.slice.call(
                  document.getElementsByTagName("p")).concat(
                    Array.prototype.slice.call(
                      document.getElementsByTagName("li")).concat(
                        Array.prototype.slice.call(
                          document.getElementsByTagName("dd")))))))
  for (i in items) {
    item = items[i]
    item.textContent = changewords(item.textContent)
  }
}

function changewords(s) {
  var words = s.split(" ")
  for (i in words) {
    if(words[i].length > 3) {
      match = (/[^AEIOUYaeiouy]*([AEIOUYaeiouy].*)/).exec(words[i])
      capitalP = firstLetterIsCapitalized(words[i])
      words[i] = match ? (capitalP ? "Pl" : "pl") + match[1][0].toLowerCase() + match[1].slice(1) : words[i]
    }
  }
  return words.join(" ")
}

function firstLetterIsCapitalized(string) {
  return string[0] != string[0].toLowerCase()
}
