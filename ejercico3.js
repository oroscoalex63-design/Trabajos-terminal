// Arreglo de estudiantes con nombre y nota
const estudiantes = [
  { nombre: "Alex", nota: 4.2 },
  { nombre: "pedro", nota: 3.0 },
  { nombre: "jose", nota: 3.8 },
  { nombre: "maria", nota: 2.9 },
  { nombre: "diana", nota: 4.5 },
  { nombre: "natalia", nota: 3.6 }
];

let suma = 0;
let aprobados = 0;
let notas = [];

for (const estudiante of estudiantes) {
  const estado = estudiante.nota >= 3.5 ? "APROBADO" : "REPROBADO";
  console.log(`${estudiante.nombre} - Nota: ${estudiante.nota} - Estado: ${estado}`);
  suma += estudiante.nota;
  notas.push(estudiante.nota);
  if (estado === "APROBADO") aprobados++;
}

const promedio = suma / estudiantes.length;
const notaMax = Math.max(...notas);
const notaMin = Math.min(...notas);

console.log("\n--- Resultados ---");
console.log("Promedio:", promedio.toFixed(2));
console.log("Nota más alta:", notaMax);
console.log("Nota más baja:", notaMin);
console.log("Estudiantes aprobados:", aprobados);
