//CONDICIONALES

/* IF, ELSE, ELSE IF
if (condición) {
    --code to run if condition is true 
} else if (condition){
    --code to run if condition is true 
}else {
    --run some other code instead 
}
*/

/*Ejemplo con IF 
    Verificar si un número es positivo.
*/
let num = prompt("Ingrese un número");

if (num>=0){
    console.log("El numero es positivo")
}

console.log("Ya pasamos la condicional");

/*Ejemplo con IF, ELSE
    Verificar si un número es par o impar.
*/

if(num%2 == 0){
    console.log("El numero es PAR");
}else {
    console.log("El numero es IMPAR");
}

console.log("Ya pasamos la segunda condicional");

/*Ejemplo con IF, ELSE IF, ELSE
    Clasificar una temperatura.
*/

let temp = prompt("Ingrese la temperatura del clima actual: ");

//frio
if(temp<=10){
    console.log("Esta haciendo frio");
} else if (temp>10 && temp<=25){ // Clima agradable
    console.log("El clima es agradable");
} else if (temp>25){
    console.log("Esta haciendo calor");
}

console.log("Ya pasamos la tercera condicional");

/* SWITCH
switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
*/

/* Ejemplo de switch
    Evaluación de notas
    nota es mayor que 8.5 -> Excelente
    nota esta entre 6 y 8.5 -> Aprobado
    nota igual a 6 -> Obtuviste el puntaje minimo para pasar
    nota es menor que 6 -> Reprobado
*/

let nota = prompt("Ingresa la nota de 1 al 10: ");

switch (true){
    case (nota>=8.5 && nota<=10):
        console.log("Excelente");
        break;
    case (nota>6 && nota<8.5):
        console.log('Aprobado');
        break;
    case (nota == 6):
        console.log("Obtuviste el puntaje minimo para pasar");
        break;
    case (nota<6 && nota>=0):
        console.log("Reprobado");
        break;
    default:
        console.log("La nota es inválida");
}

//menu
let prueba = prompt("Medios de transportes disponibles: \n1.Taxi\n2.Bus\n3.Avion\n4.Uber \n¿En que vas a viajar hoy?");

switch(Number(prueba)){
    case 1:
        console.log("Vas a viajar en un taxi");
        break;
    case 2:
        console.log("Vas a utilizar un medio de transporte publico");
        break;
    case 3:
        console.log("Vas de viaje");
        break;
    case 4:
        console.log("Puedes utilizar inDrive");
        break;
    default:
        alert("Opción inválida");
        break;
}

