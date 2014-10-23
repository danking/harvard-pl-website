function doit () {
  var items =
    Array.prototype.slice.call(
      document.getElementsByTagName("h1")).concat(
        Array.prototype.slice.call(
          document.getElementsByTagName("h2")).concat(
            Array.prototype.slice.call(
              document.getElementsByTagName("h3"))))
  for (i in items) {
    item = items[i]
    item.textContent = changewords(item.textContent)
  }
}

function changewords(s) {
  var words = s.split(" ")
  for (i in words) {
    if(words[i].length > 4) {
      words[i] = "pl" + words[i].slice(1)
    }
  }
  return words.join(" ")
}
