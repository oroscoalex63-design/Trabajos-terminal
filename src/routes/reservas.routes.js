import { Router } from 'express';
import * as reservasController from '../controllers/reservas.controller.js';
import { validarCrearReserva, validarReprogramarReserva } from '../middlewares/validarReserva.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();
router.post('/', validarCrearReserva, reservasController.crear);
router.put('/:id', validarId, validarReprogramarReserva, reservasController.reprogramar);
router.get('/', reservasController.listar);
router.get('/:id', validarId, reservasController.obtener);
router.patch('/:id/cancelar', validarId, reservasController.cancelar);
router.put('/:id/reprogramar', validarId, validarReprogramarReserva, reservasController.reprogramar);
export default router;