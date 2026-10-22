const ventas = [
  { dia: "Lunes", totalVendido: 120000 },
  { dia: "Martes", totalVendido: 80000 },
  { dia: "Miércoles", totalVendido: 95000 },
  { dia: "Jueves", totalVendido: 150000 },
  { dia: "Viernes", totalVendido: 200000 },
  { dia: "Sábado", totalVendido: 180000 },
  { dia: "Domingo", totalVendido: 100000 }
];

// Función para total de la semana
function calcularTotal(ventas) {
  return ventas.reduce((acc, v) => acc + v.totalVendido, 0);
}

// Función para mejor día
function encontrarMejorDia(ventas) {
  return ventas.reduce((mejor, v) => v.totalVendido > mejor.totalVendido ? v : mejor);
}

// Función para filtrar días destacados
function filtrarDiasDestacados(ventas, minimo) {
  return ventas.filter(v => v.totalVendido > minimo);
}

console.log("Total semana:", calcularTotal(ventas).toLocaleString("es-CO"));
console.log("Mejor día:", encontrarMejorDia(ventas));
console.log("Días destacados:", filtrarDiasDestacados(ventas, 100000));
