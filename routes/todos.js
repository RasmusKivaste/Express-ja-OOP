import { Router } from 'express';
import { todoController } from '../controllers/todos.js';

const router = Router();

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodos);

export default router;