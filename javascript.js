mostrarItem();

let addItemInput = document.getElementById("writeItem")
let addItemBtn = document.getElementById("addItemBtn")

addItemBtn.addEventListener("click", function(){

const writeItemValue = writeItemValue.value;

if(writeItemValue){
    let webUser = localStorage.getItem("localItem");

    if (webUser == null){
        userObject = [];
    }
    else{
        userObject = JSON.parse(webUser);
    }
    userObject.push({
            
        'item':addUserInputValue
    });
    localStorage.setItem("localItem", JSON.stringify(userObject));
        addUserInput.value = '';
    }
mostrarItem();
})

function mostrarItem(){
    let webUser = localStorage.getItem("localItem");
    if(webUser == null){
        userObject = [];
    }
    else{
        userObject = JSON.parse(webUser);
    }
    let html = '';
    let addedUserList = document.getElementById("addedItemList");
    userObject.forEach((item, index) => {
        html += `<tr>
        <th scope="row">${index+1}</th>

        <td>${item.user}</td>

        <td><button type="button" onclick="editUser(${index})" class="text-primary"><i class="fa fa-edit"></i>Editar</button></td>
        
        <td><button type="button" onclick="deleteUser(${index})" class="text-danger"><i class="fa fa-trash"></i>Eliminar</button></td>
    </tr>`;
    addedUserList.innerHTML = html;
});
}