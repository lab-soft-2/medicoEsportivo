import * as express from "express";
import { MedicoController } from "./controller";
const Router = express.Router();

Router.get(
  "/user/email",
  MedicoController.getByEmail
);

// Router.get(
//   "/user/all",
//   MedicoController.getAll
// );

Router.post(
  "/user/delete/email",
  MedicoController.deleteByEmail
);

Router.post(
  "/user/update/score",
  MedicoController.updateMedicoScore
);

Router.post(
  "/user/agenda/medico",
  MedicoController.agendaMedico
);

Router.post(
  "/user/agenda/paciente",
  MedicoController.agendaPaciente
);

Router.post(
  "/user/emitir/documento",
  MedicoController.emitirDocumento
);

Router.post(
  "/user/atualizar/paciente/condicao",
  MedicoController.updatePaciente
);


Router.post(
  "/user/exames",
  MedicoController.exames
);


Router.post("/signup", MedicoController.signup);


export { Router as medicoRouter };