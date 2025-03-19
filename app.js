//Creación de la variable tipo arreglo/lista/vector "amigos"
let amigos = [];
//Creación de la varible que permitirá limitar los intentos
let listaNombreSorteado = [];
let numeroMaximoSorteos = 0;

//Cambio en h1 y h2
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML){
        elementoHTML.innerHTML=texto;
    }
}

//Funcion agregar amigo, alerta de espacio vacío y repetición de nombre
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
        asignarTextoElemento ('h2',`Agregaste ${amigos.length} ${(amigos.length ===1)? 'amigo':'amigos'}, ¡Será un gran Challenge!`)
        console.log(nuevoAmigo);
        console.log(amigos);
        actualizarLista();
        numeroMaximoSorteos = amigos.length;
    }
    limpiarCaja();
}

//Limpieza de caja para facilitar la entrada de datos
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

//Fase de Sorteo 
function sortearAmigo(){
    //Se muestra el sorteo en la pagina
    const resultadoSorteo = document.getElementById('resultado');
    
     //Si hay menos de 2 amigos
    if (amigos.length < 2){
         asignarTextoElemento ('h2', 'Hay menos de 2 amigos, no puede realizarse el sorteo')
         return;
     }
     //Si todos los amigos ya fueron sorteados
     if (listaNombreSorteado.length === numeroMaximoSorteos) {
         asignarTextoElemento('h2', 'Todos los amigos ya fueron sorteados');
         return;
     } 
    
     //Condición que limita la elección de un amigo sorteado
     let amigoSorteado;
     do {
         const indiceAleatorio = Math.floor(Math.random() * amigos.length);
         amigoSorteado = amigos[indiceAleatorio];
     } while (listaNombreSorteado.includes(amigoSorteado));
     listaNombreSorteado.push(amigoSorteado);
     
         // Mostrando el resultado 
         const li = document.createElement('li');
         li.textContent = `Amigo sorteado: ${amigoSorteado}`;
         resultadoSorteo.appendChild(li);
 
         console.log(resultadoSorteo)
         console.log(listaNombreSorteado)
 }
 //Muestra inicial de h1 y h2
asignarTextoElemento('h1','Challenge del amigo secreto');
asignarTextoElemento('h2','Digite el nombre de sus reales');