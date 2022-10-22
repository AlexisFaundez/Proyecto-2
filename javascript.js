let escribirObjeto = document.getElementById("escribirObjeto");
let addItemBtn = document.getElementById("addItemBtn");


addItemBtn.addEventListener("click", (e) => {

    const escribirObjetoValue = escribirObjeto.value;

    if (escribirObjetoValue) {
        let localObject = localStorage.getItem("savedItem")
        if (localObject == null) {
            objeto = [];
        }
        else {
            objeto = JSON.parse(localObject)
        }

        objeto.push({
            "objeto": escribirObjetoValue
        });
        localStorage.setItem("savedItem", JSON.stringify(objeto))
        escribirObjeto.value = '';
    }
    mostrarObjeto();
})

function mostrarObjeto() {
    let localObject = localStorage.getItem("savedItem")
    if (localObject == null) {
        objeto = [];
    } else {
        objeto = JSON.parse(localObject)
    }
    let objetoagregado = "";
    let listaObjetos = document.getElementById("listaObjetos");
    objeto.forEach((item, index) => {
        objetoagregado += `<tr>
        <th scope="row">${index + 1}</th>

        <td><b>${item.objeto}</b></td>
        <td><input class="form-check-input" type="checkbox"></td>
        <td><button type="button" onclick="editarObjeto(${index})" class="btn btn-primary float-end"><i class="fa fa-edit"></i>Editar</button></td>
        
        <td><button type="button" onclick="borrarObjeto(${index})" class="btn btn-danger float-end"><i class="fa fa-trash"></i>Eliminar</button></td>
    </tr>`;
    });
    listaObjetos.innerHTML = objetoagregado;
}
// borrarObjeto
function borrarObjeto(index) {
    let localObject = localStorage.getItem("savedItem")
    let objeto = JSON.parse(localObject)
    objeto.splice(index, 1);
    localStorage.setItem("savedItem", JSON.stringify(objeto));
    mostrarObjeto();
}


// editarObjeto
function editarObjeto(index) {
    let editarTexto = document.getElementById("objetoGuardado");
    let addItemBtn = document.getElementById("addItemBtn");
    let editItemBtn = document.getElementById("editItemBtn");
    let localObject = localStorage.getItem("savedItem");
    let objeto = JSON.parse(localObject);
    editarTexto.value = index;
    escribirObjeto.value = objeto[index]['objeto'];
    addItemBtn.style.display = "none";
    editItemBtn.style.display= "inline-block"
}
// editItemBtn

let editItemBtn = document.getElementById("editItemBtn");
editItemBtn.addEventListener("click", function (e) {
    let addItemBtn = document.getElementById("addItemBtn");
    let localObject = localStorage.getItem("savedItem")
    let objeto = JSON.parse(localObject);
    let objetoGuardado = document.getElementById("objetoGuardado").value;

    for (keys in objeto[objetoGuardado]) {
        if (keys == 'objeto') {
            objeto[objetoGuardado].objeto = escribirObjeto.value
        }
    }
    editItemBtn.style.display = "none"
    addItemBtn.style.display = "inline-block"
    localStorage.setItem("savedItem", JSON.stringify(objeto))
    escribirObjeto.value = '';
    mostrarObjeto();
})