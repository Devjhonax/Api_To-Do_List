import express from "express"
import sequelize from "./config/configDb.js";
import { logger } from "./middlewares/logger.middlewarer.js";
import router from "./router/tarefasRouter.js";

const app = express();

// aplicação que permite usar todas as ferramentas desenvolvidas nas outras pastas.
app.use(express.json())
app.use(logger)
app.use(router)

//função que conecta com o banco de dados.
sequelize.sync()
    .then(() => console.log("Banco de dados conectado"))
    .catch((erro)=> console.error("Erro ao conectar com o banco de dados: ", erro));
    
export default app