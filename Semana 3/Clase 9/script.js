/*
 addEventListener
 removeEventListener
*/

document.getElementById("satisfaccion").addEventListener('input', function(){
   document.getElementById('valorSatisfaccion').innerHTML = this.value;
})

document.getElementById("miFormulario").addEventListener('submit', function(e){
    e.preventDefault();
    

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
    
}
