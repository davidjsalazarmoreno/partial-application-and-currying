function greet(language, message) {
  switch (language) {
    case 'spanish':
      return 'Hola,' + message
      break
    case 'english':
      return 'Hello,' + message
      break
    case 'french':
      return 'Salut,' + message
      break
    default:
      return 'Unknown language ' + language
  }
}

function curry(fn, ...oldArgs) {
  return (...newArgs) => {
    const args = [ ...oldArgs, ...newArgs ]
    return fn.apply(null, args)
  }
}

/**
 * Devuelve una función que ya tiene 'english'
 * como argumento parcialmente aplicado
 */
const greetingInEnglish = curry(greet, 'english')

// Retorna Hello, CraftingCode
console.log(greetingInEnglish(' CraftingCode'))
// Retorna Hello, Pedro
console.log(greetingInEnglish(' Pedro'))
// Retorna Hello, Ian
console.log(greetingInEnglish(' Ian'))
