
let inputForm = document.getElementById("user-form")
console.log(inputForm)

let inputForm2 = document.getElementById("email-form")
console.log(inputForm2)

let btnRegistro = document.getElementById("registro")
console.log(btnRegistro)

let divVacio = document.getElementById("fila-vacia")
console.log(divVacio)

btnRegistro.addEventListener("click", mostrarDatos)
function mostrarDatos(){
  divVacio.innerText = inputForm.value
}



const productos = [
  {
    id: 1,
    nombre: "alimentoAperros",
    precio: 5000,
    peso: 5,
    img: (src = "./fotos/alimentoPerros1.jpg"),
  },
  {
    id: 2,
    nombre: "alimentoBperros",
    peso: 10,
    precio: 8000,
    img: (src = "./fotos/alimentoPerros1.jpg"),
  },
  {
    id: 4,
    nombre: "alimentoAgatos",
    peso: 1,
    precio: 1000,
    img: (src = "./fotos/alimentoGatos1.jpg"),
  },
  {
    id: 5,
    nombre: "alimentoBgatos",
    peso: 3,
    precio: 1500,
    img: (src = "./fotos/alimentoGatos1.jpg"),
  },
];

let shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("btn-carrito");
console.log(verCarrito);
const contenidoCarrito = document.getElementById("contentCarrito");
const generalCarrito = document.getElementById("generalCarrito");
const spanTotal = document.getElementById("total");

console.log(shopContent);

productos.forEach((product) => {
  let content = document.createElement("div");
  content.className = "card";
  content.style.width = "18rem";
  content.innerHTML = `
  
      <img src="${product.img}"/>
      <h2>${product.id}</h2>
      <h3>${product.nombre}</h3>
      <h4>${product.peso}</h4>
      <p>${product.precio}</p>
  `;


  shopContent.append(content);

  let comprar = document.createElement("button");
  comprar.innerText = "comprar";
  comprar.className = "btn btn-primary";
  content.append(comprar);

  

  comprar.addEventListener("click", () => {
    carrito.push(
   {
      id: product.id,
      nombre: product.nombre,
      peso: product.peso,
      precio: product.precio,
      img: product.img,
    });
    console.log(carrito);
  });
});

let carrito = [];

function actualizarCarrito() {
  contenidoCarrito.innerHTML = "";
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "card";
    carritoContent.style.width = "50%";

    carritoContent.innerHTML = `
    <img src="${product.img}"/>
    <h2>${product.id}</h2>
    <h3>${product.nombre}</h3>
    <h4>${product.peso}</h4>
    <p>${product.precio}<p>
    <button class="delete-producto btn btn-danger">Eliminar</button>
    `;
    contenidoCarrito.append(carritoContent);

    let eliminar = carritoContent.querySelector(".delete-producto");
    console.log(eliminar);

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  console.log(total);
  console.log(carrito);
  spanTotal.innerText = total;
}

verCarrito.addEventListener("click", actualizarCarrito);

const eliminarProducto = (id) => {
  console.log("eliminado");
  const foundId = carrito.find((element) => element.id === id);
  console.log(foundId);
  carrito = carrito.filter((carritoId) => {
    return carritoId != foundId;
  });
  actualizarCarrito();
};


const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//for (const producto of productos) {
//  guardarLocal(producto.id, JSON.stringify(productos));
guardarLocal("listaProductos", JSON.stringify(productos));

Swal.fire({
  title: 'Hacé tu compra ahora!',
  text: 'Que necesitás?',
  icon: 'info',
  confirmButtonText: 'Ok'
})

Toastify({
  text: "Aprovechá nuestras ofertas!!!",
  duration: 3000
}).showToast();






//localStorage.setItem('verCarrito','product.precio')
//let mensaje3 = localStorage.getItem('verCarrito')
//console.log(mensaje3)


/*const eventoFuturo = () => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    })
}
console.log(eventoFuturo ())*/

