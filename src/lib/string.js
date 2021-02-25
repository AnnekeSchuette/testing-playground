export function commaSeparatedToArray(text){
  const array = text.split(',').map(item => item.trim())
  return array
}

export function ascAlphapetical(text){
  const array= commaSeparatedToArray(text)
  const sortedArray = array.sort()
  return sortedArray
}

export function noDuplicates(text){
  const array = commaSeparatedToArray(text)
  return array.filter((value, index) => array.indexOf(value) === index)
}

export function capitalize(text){
  const array = commaSeparatedToArray(text)
  return array.map(item => item.charAt(0).toUpperCase() + item.slice(1))
}