const pedidos = [
  { mesa: 1, plato: "Bandeja Paisa", valor: 48000 },
  { mesa: 2, plato: "Pizza", valor: 52000 },
  { mesa: 3, plato: "Hamburguesa", valor: 35000 },
  { mesa: 4, plato: "Sushi", valor: 65000 },
  { mesa: 5, plato: "Ensalada", valor: 28000 }
];

// Primer pedido mayor a 50.000
const pedidoCostoso = pedidos.find(p => p.valor > 50000);
console.log("Primer pedido costoso:", pedidoCostoso);

// Pedidos económicos (<= 50.000)
const pedidosEconomicos = pedidos.filter(p => p.valor <= 50000);
console.log("Pedidos económicos:", pedidosEconomicos);

// Total del día
const totalDia = pedidos.reduce((acc, p) => acc + p.valor, 0);
console.log("Total del día:", totalDia.toLocaleString("es-CO"));
