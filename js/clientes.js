window.onload = function(){
    fetch("../API/clientes.php")
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        let plantilla = document.getElementById("plantillaclientes");
        let seccion = document.querySelector("section");
        if (seccion) {
            for(let i = 0; i<datos.length; i++){
                let importado = document.importNode(plantilla.content, true);
                importado.querySelector("h6").textContent = datos[i].nombre;
                importado.querySelector("h7").textContent = datos[i].cif;
                importado.querySelector(".direccion").textContent = datos[i].direccion;
                importado.querySelector(".cp").textContent = datos[i].cp;
                importado.querySelector(".horario").textContent = datos[i].horario;
                importado.querySelector(".telefono").textContent = datos[i].telefono;
                seccion.appendChild(importado);
            }

        } else {
            console.error("El elemento <section> no se encontró en el DOM.");
        }

    })

    document.getElementById("iniciarsesion").onclick = function(){
        console.log("Vamos a iniciar sesión");
        document.getElementById("modal").style.display = "block";
        document.getElementById("contenedormodal").innerHTML = "";
        let plantilla = document.getElementById("plantillainiciosesion");
        let importado = document.importNode(plantilla.content, true);
        document.getElementById("contenedormodal").appendChild(importado);

        document.getElementById("enviainiciosesion").onclick = function() {
            console.log("Iniciamos sesion");
            let nombre = document.getElementById("usuario").value;
            let contrasena = document.getElementById("contrasena").value;
            console.log("Envio:" + nombre + " - " + contrasena);
            fetch("../API/login_admin.php?usuario="+nombre+"&contrasena="+contrasena)
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                    console.log(datos);
                    if(datos.llave == "si"){
                        document.getElementById("modal").style.display = "none";
                        document.cookie = "usuario="+nombre;
                    }

                    window.location = window.location;
                })
        }
    }
    
    function valorCookie(identificador){
        let todasLasCookies = document.cookie;
        let partido = todasLasCookies.split(";");
        for(let i=0; i<partido.length; i++){
            let partido2 = partido[i].split("=");
            if(partido2[0] == identificador){
                return partido2[1];
            }
        }
    }

    console.log(valorCookie("usuario"));
    if(valorCookie("usuario") != "" && valorCookie("usuario") != undefined){
        console.log("El usuario existe");
        let boton = document.getElementById("iniciarsesion");

        boton.innerHTML = "Nuevo elemento";
        boton.classList.add("botonelemento");
        boton.onclick = null;
        boton.setAttribute("id", "nuevoelemento");
        boton = document.getElementById("nuevoelemento");
        boton.onclick = function(){
            console.log("Insertamos un nuevo cliente en la tabla");
            let seccion = document.querySelector("section");
            seccion.innerHTML = "";

            let contenedor = document.createElement("div");
            contenedor.classList.add("contenedorinterior");

            let texto = document.createElement("p");
            
            texto.innerHTML = "Introduce el cliente";
            contenedor.appendChild(texto);

                let nombre = document.createElement("input");
                nombre.setAttribute("type", "text");
                contenedor.appendChild(nombre);
                
            texto = document.createElement("p");
            texto.innerHTML = "CIF";
            contenedor.appendChild(texto);

                let cif = document.createElement("input");
                contenedor.appendChild(cif);
                
            texto = document.createElement("p");
            texto.innerHTML = "Direccion";
            contenedor.appendChild(texto);

                let direccion = document.createElement("input");
                direccion.setAttribute("type", "text");
                contenedor.appendChild(direccion);
                
            texto = document.createElement("p");
            texto.innerHTML = "CP";
            contenedor.appendChild(texto);

                let cp = document.createElement("input");
                cp.setAttribute("type", "text");
                contenedor.appendChild(cp);
            
            texto = document.createElement("p");
            texto.innerHTML = "Horario";
            contenedor.appendChild(texto);

                let horario = document.createElement("input");
                horario.setAttribute("type", "text");
                contenedor.appendChild(horario);
            
            texto = document.createElement("p");
            texto.innerHTML = "Telefono";
            contenedor.appendChild(texto);

                let telefono = document.createElement("input");
                horario.setAttribute("type", "text");
                contenedor.appendChild(telefono);

            let boton = document.createElement("button");
            boton.setAttribute("value", "Enviar");
            contenedor.appendChild(boton);
            boton.innerHTML = "Enviar";
            boton.onclick = function() {
                console.log("Creamos un nuevo cliente");
                fetch("../API/nuevocliente.php?nombre="+nombre.value+"&cif="+cif.value+"&direccion="+
                direccion.value+"&cp="+cp.value+"&horario="+horario.value+"&telefono="+telefono.value)
                fetch("../API/clientes.php")
                .then(function(response){
                    return response.json();
                })
                .then(function(datos){
                    let plantilla = document.getElementById("plantillaclientes");
                    let seccion = document.querySelector("section");
                    if (seccion) {
                        for(let i = 0; i<datos.length; i++){
                            let importado = document.importNode(plantilla.content, true);
                            importado.querySelector("h6").textContent = datos[i].nombre;
                            importado.querySelector("h7").textContent = datos[i].cif;
                            importado.querySelector(".direccion").textContent = datos[i].direccion;
                            importado.querySelector(".cp").textContent = datos[i].cp;
                            importado.querySelector(".horario").textContent = datos[i].horario;
                            importado.querySelector(".telefono").textContent = datos[i].telefono;
                            seccion.appendChild(importado);
                        }
                    } else {
                        console.error("El elemento <section> no se encontró en el DOM.");
                    }

                })

                recargarPagina();
            }

            seccion.appendChild(contenedor);
        }
    }
}

function recargarPagina() {
    location.reload();
}