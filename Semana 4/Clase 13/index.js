function actualizar(){
    //verificar el localstorage
    if(localStorage.getItem("usuario")){
        //ocultar botenes
        document.getElementById("nombre").hidden = true;
        document.getElementById("edad").hidden = true;

        //obtener usuario
        let usuarioLocalStorage = JSON.parse(localStorage.getItem("usuario"));
        if(document.getElementById("tema").value=!""){
            usuarioLocalStorage.tema = document.getElementById("tema").value;
        }

        //actualizaciones
        document.body.innerHTML += `<h2> ${usuarioLocalStorage.nombre}</h2>`;
        document.body.className = "";
        document.body.classList.add(usuarioLocalStorage.tema);

        //guardar usuario
        localStorage.setItem("usuario", JSON.stringify(usuarioLocalStorage));

        
    }else{
        if (document.getElementById("nombre").value!= "" && document.getElementById("edad").value!="" && document.getElementById("tema").value!=""){
            let usuario = {
                nombre : document.getElementById("nombre").value,
                edad : document.getElementById("edad").value,
                tema : document.getElementById("tema").value
            }
            localStorage.setItem("usuario", JSON.stringify(usuario));

            //actualizaciones
            document.body.innerHTML += `<h2> ${usuario.nombre}</h2>`;
            document.body.className = "";
            document.body.classList.add(usuario.tema);
        }else{
            alert("Llene los campos vacios");
        }
    }
}

document.getElementById("actualizar").addEventListener("click", actualizar);

    
