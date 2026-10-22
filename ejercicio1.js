// Datos 
const nombre = "Alex";
const peso = 3.5; // en kg
const ciudad = "Bogotá";

// Tarifa base
let tarifaBase = peso < 2 ? 8000 : (peso <= 5 ? 15000 : 25000);

// Recargo si la ciudad es Bogotá
const recargo = ciudad.toLowerCase() === "bogotá" ? 5000 : 0;

// Total
const total = tarifaBase + recargo;

// Mostrar resultados
console.log("\n--- Resultado ---");
console.log("Cliente:", nombre);
console.log("Ciudad:", ciudad);
console.log("Peso:", peso + " kg");
console.log("Tarifa base: $" + tarifaBase.toLocaleString("es-CO"));
console.log("Recargo: $" + recargo.toLocaleString("es-CO"));
console.log("Total a pagar: $" + total.toLocaleString("es-CO"));
