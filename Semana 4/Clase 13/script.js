/*
LOCALSTORAGE
Caracterosticas:
1. Almacena datos como pares clave-valor
2. Los datos persisten incluso después de cerrar el navegador
3. Límite de almacenamiento de aproximadamente 5MB por dominio
4. Solo puede almacenar strings (para objetos hay que convertirlos a JSON)
    parseInt
    parseFloat
    JSON.stringify(objeto) -> convierte un objeto a cadena
    JSON.parce(objetoGuardado) -> convierte de cadena a objeto
*/

//Guardar datos setItem(nombre, valor)
localStorage.setItem("tema", "oscuro");

//Obtener datos getItem(nombre)
if(localStorage.getItem("tema")){
    document.body.className = ""; //borrar clases de un elemento
    document.body.classList.add(localStorage.getItem("tema"));
}else{
    console.log("no existe tema");
}

//Eliminar datos removeItem(nombre) o clear()
/*localStorage.clear();
localStorage.removeItem("tema");*/

/*let usuario = {
    nombre : "Samantha",
    edad : "edad"
}*/
let usuarioLocalstorage = {};

if (localStorage.getItem("usuario")){
    usuarioLocalstorage = JSON.parse(localStorage.getItem("usuario"));
    console.log(usuarioLocalstorage);
    document.body.innerHTML += `<h2> ${usuarioLocalstorage.nombre}</h2>`;

}else{
    console.log("No existe el usuario");
    localStorage.setItem("usuario", JSON.stringify(usuario));
}