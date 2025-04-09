
// 1. Cambiar texto del título
let titulo = document.getElementById('titulo');
titulo.innerHTML = " Cambio de titulo con js";
//titulo.innerText += " Cambio con js";

// 2. Modificar un párrafo
document.querySelector("#parrafo1").textContent = "Hola";

// 3. Cambiar atributo de un enlace
document.querySelector("#enlace").setAttribute('href', 'https://www.canva.com/design/DAGhRStcMHs/WVlrIqakl1k6gt8E60RgFQ/edit?ui=eyJIIjp7IkEiOnRydWV9fQ');

// 4. Agregar un elemento a la lista
document.getElementById("lista").innerHTML += '<li>Item 3</li>';

// 5. Insertar fila en la tabla
document.getElementById("tabla").innerHTML += "<tr><td>Ana</td><td>25</td><td>Mujer</td></tr>";

// 6. Obtener input 


// 7. Cambiar estilo del footer
document.getElementById("pie").style.backgroundColor = "blue";
document.getElementById("pie").style.color = "red";

