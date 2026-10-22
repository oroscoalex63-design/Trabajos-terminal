//actividad 1
// mostrar el titulo de la pagina
const tituloPagina = document.getElementById("tituloPagina");
// titulo del producto
const titulo = document.getElementById("titulo");
console.log(titulo.textContent);

//mensaje de disponibilidad 
const mensaje = document.getElementById("mensaje");
console.log(mensaje.textContent);

//mostrar el producto disponible
const producto = document.getElementById("producto");
console.log(producto.textContent);

//mostrar el precio del producto
const precio = document.getElementById("precio");
console.log(precio.textContent);

//mostrar el stock del producto
const stock = document.getElementById("stock");
console.log(stock.textContent);

//actividad 2- modficar el contenido de los elementos
//2.1 modidicar el titulo del producto
titulo.textContent = "StoreApp - gestión de inventario";
console.log(titulo.textContent);

//2.2 modificar el mensaje de disponibilidad
mensaje.textContent = "Producto registrado correctamente";
console.log(mensaje.textContent);

//2.3 cambiar el nombre del producto
mensaje.textContent = "Laptop Lenovo Thinkpad";
console.log(mensaje.textContent);

//2.4 atributos
producto.dataset.id = "iD: P001";
producto.dataset.precio = "Precio: $4,800,000";
console.log(producto.dataset.id);
console.log(producto.dataset.precio);

//2.5 agregar atributo de stock
producto.dataset.stock = "Data-stock:5";
console.log(producto.dataset.stock);

//2.6 Eliminar atributo titulo de la pagina y cambiar por Producto tecnológico
tituloPagina.removeAttribute("id");
tituloPagina.textContent = "Producto tecnológico";
console.log(tituloPagina.textContent);

//3.1 modificar el padding del producto
producto.style.padding = "30px";
console.log(producto.style.padding);

//al presionar el boton destacar agregar la aclase destacada
const botonDestacar = document.getElementById("btnDestacar");
botonDestacar.addEventListener("click", () => {
  producto.classList.toggle("destacada");
  console.log(producto.classList);
});

//al presionar el boton desactivar agregar la clase inactiva
const botonDesactivar = document.getElementById("btnDesactivar");
botonDesactivar.addEventListener("click", () => {
  producto.classList.toggle("inactiva");
  console.log(producto.classList);
});

//comprobar si el producto tiene la clase destacada
console.log(producto.classList.contains("destacada"));