
let escribirObjeto = document.getElementById("escribirObjeto");
let addItemBtn = document.getElementById("addItemBtn");


addItemBtn.addEventListener("click", (e) => {

    const escribirObjetoValue = escribirObjeto.value;

    if (escribirObjetoValue) {
        let localObject = localStorage.getItem("localUser")
        if (localObject == null) {
            objeto = [];
        }
        else {
            objeto = JSON.parse(localObject)
        }

        objeto.push({
            "objeto": escribirObjetoValue
        });
        localStorage.setItem("localUser", JSON.stringify(objeto))
        escribirObjeto.value = '';
    }
mostrarObjeto();
})

function mostrarObjeto() {
    let localObject = localStorage.getItem("localUser")
    if (localObject == null){
        objeto = [];
    } else {
        localObject = JSON.parse(localObject)
    }
    let html = "";
    let listaObjetos = document.getElementById("listaObjetos");
    objeto.forEach((item, index) => {
        html += `<tr>
        <th scope="row">${index+1}</th>

        <td><b>${item.objeto}</b></td>

        <td><button type="button" onclick="editUser(${index})" class="btn btn-primary float-end"><i class="fa fa-edit"></i>Editar</button></td>
        
        <td><button type="button" onclick="borrarObjeto(${index})" class="btn btn-danger float-end"><i class="fa fa-trash"></i>Eliminar</button></td>
    </tr>`;
    });
    listaObjetos.innerHTML = html;
}

function borrarObjeto(index){
    let localObject = localStorage.getItem("localUser")
    let userObject = JSON.parse(localObject)
    userObject.splice(index, 1);
    localStorage.setItem("localUser", JSON.stringify(userObject));
    mostrarObjeto()
}
