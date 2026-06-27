// Arreglo de ventas
const ventas = [
  { dia: "Lunes", vendedor: "Alex", unidades: 8, totalVendido: 400000 },
  { dia: "Martes", vendedor: "maria", unidades: 12, totalVendido: 600000 },
  { dia: "Miércoles", vendedor: "jose", unidades: 15, totalVendido: 750000 },
  { dia: "Jueves", vendedor: "diana", unidades: 9, totalVendido: 450000 },
  { dia: "Viernes", vendedor: "natalia", unidades: 20, totalVendido: 1000000 }
];

//total de la semana
function calcularTotalSemana(arr) {
  return arr.reduce((acc, venta) => acc + venta.totalVendido, 0);
}

//mejor día
function mejorDia(arr) {
  return arr.reduce((max, venta) => venta.totalVendido > max.totalVendido ? venta : max);
}

//días con más de 10 unidades
function diasDestacados(arr) {
  return arr.filter(venta => venta.unidades > 10);
}

//reporte completo
function imprimirReporte(arr) {
  const totalSemana = calcularTotalSemana(arr);
  const diaMayor = mejorDia(arr);
  const destacados = diasDestacados(arr);

  console.log("\n--- Reporte semanal ---");
  console.log("Total vendido en la semana: $" + totalSemana.toLocaleString("es-CO"));
  console.log("Día con mayor venta:", diaMayor.dia, 
              "- $" + diaMayor.totalVendido.toLocaleString("es-CO"));
  console.log("Días con más de 10 unidades:");
  destacados.forEach(d => {
    console.log(`${d.dia} - ${d.unidades} unidades - $${d.totalVendido.toLocaleString("es-CO")}`);
  });
}

// Llamo el reporte
imprimirReporte(ventas);
