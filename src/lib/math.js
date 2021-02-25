export function add(...numbers){
  const sum =  numbers.reduce((total, number) => total + number)
  return sum
}

export function subtract(a, b){
  return a - b
}

export function multiply(a, b){
  return a*b
}

export function devide(a, b){
  return a/b
}