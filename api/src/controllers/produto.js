const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { sku, nome, descricao, custo, estoque, estoqueMinimo, imagem, especificacoes } = req.body;

        if (!sku || !nome) {
            return res.status(400).json({ error: "SKU e nome são obrigatórios." });
        }

        const produto = await prisma.produto.create({
            data: {
                sku,
                nome,
                descricao,
                custo: Number(custo),
                estoque: Number(estoque),
                estoqueMinimo: Number(estoqueMinimo),
                imagem,
                especificacoes
            }
        });

        res.status(201).json(produto);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const readAll = async (req, res) => {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
};

const update = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const produto = await prisma.produto.update({
            where: { id },
            data: req.body
        });

        res.status(202).json(produto);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const del = async (req, res) => {
    try {
        const id = Number(req.params.id);

        const produto = await prisma.produto.delete({
            where: { id }
        });

        return res.status(204).end();

    } catch (err) {

        if (err.code === "P2003") {
            return res.status(409).json({
                error: "Não é possível excluir o produto: existem movimentações relacionadas."
            });
        }

     
        if (err.code === "P2025") {
            return res.status(404).json({
                error: "Produto não encontrado."
            });
        }

        return res.status(400).json({ error: err.message });
    }
};

module.exports = {
    create,
    readAll,
    update,
    del
};
