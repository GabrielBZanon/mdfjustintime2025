const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function criar(req, res) {
    try {
        const { usuarioId, produtoId, quantidade, tipo } = req.body;

        if (!usuarioId || !produtoId || !quantidade || !tipo) {
            return res.status(400).json({
                erro: "Campos obrigatórios: usuarioId, produtoId, quantidade, tipo",
            });
        }

        if (!["ENTRADA", "SAIDA"].includes(tipo)) {
            return res.status(400).json({
                erro: "Tipo inválido. Use: ENTRADA ou SAIDA.",
            });
        }

        const movimentacao = await prisma.movimentacao.create({
            data: {
                usuarioId: Number(usuarioId),
                produtoId: Number(produtoId),
                quantidade: Number(quantidade),
                tipo
            },
        });

        return res.status(201).json(movimentacao);

    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao criar movimentação", detalhes: erro });
    }
}

async function listar(req, res) {
    try {
        const movimentacoes = await prisma.movimentacao.findMany({
            include: {
                usuario: true,
                produto: true,
            },
        });

        return res.status(200).json(movimentacoes);
    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao listar movimentações", detalhes: erro });
    }
}

async function buscarPorId(req, res) {
    try {
        const { id } = req.params;

        const mov = await prisma.movimentacao.findUnique({
            where: { id: Number(id) },
            include: { usuario: true, produto: true },
        });

        if (!mov) {
            return res.status(404).json({ erro: "Movimentação não encontrada" });
        }

        return res.status(200).json(mov);

    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao buscar movimentação", detalhes: erro });
    }
}

async function deletar(req, res) {
    try {
        const { id } = req.params;

        await prisma.movimentacao.delete({
            where: { id: Number(id) },
        });

        return res.status(200).json({ mensagem: "Movimentação excluída com sucesso." });

    } catch (erro) {
        return res.status(500).json({ erro: "Erro ao excluir movimentação", detalhes: erro });
    }
}

module.exports = {
    criar,
    listar,
    buscarPorId,
    deletar
};
