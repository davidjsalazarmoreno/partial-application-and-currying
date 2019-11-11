module Main exposing (..)
import Browser
import Html exposing (Html, div, text)

greet language message =
  case language of
   "spanish" ->
      "Hola, " ++ message
   "english" ->
      "Hello, " ++ message
   "french" ->
      "Salut, " ++ message
   _ ->
     "Unknown language " ++ language

-- Aplicación total
fullyApplied = greet "spanish" "CraftingCode"

-- Aplicación parcial
-- El valor de las siguientes 3 constantes es
-- una función que toma una cadena: message
greetingInSpanish = greet "spanish"
greetingInEnglish = greet "english"
greetingInFrench= greet "french"

main =
  div []
    [
      -- Aplicación total
      div [ ]  [ text fullyApplied ],
      -- Llamando a cada una de las funciones currificadas anteriormente
      div [ ]  [ text (greetingInSpanish "Pedro") ],
      div [ ]  [ text (greetingInEnglish "Peter") ],
      div [ ]  [ text (greetingInFrench "Pierre") ]
    ]
