import recursos from '../models/recurso.model.js';
import { AppError } from '../utils/apperror.js';

export async function crearRecurso(datos) {
    const { nombre, tipo, capacidad } = datos;
    return recursos.create({ nombre, tipo, capacidad });
}
export async function listarRecursos({ tipo, activo } = {}) {
    const where = {};
    if (tipo) where.tipo = tipo;
    if (activo !== undefined) where.activo = activo === 'true';
        
    return recursos.findAll({ where, order: [['id', 'ASC']] });
}
export async function obtenerRecursoPorId(id) {
const recurso = await recursos.findByPk(id);
if (!recurso) {
throw new AppError('Recurso no encontrado', 404);
}
return recurso;
}

export async function eliminarRecurso(id) {
  const recurso = await recursos.findByPk(id);

  if (!recurso) {
    throw new AppError('Recurso no encontrado', 404);
  }

  await recurso.destroy();
}