import Tarefas  from "../controller/tarefaController.js"
import express from "express"
const router = express.Router()

//função de rotas que junta todos os métodos com suas respectivas rotas.
router
    .post("/tarefas", Tarefas.criarTarefa)
    .put("/tarefa/:id", Tarefas.atualizarTarefa)
    .get("/tarefas", Tarefas.listarTarefas)
    .get("/tarefa/:id", Tarefas.buscarTarefa)
    .delete("/tarefa/:id", Tarefas.deletarTarefa)
    .patch("/tarefa/:id/status", Tarefas.atualizarStatus)

export default router