import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema';
import { } from "../schemas/index.schemas"
import * as remindersController from "../controllers/reminders.controller"

const remindersRouter = Router();


export { remindersRouter };