/*const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    if (res=== true) {
      resolve('Promesa resuelta')
    } else {
      reject('Promesa rechazada')
    }
  })
}
console.log(eventoFuturo(true))
console.log(eventoFuturo(false))*/

//const eventoFuturo = res => new Promise((resolve, rejecty)=> {
//  res ? resolve('promesa resuelta res') : rejecty('promesa rechazada res');
//});

//console.log(eventoFuturo(true))
//console.log(eventoFuturo(false))

//eventoFuturo (true)
//.then((response)=> {
//  console.log(response)
//})

//eventoFuturo(false)
//.catch((error)=>{
//  console.log(error)
//})



//eventoFuturo(true)
//.then((response)=>{
//  console.log(response)
//})
//.catch((error)=>{
//  console.log(error)
//})
//.finally(()=>{
//  console.log("Fin del proceso")
//})

//const BD = [
//  {id: 1, nombre:'Producto 1', precio: 1500},
//  {id: 2, nombre:'Producto 2', precio: 2500},
//  {id: 3, nombre:'Producto 3', precio: 3500},
//  {id: 4, nombre:'Producto 4', precio: 4500},
//]

//const pedirProductos = () => {
//  return new Promise((resolve, reject) =>{
//    setTimeout(() => {
//      resolve(BD)
//    }, 3000)
//  })
//}

//let productos8 = []

//const renderProductos = (arr) => {

//  console.log(arr) //funcion que genera la vista de los productos
//}

//pedimos los datos y generamos la vista
//pedirProductos()
//.then((res)=>{
//  productos8 = res
//  renderProductos(productos8)
//})
//.catch(()=>{
//  console.log("Algo malio sal")
//})

//.finally(()=>{
//  console.log("Promesa exitosa")
//})






//Swal.fire('Cualquier tonto puede usar una computadora')

//Swal.fire({
//  title: 'Hecha tu compra!',
//  text: 'Querés hacer otra compra?',
//  icon: 'question',
//  confirmButtonText: 'Ok'
//})

//Swal.fire({
//  title: 'Querés confirmar tu compra?',
//  showDenyButton: true,
//  showCancelButton: true,
//  confirmButtonText: 'Yes',
//  denyButtonText: 'No',
//  customClass: {
//    actions: 'my-actions',
//    cancelButton: 'order-1 right-gap',
//    confirmButton: 'order-2',
//    denyButton: 'order-3',
//  }
//}).then((result) => {
//  if (result.isConfirmed) {
//    Swal.fire('Confirmada tu compra!', '', 'success')
//  } else if (result.isDenied) {
//    Swal.fire('Compra sin confirmar!', '', 'info')
//  }
//})



//Toastify({
//  text: "Compra exitosa!!!",
//  duration: 4000
//}).showToast();


//const DateTime = luxon.DateTime
//console.log(DateTime)
//const dt = DateTime.local()
/*const dt = DateTime.fromObject(
  {
    day: 22,
    hour: 12,
    month: 2
  },
  {
    zone: 'America/Buenos_Aires',
  numberingSystem: 'beng'
  }
)
console.log(dt)
console.log(dt.toString())

const now = DateTime.now()
console.log(now.toString())*/

//console.log(now.year)
//console.log(now.month)
//console.log(now.day)
//console.log("hora: " + now.hour)
//console.log("minutos: " + now.minute)
//console.log("segundos: " + now.second)
//console.log(dt.zoneName)

//now.toLocaleString()
//console.log(now.toLocaleString()) // 8/12/2022
//console.log(now.toLocaleString(DateTime.DATE_FULL)) // 8 de diciembre de 2022
//console.log(now.toLocaleString(DateTime.TIME_SIMPLE)) // 15:02


//setTimeout(()=>{
//  console.log("Proceso Joguar")
//}, 3000)

//Ej para aparecer y desaparecer clase
//const btn = document.querySelector('#boton')
//const popup = document.querySelector('#popup-mensaje')
//btn.addEventListener('click', ()=>{
//  popup.classList.add('btn-danger')
//  setTimeout(()=>{
//    popup.classList.remove('btn-danger')
//  }, 2500)
//})

