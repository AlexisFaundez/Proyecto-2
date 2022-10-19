const escribirObjeto = document.getElementById("escribirObjeto")
const listaObjetos = document.getElementById("listaObjetos")

let arrayObjetos = [];




const CrearItem = (objeto) => {
    let item = {
        objeto: objeto,
        estado: false
    }

arrayObjetos.push(item);

return(item)
}

let comida = CrearItem("Manzana");
let fruta = CrearItem("Pera")

console.log(comida)

console.log(arrayObjetos)