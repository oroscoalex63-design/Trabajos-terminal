// Datos
const nombre = "Alex";
const edad = 65;
const plan = 2; // 1 = Básico, 2 = Estándar, 3 = Premium

let valorPlan;
let nombrePlan;

// Determina valor del plan con (switch)
switch (plan) {
  case 1:
    valorPlan = 80000;
    nombrePlan = "Básico";
    break;
  case 2:
    valorPlan = 130000;
    nombrePlan = "Estándar";
    break;
  case 3:
    valorPlan = 200000;
    nombrePlan = "Premium";
    break;
  default:
    console.log("Opción no válida");
    process.exit(); // Termina el programa si el plan no es válido
}

// Calcular un descuento según edad del usuario
let descuento = 0;

if (edad < 18) {
  descuento = valorPlan * 0.20;
} else if (edad >= 60 && edad <= 99) {
  descuento = valorPlan * 0.30;
} else {
  descuento = 0;
}

// Valor final
const valorFinal = valorPlan - descuento;

// Mostrar resultados
console.log("\n--- Resultado ---");
console.log("Afiliado:", nombre);
console.log("Edad:", edad);
console.log("Plan elegido:", nombrePlan);
console.log("Valor del plan: $" + valorPlan.toLocaleString("es-CO"));
console.log("Descuento aplicado: $" + descuento.toLocaleString("es-CO"));
console.log("Valor final a pagar: $" + valorFinal.toLocaleString("es-CO"));
