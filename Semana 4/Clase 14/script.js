//FETCH -> GET
/*fetch('https://jsonplaceholder.typicode.com/albums')
  .then(respuesta => respuesta.json())
  .then(albumes => console.log(albumes));*/

// AYNC y AWAIT
async function main() {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  const albums = await response.json();
  //console.log(albums);

  //renderizar
  renderizar(albums);
}

function renderizar(lista){
  let contenedor = document.getElementById("albums-list");
  let innerHtml = "";

  lista.forEach(album => {
    innerHtml += `<div class="album-item" id="${album.id}">
                    <div class="album-title">${album.title}</div>
                    <div class="album-meta">ID: ${album.id} | UserID: ${album.userId}</div>
                  </div>`;
  });

  contenedor.innerHTML = innerHtml;
}

main();
