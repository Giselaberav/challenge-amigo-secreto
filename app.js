let ltaAmigos=[];

// Función para agregar un amigo a la lista
// Permite cualquier string, incluso espacios, pero no números
function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.toString().trim(); // Obtener el valor del input
    // Validar que el nombre no contenga números y no sea texto vacío
    if (typeof nombre !== 'string' || /\d/.test(nombre) || nombre === '') {
        alert('El nombre no debe contener números y/o no debe ser texto vacío.');
        return;
    }
    // Validar que el nombre no esté ya en la lista de amigos
    //Todavía falla porque si hay acentos o mayúsculas, no lo detecta
    if (!ltaAmigos.includes(nombre)) {
        ltaAmigos.push(nombre);
    } else {
        alert('El nombre ya está en la lista de amigos.');
        return;
    }
    //testeando salidas
    //console.log('Amigo agregado:', nombre);
    //console.log('Lista de amigos:', ltaAmigos);
    actualizarAmigos(ltaAmigos);
    limpiaElemento('amigo'); // Limpiar el input después de agregar
}

// Función para limpiar un elemento HTML
function limpiaElemento(elemento) {
    let elem =document.getElementById(elemento); // Limpiar el input
    elem.value = ''; // Limpiar el valor del input
    elem.innerHTML = ''; // Limpiar el contenido del elemento
}

// Función para actualizar la lista de amigos en el HTML
function actualizarAmigos(amigos) {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizarla   
    asignaTextos('listaAmigos', amigos.map((amigo, index) => `<li data-index="${index}">${amigo}</li>`).join('\n'));
}

// Función para sortear el amigo secreto a partir de la lista de amigos
function sortearAmigo() {
    //console.log('Lista de amigos antes del sorteo:', ltaAmigos);
   // console.log(ltaAmigos.length);
  if (ltaAmigos.length === 0) {
    alert('No hay amigos para sortear');
    return;
  } else {
    let indiceAleatorio = Math.floor(Math.random() * ltaAmigos.length);
    //console.log('Índice aleatorio:', indiceAleatorio);
    let amigoSorteado = ltaAmigos[indiceAleatorio];
    //console.log(`amigo sorteado: ${amigoSorteado}`);

    asignaTextos('resultado', `El amigo secreto sorteado es: <strong><u> ${amigoSorteado}</strong></u>`);
    //console.log('Lista de amigos después del sorteo:', ltaAmigos);
    limpiaElemento('listaAmigos');
  }
  }

  function asignaTextos(elemento, texto) {
     let elemHTML = document.getElementById(elemento);
     elemHTML.innerHTML = '';
     elemHTML.innerHTML = texto;
  }



