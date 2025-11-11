# 📝 To-Do List API

Uma API REST desenvolvida em **Node.js** com **Express** e **Sequelize**, que permite gerenciar uma lista de tarefas.  
O projeto foi criado com foco em boas práticas de arquitetura (MVC), manipulação de dados persistentes com **SQLite** e implementação completa do ciclo de vida de uma tarefa.

---

## 🚀 Funcionalidades

A API permite:

- ➕ **Criar uma tarefa**  
  `POST /tarefas`  
  Adiciona uma nova tarefa com `titulo`, `descricao` e `status` (`não iniciado`, `em andamento`, `concluído`).

- 📋 **Listar todas as tarefas**  
  `GET /tarefas`  
  Retorna todas as tarefas cadastradas no banco de dados.

- 🔍 **Buscar tarefa por ID**  
  `GET /tarefa/:id`  
  Retorna os dados de uma tarefa específica.

- ✏️ **Atualizar uma tarefa**  
  `PUT /tarefas/:id`  
  Atualiza completamente os dados de uma tarefa existente.

- 🔄 **Atualizar status da tarefa**  
  `PATCH /tarefa/:id/status`  
  Atualiza apenas o campo `status`.

- ❌ **Deletar uma tarefa**  
  `DELETE /tarefa/:id`  
  Remove uma tarefa do banco de dados.

---

## 🧩 Tecnologias Utilizadas

- [Node.js]
- [Express]
- [Sequelize ORM]
- [SQLite]
- ]SQLite3]
- [dotenv]
- [uuid]
- [date-fns]
- [Nodemon]
