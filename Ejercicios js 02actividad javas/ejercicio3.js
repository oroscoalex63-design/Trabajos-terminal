// Lista de asociados con nombre, cuota y estado
const asociados = [
  { nombre: "Juan", cuota: 50000, al_dia: true },
  { nombre: "María", cuota: 45000, al_dia: false },
  { nombre: "José", cuota: 60000, al_dia: true },
  { nombre: "Lucía", cuota: 55000, al_dia: true },
  { nombre: "Andrés", cuota: 40000, al_dia: false }
];

// Mes actual ej julio
const mes = 7;

let saludo = "";

// Switch para mostrar saludo por trimestre
switch (true) {
  case (mes >= 1 && mes <= 3):
    saludo = "Bienvenido al primer trimestre";
    break;
  case (mes >= 4 && mes <= 6):
    saludo = "Bienvenido al segundo trimestre";
    break;
  case (mes >= 7 && mes <= 9):
    saludo = "Bienvenido al tercer trimestre";
    break;
  case (mes >= 10 && mes <= 12):
    saludo = "Bienvenido al cuarto trimestre";
    break;
  default:
    saludo = "Mes inválido";
}

console.log(saludo);

// Recorremos asociados
for (const asociado of asociados) {
  const estado = asociado.al_dia ? "Al día" : "En mora";
  console.log(`${asociado.nombre} paga $${asociado.cuota.toLocaleString("es-CO")} → ${estado}`);
}
