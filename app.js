// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let cantidadAmigos = 1 
let amigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function agregarAmigo(){
    const inputAmigo =(document.getElementById ('amigo').value);   
    const nuevoAmigo = inputAmigo.trim();

    console.log(cantidadAmigos)

    if (nuevoAmigo === "") {
          asignarTextoElemento ('h2','Agrega un nombre válido')
         } else if 
            (amigos.includes(nuevoAmigo)) {
            alert(`El amigo ${nuevoAmigo} ya está incluido`)
         }
         else {
            amigos.push(nuevoAmigo);
            asignarTextoElemento ('h2',`Agregaste ${cantidadAmigos} ${(cantidadAmigos ===1)? 'amigo':'amigos'}, ¡Será un gran Challenge!`)
            cantidadAmigos++; 
        }
         limpiarCaja();
         console.log(nuevoAmigo);
    return;
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';

}




asignarTextoElemento('h1','Challenge del amigo secreto');
asignarTextoElemento('h2','Digite el nombre de sus reales');