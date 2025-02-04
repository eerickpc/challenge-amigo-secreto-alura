// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTexto(id, texto){
    let cambios = document.getElementById(id); //cambiar el texto de elementos
    cambios.innerHTML = texto;
}

function agregarAmigo(){
    let amigoIng = document.getElementById("amigo").value
    if (amigoIng){ //verificar que tenga algo la caja
        if(/^([a-zA-ZñÑáéíóúÁÉÍÓÚäÄËëÏïöÖü])+$/i.test(amigoIng)){ //Esta linea verifica que el texto tenga nada mas letras de la "a" a la "z".
            let isDup = duplicado();
            if (isDup==false    ){
                amigos.push(amigoIng);
                console.log(amigos);
                mostrarAmigos();
                limpiarTexto();
            }
        } else{
            alert("El nombre ingresado solo puede contener letras!");
        }
    } else{
        alert("No se pudo obtener ningun amigo, asegurate de que hayas ingresado algo.");
    }
}

function mostrarAmigos(){  // imprimir amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(amigo){ //foreach recorre cada posicion del arreglo y crea una funcion, la cual por cada elemento, crea un "li" y le asigna el texto
        let li = document.createElement("li");
        li.textContent = amigo; //asignar texto al li
        lista.appendChild(li); //agregar el li al ul
    });
}

function sortearAmigo(){ // medir la longitud del arreglo y generar un numero aleatorio con este mismo.
    if (amigos.length==0){
        alert("No has ingresado ningún amigo todavía.");
    } else{
        let totLista = amigos.length;
        let ganador = Math.floor(Math.random()*totLista);
        console.log(ganador);
        asignarTexto("resultado", amigos[ganador]);    
    }

}

function limpiarTexto(){ //vaciar el input.
    document.getElementById("amigo").value = '';
}

function duplicado(){
    let isDup = false;
    amigos.forEach(function(verificar){
        let valorInp = document.getElementById("amigo").value
        if (verificar==valorInp){
            alert("Ya has ingresado a esta persona");
            isDup = true;
        }
    });
    return isDup;
}