//for(let letra of "hola"){
//  setTimeout(()=>{
//  console.log(letra)
//}, 2500)
//}

//for(let letra of "Joguar"){
//  setTimeout(()=>{
//  console.log(letra)
//}, 4000)
//}


//setInterval(()=>{
//  console.log("Tic")
//}, 1000)


/*let counter=0
const interval= setInterval(()=>{
  counter++
  console.log("Contador: ", counter)
  if (counter >= 10){
    clearInterval(interval)
    console.log("Se removió el intervalo")
  }
}, 1000)*/





//localStorage

//localStorage.setItem('bienvenida 2022', 'Hola Joguar Local Storage');
//localStorage.setItem('es valido 2022', true);
//localStorage.setItem('un numero 2022', 43555);
//localStorage.setItem('alumnos coder', 'en navegador/sof');

//let mensaje = localStorage.getItem('bienvenida 2022');
//console.log(mensaje);

//let bandera = localStorage.getItem('es valido 2022');
//console.log(bandera);

//let numero = localStorage.getItem('un numero 2022');
//console.log(numero);

//let mensaje2 = localStorage.getItem('alumnos coder');
//console.log(mensaje2)

//sessionStorage

//sessionStorage.setItem('session Storage', 'ESTO ES UNA SESSION');
//sessionStorage.setItem('seleccionados', [1,2,3] );
//sessionStorage.setItem('ES VALIDO', true);
//sessionStorage.setItem('EMAIL', 'jorgegusarruda@gmail.com');

//let lista = sessionStorage.getItem('seleccionados').split(',');
//console.log(typeof lista);

//let bandera2 = (sessionStorage.getItem('ES VALIDO') == 'true');
//console.log(bandera2)


//recorriendo el storage

//for (let i = 0; i < localStorage.length; i++){
//  let clave = localStorage.key(i);
//  console.log("Clave localStorage: "+ clave);
//  console.log("Valor: "+ localStorage.getItem(clave));
//}

//for (let i = 0; i <sessionStorage.length; i++){
//  let clave = sessionStorage.key(i);
//  console.log("Clave sessionStorage: "+ clave);
//  console.log("Valor: "+ sessionStorage.getItem(clave));
//}

//localStorage.setItem('producto1', 'alimentoAperros');
//let producto1 = localStorage.getItem('producto1');
//alert("Jorge Arruda compró: "+ producto1);

//let password = 123456
//localStorage.setItem('password', password);
//alert("clave de jorge: "+ password);

//localStorage.removeItem('password');
//localStorage.clear()
//sessionStorage.removeItem('EMAIL')
//sessionStorage.clear()


//almacenar objetos

//const producto1 = {id:2, producto:"arroz"};
//localStorage.setItem("producto1", producto1);

//stringify

//const producto3={ id: 3, producto: "fideo" };
//const enJSON = JSON.stringify(producto3);
//console.log(enJSON);
//console.log(typeof producto3);
//console.log(typeof enJSON);

//localStorage.setItem("producto3", enJSON);

//parse
//const enJSON2 = '{"id": 4, "producto": "ñoquis"}';
//const producto4 = JSON.parse(enJSON2);
//console.log(typeof enJSON);
//console.log(typeof producto4);
//console.log(producto4.producto);

//trasnformar desde localStorage

//const producto5 = JSON.parse(localStorage.getItem("producto1"));
//console.log(producto1.id);


//operadores ternarios

//let temperatura = 15
//temperatura > 30 ? alert("dia caluroso") : alert("dia frio")


//const usuario = {
//  nombre: "joguar",
//  edad: 17
//}

//const permiso = (usuario.edad >= 18) ? true : false
//permiso ? alert("puede comprar cerveza") : alert("no puede comprar")

//const usuario = {
//  nombre: "joguar",
//  edad: 20
//}
//const registroIngreso = usuario.edad >= 18 && new Date ()
//console.log(registroIngreso)
