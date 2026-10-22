import * as reservasService from '../services/reservas.service.js';

export async function crear(req, res) {
const reserva = await reservasService.crearReserva(req.body);
res.status(201).json(reserva);
}
