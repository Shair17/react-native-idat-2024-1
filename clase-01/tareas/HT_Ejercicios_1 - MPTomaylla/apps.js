/*- Suma y Resta:
Declarar dos variables numéricas y asignar valores, 
realiza la suma de las dos variables y muestra el resultado por consola
Luego, realiza la resta de las dos variables y muestra el resultado por consola
*/
console.log('Ejercicio 1: Suma y Resta');

let num1 = 120;
let num2 = 100;

console.log('Los números son: ', num1, ' y ', num2);

suma = num1 + num2;
console.log('La suma de los números es: ', suma);

resta = num1 - num2;
console.log('La resta de los números es: ', resta);

/* 
- Multiplicación y División:
Crea dos variables numéricas y asígnales valores diferentes, realiza la multiplicación de estas dos variables y muestra el resultado
Luego, divide una de las variables por la otra y muestra el resultado
*/
console.log('Ejercicio 2: Multiplicación y División');
let num3 = 10;
let num4 = 2;


console.log('Los números son: ', num3, ' y ', num4);

multiplicacion = num3 * num4;
console.log('La multiplicación es: ', multiplicacion);

division = num3 / num4;
console.log('La división es: ', division);

/* 
- Operaciones Mixtas:
Declara tres variables numéricas con valores diferentes, realiza una operación aritmética que involucre suma, resta, multiplicación y división con estas variables y muestra el resultado
*/
console.log('Ejercicio 3: Operaciones Mixtas');
let num5 = 10;
let num6 = 3;
let num7 = 2;

operacion = num5 * num6 / num7 + num6 - num5;

console.log('Los números son: ', num5, ', ', num6, ' y ', num7);
console.log('La operación es: ', num5, ' x ', num6, ' / ', num7, ' + ', num6, ' - ', num5);
console.log('El resultado es: ', operacion);

/* 
- Operaciones con Incremento y Decremento:
Declara una variable numérica y asígnale un valor inicial
Utiliza el operador de incremento para aumentar el valor de la variable en 1
Luego, utiliza el operador de decremento para disminuir el valor de la variable en 1
Muestra el valor final de la variable después de cada operación
*/
console.log('Ejercicio 4: Operaciones con Incremento y Decremento');
let num8 = 2;
console.log('El número es: ', num8);
num8++;
console.log('Incremento: ', num8);
num8--;
console.log('Decremento: ', num8);


/* 
- Operaciones con Módulo:
Crea dos variables numéricas y asignar valores
Realiza la operación de módulo (resto de la división, "%") entre estas dos variables y muestra el resultado
*/

console.log('Ejercicio 5: Operaciones con Módulo');
let num9 = 9;
let num10 = 2;
console.log('Los números son: ', num9, ' y ', num10);
modulo = num9 % num10;
console.log('El resto de la división es: ', modulo);
