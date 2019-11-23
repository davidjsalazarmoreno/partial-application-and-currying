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

/**
 * Basado en la funcion schofinkelize del libro Javascript Patterns, Stoyan
 * Stefanov, página 82.
 */
function partialApply(fn, ...oldArgs) {
  return (...newArgs) => {
    const args = [ ...oldArgs, ...newArgs ]
    return fn.apply(null, args)
  }
}

// Aplicación parcial
const greetingInSpanish = partialApply(greet, 'spanish')
const greetingInEnglish = partialApply(greet, 'english')
const greetingInFrench= partialApply(greet, 'french')

/**
 * Luego en teoría podríamos aplicar de forma completa esta
 * función pasandole los argumentos restantes
 */
console.log(greetingInSpanish(' Pedro')) // Hello, Pedro
console.log(greetingInEnglish(' Peter')) // Hello, Peter
console.log(greetingInFrench(' Pierre')) // Hello, Pierre
