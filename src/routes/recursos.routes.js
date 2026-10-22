import { Router } from 'express';
import * as recursosController from '../controllers/recursos.controller.js';
import { validarRecurso } from '../middlewares/validarrecurso.js';
import { validarId } from '../middlewares/validarId.js';

const router = Router();
router.post('/', validarRecurso, recursosController.crear);
router.get('/', recursosController.listar);
router.get('/:id', validarId, recursosController.obtener);
router.delete('/:id', validarId, recursosController.eliminar);
export default router;