import * as express from "express";
import { MedicoController } from "./controller";
const Router = express.Router();

Router.get(
  "/user/email",
  MedicoController.getByEmail
);

Router.get(
  "/user/all",
  MedicoController.getAll
);

Router.post(
  "/user/delete/email",
  MedicoController.deleteByEmail
);

Router.post(
  "/user/update/score",
  MedicoController.updateMedicoScore
);

Router.get(
  "/vizualizar/agenda",
  MedicoController.agendaMedico
);


Router.post(
  "/emitir/documento",
  MedicoController.emitirDocumento
);

Router.post(
  "/finalizar/consulta",
  MedicoController.finalizarConsulta
);


Router.post(
  "/vizualizar/exame",
  MedicoController.exames
);


Router.post("/signup", MedicoController.signup);


export { Router as medicoRouter };