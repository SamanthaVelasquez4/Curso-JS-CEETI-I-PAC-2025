//BUCLES

/* WHILE - mientras
while (condition) {
  // code to run

  final-expression
}

Pide al usuario un número N y usa while para calcular 
la suma de los números del 1 hasta N.
1
cont = 1
suma = 0

suma = suma + cont
suma = 0 + 1 = 1

suma = 1
cont = 2

2
suma = 1 + 2 = 3

suma = 3
cont = 3

1+2+3+4+5+6+7+8+9+10
3 +3+4+5+6+7+8+9+10
6+4+5+6+7+8+9+10
*/

/*let n = parseInt(prompt("Ingrese un numero: "));
let suma = 0;
let cont = 1;

if(n <0 ){
    console.log("No se puede realizar la suma");
}else{
    while(cont <= n){
        suma = suma + cont; 
        console.log("Suma : "+suma);
        cont ++;
        console.log("cont: " + cont);
    } 
    console.log(suma);
}*/

/* DO... WHILE -  Hacer mientras
do {
// code to run

  final-expression
} while (condition)

Solicitar un número mayor que 0
*/
/*let n;
let suma = 0;
let cont = 1;

do{
    n = prompt("Ingrese un numero mayor que 0: ");
}while (n<=0);

while(cont <= n){
    suma = suma + cont; 
    //console.log("Suma : "+suma);
    cont ++;
    //console.log("cont: " + cont);
} 
console.log(suma);

n = prompt("Ingrese un numero mayor que 0: ");*/
/*FOR
for (initializer; condition; final-expression) {
  // code to run
}

Contador del 1 al 10
*/

for (let i=0; i<=20; i=i+2){
    console.log(i);
}

/* FOR... OF
for (const item of array) {
  // code to run
}
*/
