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

// Aplicación total
const fullApplied = greet.apply(null, ['spanish', 'craftingcode'])
console.log(fullApplied)

// Aplicación parcial
/**
 * ESTO NO ES CÓDIGO VALIDO JAVASCRIPT, partialApply NO EXISTE (AÚN)
 * simplemente imaginemos que el método partialApply aplicaria
 * parcialmente la función greet para luego devolver otra función:
 * greetingInEnglish

 */
const greetingInEnglish = greet.partialApply(null, ['english'])

/**
 * Luego en teoría podríamos aplicar de forma completa esta
 * función pasandole los argumentos restantes
 */
console.log(greetingInEnglish(' CraftingCode')) // Hello, CraftingCode
console.log(greetingInEnglish(' Pedro')) // Hello, Pedro
console.log(greetingInEnglish(' Ian')) // Hello, Ian
