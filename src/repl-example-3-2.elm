fooPrinter foo bar bim baz = foo ++ bar ++ bim ++ baz

-- Aplicación completa
fooPrinter "foo" "bar" "bim" "baz"

-- Aplicación parcial, Elm auto-currifica las funciones

-- foo1 toma 3 cadenas como parámetros y retorna una cadena.
-- (String -> String -> String) -> String
foo1 = fooPrinter "foo"

-- foo2 toma 2 cadenas como parámetros y retorna una cadena.
-- (String -> String) -> String
foo2 = fooPrinter "foo" "bar"

-- foo3 toma 1 cadena como parámetro y retorna una cadena.
-- String -> String
foo3 = fooPrinter "foo" "bar" "bim"
