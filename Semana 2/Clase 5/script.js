//FUNCIONES

/*
Las funciones pueden ser:
-Funciones sin parametros y sin retorno
-Funciones sin parametros y con retorno
-Funciones con parametros y sin retorno
-Funciones con parametros y con retorno 

Funciones declaradas
function nombreFuncion(parametros, separados, por, comas) {
  return variable/expresion;
} 
Ejemplo: Cree una función que reciba el nombre de una persona y
salude
*/
let nombre = "Maria";

console.log(saludar(nombre));

//con parametro y retorno
function saludar(nombre){
    return "Hola "+ nombre + " esta es una funcion con parametro y retorno";
}

let resultado = saludar(nombre);
console.log(resultado);

//sin parametro y con retorno
function saludar2(){
    let nombre2 = "Jose";
    return "Hola "+ nombre2 + " esta es una funcion sin parametro y con retorno";
}

let resultado2 = saludar2();
console.log(resultado2);

//sin parametro y sin retorno
function saludar3(){
    let nombre3 = "Pedro";
    console.log("Hola "+ nombre3 + " esta es una funcion sin parametros y sin retorno");
}

saludar3();

/*
Funciones expresadas
const nombreFuncion = function(parametros) {
  return variable/expresion;
};
*/

//con parametro y sin retorno
const despedir = function(nombre){
    console.log("Hola "+nombre+" esta es una funcion expresada con parametros y sin retorno");
}

despedir(nombre);

/*
Funciones flecha
const nombreVariable = (parametros) => expresionRetorno;
*/
const sumar = (a,b) => a+b;
const resta = (a,b) => a-b;

console.log(sumar(7,10));

let resultadoResta = resta(80,6);
console.log(resultadoResta);

/*
Funciones autoejecutables
(function() {
  instrucciones;
})();
*/
(function() {
    console.log("Se ejecuta automaticamente");
})();
