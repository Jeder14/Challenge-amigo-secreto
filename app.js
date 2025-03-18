// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}
function agregarAmigo(){
    let nuevoAmigo =(document.getElementById ('amigo').value);
        
    if (nuevoAmigo === "") {
          asignarTextoElemento ('h2','Agrega un nombre válido')
         } else {
            asignarTextoElemento ('h2','¡Será un gran Challenge!')
         }
         console.log(nuevoAmigo);
    return;
}


asignarTextoElemento('h1','Challenge del amigo secreto');
asignarTextoElemento('h2','Digite el nombre de sus reales');