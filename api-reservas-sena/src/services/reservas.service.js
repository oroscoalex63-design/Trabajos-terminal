import { Op } from 'sequelize';
import { Recurso, Usuario, Reserva } from '../models/index.js';
import { AppError } from '../utils/apperror.js';

async function existeCruce(recursoId, fechaInicio, fechaFin, excluirReservaId = null) {
const where = {
recursoId,
estado: 'activa',
fechaInicio: { [Op.lt]: fechaFin },
fechaFin: { [Op.gt]: fechaInicio },
};

if (excluirReservaId) {
where.id = { [Op.ne]: excluirReservaId };
}
const cruce = await Reserva.findOne({ where });
return cruce !== null;
}

export async function crearReserva(datos) {
const { recursoId, usuarioId, fechaInicio, fechaFin, motivo } = datos;
 
const recurso = await Recurso.findByPk(recursoId);
if (!recurso) throw new AppError('Recurso no encontrado', 404);
if (!recurso.activo) throw new AppError('El recurso no está disponible para reservas', 409);

const usuario = await Usuario.findByPk(usuarioId);
if (!usuario) throw new AppError('Usuario no encontrado', 404);
if (await existeCruce(recursoId, fechaInicio, fechaFin)) {
throw new AppError('El recurso ya está reservado en ese horario', 409);
}
return Reserva.create({ recursoId, usuarioId, fechaInicio, fechaFin, motivo });
}

const incluirRelaciones = [
{ model: Recurso, as: 'recurso', attributes: ['id', 'nombre', 'tipo'] },
{ model: Usuario, as: 'usuario', attributes: ['id', 'nombre', 'correo'] },
];

export async function listarReservas({ recursoId, usuarioId, estado } = {}) {
const where = {};
if (recursoId) where.recursoId = recursoId;
if (usuarioId) where.usuarioId = usuarioId;
if (estado) where.estado = estado;
return Reserva.findAll({ where, include: incluirRelaciones, order: [['fechaInicio', 'ASC']] });
}

export async function obtenerReservaPorId(id) {
const reserva = await Reserva.findByPk(id, { include: incluirRelaciones });
if (!reserva) throw new AppError('Reserva no encontrada', 404);
return reserva;
}

export async function cancelarReserva(id) {
const reserva = await obtenerReservaPorId(id);
if (reserva.estado === 'cancelada') {
throw new AppError('La reserva ya está cancelada', 409);
}
await reserva.update({ estado: 'cancelada' });
return reserva;
}

export async function reprogramarReserva(id, datos) {
const reserva = await obtenerReservaPorId(id);
const { fechaInicio, fechaFin, motivo } = datos;

if (reserva.estado === 'cancelada') {
throw new AppError('No se puede reprogramar una reserva cancelada', 409);
}

if (await existeCruce(reserva.recursoId, fechaInicio, fechaFin, reserva.id)) {
throw new AppError('El recurso ya está reservado en ese horario', 409);
}
await reserva.update({ fechaInicio, fechaFin, motivo: motivo ?? reserva.motivo });
return reserva;
}