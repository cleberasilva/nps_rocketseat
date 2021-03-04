import { Router } from 'express';
import { UsersController } from './controllers/UsersController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';

const router = Router();

const sendMailController = new SendMailController()
const usersController = new UsersController();
const surveysController = new SurveysController();

router.post("/users",usersController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

router.post("/sendMail", sendMailController.execute);

export { router };