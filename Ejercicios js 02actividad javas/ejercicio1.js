// Lista de pedidos con nombre y peso
const pedidos = [
  { nombre: "Pedido A", peso: 0.5 },
  { nombre: "Pedido B", peso: 1.2 },
  { nombre: "Pedido C", peso: 2.8 },
  { nombre: "Pedido D", peso: 3.5 },
  { nombre: "Pedido E", peso: 5.0 }
];

let total = 0; // acumulador del costo total

// Recorremos cada pedido
for (const pedido of pedidos) {
  let costo = 0;

  // Condiciones segun peso
  if (pedido.peso < 1) {
    costo = 4000;
  } else if (pedido.peso <= 3) {
    costo = 8000;
  } else {
    costo = 14000;
  }

  total += costo; // sumamos al total

  // Mensaje simple 
  console.log(`El ${pedido.nombre} pesa ${pedido.peso} kg y cuesta $${costo.toLocaleString("es-CO")}`);
}

// Mostrar el total
console.log(`El costo total de todos los pedidos es $${total.toLocaleString("es-CO")}`);
