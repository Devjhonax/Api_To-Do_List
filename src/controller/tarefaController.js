import modelo_de_tarefa from "../model/tarefas.js";

// métodos de requisição e resposta.
class Tarefas {

    //método de criação de tarefas.
    static async criarTarefa(req, res) {
        try {
            const { titulo, descricao, status } = req.body;

            if (!titulo || !status) {
                return res.status(400).json({ erro: "Os campos de titulo e status devem ser preenchidos." });
            }

            const statusPermitidos = ["a fazer", "em andamento", "concluído"]

            if (!statusPermitidos.includes(status.toLowerCase())) {
              return res.status(400).json({ erro: "O campo de status deve ser preenchido com um desses valores: a fazer, em andamento ou concluído" })
            }

            const tarefa = await modelo_de_tarefa.create({ titulo, descricao, status });
            res.status(201).json(tarefa);
        } catch (erro) {
            res.status(400).json({ erro: erro.message })
        }
    };

    //método que lista todas as tarefas do banco de dados.
    static async listarTarefas(req, res) {
        try {
            const tarefas = await modelo_de_tarefa.findAll();

            if (tarefas.length === 0) {
                return res.status(404).json({ message: "Nenhuma tarefa encontrada." });
            }

            return res.status(200).json(tarefas);
        } catch (erro) {
            return res.status(500).json({ erro: erro.message });
        }
    };

    //método que busca alguma tarefa uma tarefa especifica.
    static async buscarTarefa(req, res) {
        const tarefa = await modelo_de_tarefa.findByPk(req.params.id);
        tarefa ? res.json(tarefa) : res.status(404).json({ erro: "Tarefa não encontrada." });
    };

    // método que atualiza uma tarefa.
    static async atualizarTarefa(req, res) {
        try {
            const tarefa = await modelo_de_tarefa.findByPk(req.params.id);
            if (!tarefa) {
                return res.status(404).json({ erro: "Tarefa não encontrada." });
            }
            await tarefa.update(req.body);
            res.json({ tarefa })
        } catch (erro) {
            res.status(400).json({ erro: erro.message });
        }
    }

    // método que deleta uma tarefa.
    static async deletarTarefa(req, res) {
        const tarefa = await modelo_de_tarefa.findByPk(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ erro: "Tarefa não encontrada." });
        }
        await tarefa.destroy();
        res.json({ message: "Tarefa deletada." });
    };

    // método para atualizar apenas o status de uma tarefa.
    static async atualizarStatus(req, res) {
        const { status } = req.body;
        const tarefa = await modelo_de_tarefa.findByPk(req.params.id);
        if (!tarefa) {
            return res.status(404).json({ erro: "Tarefa não encontrada." });
        }

        const statusPermitidos = ["não iniciado", "em andamento", "concluído"]

        if (!statusPermitidos.includes(status.toLowerCase())) {
            return res.status(400).json({ erro: "O campo de status deve ser preenchido com um desses valores: não iniciado, em andamento ou concluído" })
        }

        tarefa.status = status
        await tarefa.save();
        res.json({ message: "Status atualizado com sucesso.", tarefa });
    };
}

export default Tarefas