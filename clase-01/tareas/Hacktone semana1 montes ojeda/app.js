/*SUMA Y RESTA:
Declarar dos variables numericas y asignar valores, realiza la suma de las dos variables y muestra el resultado por consola.
Luego realiza la resta de las dos variables y muestra el resultado por consola.
 */
let a=10;
let b=20;
suma=a+b;
resta=a-b;
console.log("Se tienen las siguientes variables:",a,"y",b,"\nEl resultado de la suma es: ",suma,"\nEl resultado de la resta es:",resta);

/*Multiplicacion y Division:
Crea dos variables numericas y asignales valores diferentes, realiza la multiplicacion de estados dos variables y muestra el resultado. Luego, divide una de las variables por la otra y muestra el resultado.
*/
let c=10;
let d=15;
producto=c*d;
division=c/d;
console.log("Se tienen las siguientes variables",c,"y",d,"\nEl producto entre las dos variables es",producto,"\nLa division entre las dos variables es:",division);

/*Operaciones Mixtas:
Declara tres variables numericas con valores diferentes, realiza una operacion aritmetica que involucre suma, resta, multiplicacion y division con estas variables y muestre el resultado.*/
let m=15;
let n=4;
let p=28;
operMixta= ((m+n+p)/(m*n*p))-(m-n-p);
console.log("Se tienen las tres variables",m,",",n,"y",p,"\nEl resultado de la operacion mixta es:",operMixta);

/*Operaciones con Incremento y Decremento
Declara una variable numerica y asignale un valor inicial. Utiliza el operador de incremento para aumentar el valor de la variable en 1. Luego utiliza el operador de dedcremento para disminuir el valor de la variable en 1. Muestra el valor final de la variable despues de cada operacion.*/
var variable=100;
incremento=++variable;
decremento=--variable;
console.log("La variable inicial es:",variable,"\nEl incremento en una unidad es",incremento,"\nEl decremento en una unidad es:",decremento);

/*Operaciones con Modulo:
Crea dos variables numericas y asignar valores.
Realiza la operacion de modulo (resto de la disvions,%) entre estas dos variables y muestra el resultad*/
let numb1=30;
let numb2=15;
resto=30%15;
console.log("Las dos variables son",numb1,"y",numb2,"\nSe obtuvo el resto:",resto);
