/**
 * Ejercicio 27
Crear un documento con el nombre ej27.js

Declarar 2 variables con los nombres numero1 y numero2

Asignarle a cada variable un valor del tipo number

Para cada operación mostrar el mensaje de la siguiente forma:

Ejemplos: sumo 2 + 3 y el resultado es 5 
(donde 2 y 3 son los valores de las variables y 5 es el resultado de la operación)
Mostrar en consola el resultado de la suma de las dos variables
Mostrar en consola el resultado de la resta de las dos variables
Mostrar en consola el resultado de la multiplicación de las dos variables
Mostrar en consola el resultado de la división de las dos variables
Mostrar en consola el resultado del resto de las dos variables
 */

let numero1 = 25, numero2 = 20, suma, resta, division, multiplicacion, resto;

suma = numero1 + numero2;

resta = numero1 - numero2;

division = numero1 / numero2;

multiplicacion = numero1 * numero2;

resto = numero1 % numero2;

console.log(`El resultado de la suma de las dos variables es ${suma}
El resultado de la resta de las dos variables es ${resta}
El resultado de la division de las dos variables es ${division}
El resultado de la multiplicacion de las dos variables es ${multiplicacion}
El resultado del modulo de las dos variables es ${resto}`);
