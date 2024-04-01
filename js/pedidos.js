window.onload = function(){
    fetch("../API/pedidos.php")
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
                importado.querySelector(".fecha").textContent = datos[i].fecha;
                importado.querySelector(".tipo").textContent = datos[i].tipo;
                importado.querySelector(".valor").textContent = datos[i].valor;
                importado.querySelector(".pesoenkg").textContent = datos[i].pesoenkg;
                importado.querySelector(".destino").textContent = datos[i].destino;
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
            console.log("Insertamos un nuevo pedido en la tabla");
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
            texto.innerHTML = "Fecha";
            contenedor.appendChild(texto);

                let fecha = document.createElement("input");
                contenedor.appendChild(fecha);
                
            texto = document.createElement("p");
            texto.innerHTML = "Tipo";
            contenedor.appendChild(texto);

                let tipo = document.createElement("input");
                tipo.setAttribute("type", "text");
                contenedor.appendChild(tipo);
                
            texto = document.createElement("p");
            texto.innerHTML = "Valor";
            contenedor.appendChild(texto);

                let valor = document.createElement("input");
                valor.setAttribute("type", "text");
                contenedor.appendChild(valor);
            
            texto = document.createElement("p");
            texto.innerHTML = "Peso";
            contenedor.appendChild(texto);

                let pesoenkg = document.createElement("input");
                pesoenkg.setAttribute("type", "text");
                contenedor.appendChild(pesoenkg);
            
            texto = document.createElement("p");
            texto.innerHTML = "Destino";
            contenedor.appendChild(texto);

                let destino = document.createElement("input");
                destino.setAttribute("type", "text");
                contenedor.appendChild(destino);

            let boton = document.createElement("button");
            boton.setAttribute("value", "Enviar");
            contenedor.appendChild(boton);
            boton.innerHTML = "Enviar";
            boton.onclick = function() {
                console.log("Creamos un nuevo pedido");
                fetch("../API/nuevopedido.php?fecha="+fecha.value+"&tipo="+
                tipo.value+"&valor="+valor.value+"&pesoKG="+pesoenkg.value+"&destino="+destino.value)
                fetch("../API/pedidos.php")
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
                            importado.querySelector(".fecha").textContent = datos[i].fecha;
                            importado.querySelector(".tipo").textContent = datos[i].tipo;
                            importado.querySelector(".valor").textContent = datos[i].valor;
                            importado.querySelector(".pesoenkg").textContent = datos[i].pesoenkg;
                            importado.querySelector(".destino").textContent = datos[i].destino;
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