const clientes = [
  { nombre: "Juan", edad: 25, plan: 1, activo: true },
  { nombre: "María", edad: 17, plan: 2, activo: true },
  { nombre: "Pedro", edad: 65, plan: 3, activo: true },
  { nombre: "Lucía", edad: 30, plan: 2, activo: false },
  { nombre: "Andrés", edad: 40, plan: 1, activo: true }
];

// Filtrar clientes activos
const activos = clientes.filter(c => c.activo);

// Calcular valor segun plan y descuentos
const resultados = activos.map(c => {
  let precio = 0;
  if (c.plan === 1) precio = 80000;
  else if (c.plan === 2) precio = 130000;
  else if (c.plan === 3) precio = 200000;

  if (c.edad < 18) precio *= 0.8; // 20% descuento
  else if (c.edad >= 60) precio *= 0.7; // 30% descuento

  return { nombre: c.nombre, plan: c.plan, valorFinal: precio };
});

// Mostrarb cliente
resultados.forEach(r => {
  console.log(`${r.nombre} - Plan ${r.plan} - Valor: $${r.valorFinal.toLocaleString("es-CO")}`);
});

// Calcular ingreso total
const ingresoTotal = resultados.reduce((acc, r) => acc + r.valorFinal, 0);
console.log("Ingreso total del mes:", ingresoTotal.toLocaleString("es-CO"));
