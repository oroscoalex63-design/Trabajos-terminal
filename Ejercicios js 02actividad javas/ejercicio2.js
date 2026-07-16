// Lista de estudiantes con nombre y promedio
const estudiantes = [
  { nombre: "Ana", promedio: 4.8 },
  { nombre: "Luis", promedio: 3.9 },
  { nombre: "Marta", promedio: 3.2 },
  { nombre: "Carlos", promedio: 2.7 },
  { nombre: "Sofía", promedio: 4.4 },
  { nombre: "Pedro", promedio: 3.0 }
];

// Contadores de categorías
const categorias = { EXCELENTE: 0, BUENO: 0, BÁSICO: 0, BAJO: 0 };

// Recorremos cada estudiante
for (const estudiante of estudiantes) {
  let categoria = "";

  // Condiciones según el promedio
  if (estudiante.promedio >= 4.5) {
    categoria = "EXCELENTE";
  } else if (estudiante.promedio >= 3.5) {
    categoria = "BUENO";
  } else if (estudiante.promedio >= 3.0) {
    categoria = "BÁSICO";
  } else {
    categoria = "BAJO";
  }

  categorias[categoria]++; // sumamos al contador

  // Mensaje simple 
  console.log(`${estudiante.nombre} tiene promedio ${estudiante.promedio} → ${categoria}`);
}

// Mostrar resumen
console.log("Cantidad por categoría:", categorias);
