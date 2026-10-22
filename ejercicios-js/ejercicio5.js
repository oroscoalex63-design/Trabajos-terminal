// Función para procesar el retiro
function procesarRetiro(nombre, saldo, monto) {
  if (monto <= 0) {
    return { mensaje: "El monto debe ser mayor a cero" };
  }

  if (saldo >= monto) {
    const nuevoSaldo = saldo - monto;
    return {
      nombre,
      saldoAnterior: saldo,
      montoRetirado: monto,
      nuevoSaldo
    };
  } else {
    const faltante = monto - saldo;
    return {
      nombre,
      mensaje: "Saldo insuficiente",
      saldoDisponible: saldo,
      montoDeseado: monto,
      faltante
    };
  }
}

// Datos
const nombre = "Alex";
const saldo = 500000;
const monto = 200000;

// Procesar
const resultado = procesarRetiro(nombre, saldo, monto);

// Mostrar los resultados
console.log("\n--- Resultado del retiro ---");
if (resultado.mensaje === "El monto debe ser mayor a cero") {
  console.log(resultado.mensaje);
} else if (resultado.mensaje === "Saldo insuficiente") {
  console.log("Asociado:", resultado.nombre);
  console.log("Saldo disponible: $" + resultado.saldoDisponible.toLocaleString("es-CO"));
  console.log("Monto solicitado: $" + resultado.montoDeseado.toLocaleString("es-CO"));
  console.log("Faltante: $" + resultado.faltante.toLocaleString("es-CO"));
} else {
  console.log("Asociado:", resultado.nombre);
  console.log("Saldo anterior: $" + resultado.saldoAnterior.toLocaleString("es-CO"));
  console.log("Monto retirado: $" + resultado.montoRetirado.toLocaleString("es-CO"));
  console.log("Nuevo saldo: $" + resultado.nuevoSaldo.toLocaleString("es-CO"));
}
