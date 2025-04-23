/*
 addEventListener
 removeEventListener
*/

document.getElementById("satisfaccion").addEventListener('input', function(){
   document.getElementById('valorSatisfaccion').innerHTML = this.value;
})

document.getElementById("miFormulario").addEventListener('submit', function(e){
    e.preventDefault();
    
    //validar, obtener, mostrar
    console.log(obtenerValoresFormulario());
})


function obtenerValoresFormulario(){
    let form = document.getElementById("miFormulario");
    let formData = {};

    formData.nombre = form.nombre.value;
    formData.email = form.email.value;
    formData.password = form.password.value;
    formData.edad = form.edad.value;
    formData.fechaNacimiento = form.fechaNacimiento.value;
    formData.pais = form.pais.value;

    //Radio button
    let RadioButtons = document.querySelectorAll('input[name="genero"]');
    console.log(RadioButtons);

    RadioButtons.forEach(function(genero){
        if(genero.checked){
            formData.genero = genero.value;
        }else{
            genero.hidden = true;
        }
    })
    
    formData.intereses = [];
    //Checkboxes
    document.querySelectorAll('input[name="intereses"]').forEach(function (interes){
        if (interes.checked){
            formData.intereses.push(interes.value);
        }
    });

    formData.comentarios = form.comentarios.value;
    
    // Obtener archivo (solo el nombre)
    formData.foto = form.foto.files[0]?.name || '';
    
    formData.satisfaccion = form.satisfaccion.value;
    formData.colorFavorito = form.colorFavorito.value;
    
    return formData;
}
