//EJERCICIO 1
document.getElementById("addItemBtn").addEventListener('click', function(){

    //obtener value de input
    let text = document.getElementById('newItemText').value;

    //obtener padre
    let padre = document.querySelector("#elementList");

    //validar que no este vacio el input
    if(text != ''){
        //crear elemnto
        let elemento = document.createElement('div');
        elemento.classList.add("item"); //agregar una clase
        elemento.textContent = text;

        padre.appendChild(elemento);

        //limpiar
        document.getElementById('newItemText').value = "";
    }
})

//EJERCICIO 2
document.getElementById("removableList").addEventListener('click', function(e){
    console.log(e);
    this.removeChild(e.target);
})

//EJERCICIO 3

//agregar
document.getElementById("addDynamicItem").addEventListener('click', function(){

    //obtener value de input
    let text = document.getElementById('dynamicItemText').value;

    //obtener padre
    let padre = document.querySelector("#dynamicList");

    //validar que no este vacio el input
    if(text != ''){
        //crear elemnto
        let elemento = document.createElement('li');
        elemento.textContent = text;

        padre.appendChild(elemento);

        //limpiar
        document.getElementById('dynamicItemText').value = "";
    }
})

//Eliminar ultimo
document.getElementById("removeLastItem").addEventListener("click", function(){
    let padre = document.querySelector("#dynamicList");
    padre.removeChild(padre.lastChild);
})

//limpiar todo
document.getElementById("clearAllItems").addEventListener("click", function(){
    let padre = document.querySelector("#dynamicList");
    while(padre.firstChild){
        padre.removeChild(padre.lastChild);
    }
})