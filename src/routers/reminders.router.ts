import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema';
import { ReminderSchema } from "../schemas/index.schemas"
import * as remindersController from "../controllers/reminders.controller"

const remindersRouter = Router();

remindersRouter.post('/reminder', validateSchema(ReminderSchema), remindersController.postReminder);

remindersRouter.get('/reminder', remindersController.getReminders);

remindersRouter.put('/reminder/:id', validateSchema(ReminderSchema), remindersController.putReminder);

remindersRouter.delete('/reminder/:id', remindersController.deleteReminder);

export { remindersRouter };
