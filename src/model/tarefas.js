import { DataTypes } from "sequelize";
import sequelize from "../config/configDb.js";

// modelo de tarefa com sequelize que cria a tabela.
const  modelo_de_tarefa = sequelize.define("Tarefa", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
        validade: {
            notEmpty: {msg: "o titulo não pode estar vazio."},
        },
    },
    descricao: {
        type: DataTypes.STRING,
    },
    status:{
        type: DataTypes.ENUM("a fazer", "em andamento", "concluída"),
        allowNull: false,
        defaultValue: "a fazer",
    },
});

export default modelo_de_tarefa