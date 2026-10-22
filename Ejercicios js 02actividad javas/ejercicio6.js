let carrito = [
  { titulo: "Cien años de soledad", autor: "García Márquez", precio: 60000 },
  { titulo: "El Principito", autor: "Saint-Exupéry", precio: 40000 },
  { titulo: "1984", autor: "Orwell", precio: 50000 }
];

// Agrega 2 libros
carrito.push(
  { titulo: "Don Quijote", autor: "Cervantes", precio: 70000 },
  { titulo: "Rayuela", autor: "Cortázar", precio: 55000 }
);
console.log("Carrito después de agregar:", carrito);

// Elimina último libro
const eliminado = carrito.pop();
console.log("Libro eliminado:", eliminado);

// Mostrar solo títulos
const titulos = carrito.map(libro => libro.titulo);
console.log("Títulos en el carrito:", titulos);

// Calcular total
const total = carrito.reduce((acc, libro) => acc + libro.precio, 0);
console.log("Total a pagar:", total.toLocaleString("es-CO"));
