const inventario = [
  { nombre: "Laptop", precio: 2500000, stock: 5 },
  { nombre: "Mouse", precio: 50000, stock: 0 },
  { nombre: "Teclado", precio: 120000, stock: 3 },
  { nombre: "Monitor", precio: 800000, stock: 2 },
  { nombre: "Tablet", precio: 1500000, stock: 4 },
  { nombre: "USB", precio: 30000, stock: 10 }
];

// Filtrar productos con stock > 0
const disponibles = inventario.filter(p => p.stock > 0);

// Crear arreglo con nombre y precio
const lista = disponibles.map(p => `${p.nombre} — $${p.precio.toLocaleString("es-CO")}`);

// Mostrar cada producto
lista.forEach(item => console.log(item));

// Calcular valor total del inventario
const total = disponibles.reduce((acc, p) => acc + (p.precio * p.stock), 0);
console.log("Valor total del inventario:", total.toLocaleString("es-CO"));
