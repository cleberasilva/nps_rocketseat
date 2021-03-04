import { Router } from 'express';
import { UsersController } from './controllers/UsersController';
import { SurveysController } from './controllers/SurveysController';
import { SendMailController } from './controllers/SendMailController';
import { AnswersController } from './controllers/AnswersController';
import { NpsController } from './controllers/NpsController';

const router = Router();

const sendMailController = new SendMailController();
const usersController = new UsersController();
const surveysController = new SurveysController();
const answersController = new AnswersController();
const npsController = new NpsController();

router.post("/users",usersController.create);

router.get("/surveys", surveysController.show);
router.post("/surveys", surveysController.create);

router.post("/sendMail", sendMailController.execute);

router.get("/answers/:value", answersController.execute);

router.get("/nps/:survey_id", npsController.execute);

export { router };