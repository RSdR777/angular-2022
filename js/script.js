
// variable global ('mala palabra')
var a = "a";

// variable que permite hacer cambios a1
let a1 = "a";

// final (constante, no cambia)
const a2="a";

// mostrar valores
console.log(a);
console.log(a1);
console.log(a2);

a = "otro valor";

/*operadores
aritméticos
+,-,+,%

lógicos
|| && ! ===

relacionales
<,>;>=;<= : valor boolean
*/

// relacionales
const x = 10;
const y = 20;
const z = x < y; // true 

// lógicos
/* TABLA DE VERDAD DEL || 
A       | B       | A || B   |   A && B |   !A |    !B     | xor
-----------------------------------------------------------------
true    true        true        true        false   false   false
true    false       true        false       false   true    true
false   true        true        false       true    false   true
false   false       false       false       true    true    false
-----------------------------------------------------------------
*/
const d = x===5 || y===5;
console.log(d);

//aritméticos
const esPar = a % 2; // Si el resto da cero es par '%' devuelve 0 o 1

// saber el tipo de una variable
let tipoDeA = typeof a;
console.log(tipoDeA);
a=10;
tipoDeA = typeof a;
console.log(tipoDeA);

const esAlumno = true;
console.log(typeof esAlumno);

let esprofesor; //undefined
console.log(esprofesor);

/*funciones*/ 
function sumar () {
    console.log('sumar');
}

sumar1 = function() {
    console.log('sumar1');
}

// arrow function --> permiten hacer 
// se usan en 'react' sobre todo y en' angular'
sumar2 = () => {
    console.log('sumar2');
}

let valor = sumar();
valor = sunar1();
valor = sumar2; // No estoy ejecutando la función, le asigno el objeto función

console.log(typeof valor);

// Para ejecutar la función.
valor();

// Funciones como parámetros
function xx() {
    console.log('x');
}

function yy(f) {
    debugger; //breakpoint por código
    console.log('y');
    if (f)
        f();
}

//const vy = yy(sumar2);

