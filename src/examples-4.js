/**
 * Basado en la funcion schofinkelize del libro Javascript Patterns, Stoyan
 * Stefanov, página 82.
 */
function partialApply(fn, ...oldArgs) {
  return (...newArgs) => {
    const args = [...oldArgs, ...newArgs]
    return fn.apply(null, args)
  }
}


/**
 * Funciones con los mismos parametros
 * Ejemplo de https://javascript.info/currying-partials
 */
function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  )
}

const logNow = partialApply(log, new Date())
const logNowDebug = partialApply(logNow, 'DEBUG')
const logNowWarning = partialApply(logNow, 'WARNING')
const logNowError = partialApply(logNow, 'ERROR')

/**
 * Function Composition o composición de funciones
 */
const logGenericError = partialApply(logNowError, 'This is a generic error')

logNow('INFO', 'This is a information message log')
logNowDebug('=============== Debug message ===============')
logNowWarning('Your system could crash')
logNowError('System crashed')
logGenericError()
