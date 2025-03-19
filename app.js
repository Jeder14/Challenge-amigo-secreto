// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creación de la variable tipo arreglo/lista/vector "amigos"
let amigos = [];
let listaNombreSorteado = [];
let numeroMaximoSorteos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML){
        elementoHTML.innerHTML=texto;
    }
}
function agregarAmigo(){
    const inputAmigo =(document.getElementById ('amigo').value);   
    const nuevoAmigo = inputAmigo.trim();

    if (nuevoAmigo === "") {
        asignarTextoElemento ('h2','Agrega un nombre válido')
    } else if (amigos.includes(nuevoAmigo)) {
        alert(`El amigo ${nuevoAmigo} ya está incluido`);
    } else {
        //agregar elementos al final de la lista
         amigos.push(nuevoAmigo);
         asignarTextoElemento ('h2',`Agregaste ${amigos.length} ${(nuevoAmigo.length ===1)? 'amigo':'amigos'}, ¡Será un gran Challenge!`)
         console.log(nuevoAmigo);
         console.log(amigos);
         actualizarLista();
         numeroMaximoSorteos = amigos.length;
    }
    limpiarCaja();
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';

}

// Utilizando el contenedor listaAmigos

function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

//Agregando nombres a la lista
    for(let i= 0; i <amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

asignarTextoElemento('h1','Challenge del amigo secreto');
asignarTextoElemento('h2','Digite el nombre de sus reales');