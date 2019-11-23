// Invocando una función

console.log('=============== Invocando ===============')
console.log('Estoy siendo invocada de la forma "¿Clásica?"')


console.log('=============== Aplicando ===============')
/**
 * Aplicando una función usando el método apply,
 * recordemos que en Javascript las funciones
 * son objetos  por lo tanto tienen métodos
 */
console.log.apply(null, ['Estoy siendo aplicada', ', aparte paso otra cadena']) // ES5


console.log('=============== Aplicando con this apuntando a spanishGreeting  ===============')
const greeting = {
  greet: function(who) {
    const { language, message } = this
    console.log(language + ': ' + message, who)
  },
}

const spanishGreeting = {
  language: 'Español',
  message: 'Hola, ¿qué tal?',
}

/**
 * Devolverá 'Español: Hola, ¿qué tal? ,CraftingCode'
 */
greeting.greet.apply(spanishGreeting, [',CraftingCode'])
