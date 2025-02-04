// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTexto(id, texto){
    let cambios = document.getElementById(id); //cambiar el texto de elementos
    cambios.innerHTML = texto;
}

function agregarAmigo(){
    let amigoIng = document.getElementById("amigo").value
    if (amigoIng){ //verificar que tenga algo la caja
        amigos.push(amigoIng);
        console.log(amigos);
        mostrarAmigos();
        limpiarTexto();
    } else{
        alert("No se pudo obtener ningun amigo, asegurate de que hayas ingresado algo.");
    }
}

function mostrarAmigos(){  // imprimir amigos
    asignarTexto("listaAmigos", amigos);
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
