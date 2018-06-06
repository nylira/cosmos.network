export default function(text) {
  let hiddenInput = document.createElement("input")

  // set the text to be copied
  hiddenInput.setAttribute("value", text)

  // add the element
  document.body.appendChild(hiddenInput)

  // select the text
  hiddenInput.select()

  // copy the text
  document.execCommand("copy")

  // remove the element
  document.body.removeChild(hiddenInput)
}
