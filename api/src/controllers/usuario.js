const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if (!nome || !email || !senha) {
            return res.status(400).json({ error: "Nome, email e senha são obrigatórios." });
        }

        const usuario = await prisma.usuario.create({
            data: { nome, email, senha },
            select: { id: true, nome: true, email: true }
        });

        res.status(201).json(usuario);
    } catch (e) {
        if (e.code === "P2002") {
            return res.status(409).json({ error: "E-mail já está em uso." });
        }
        res.status(400).json({ error: e.message });
    }
};

const readAll = async (req, res) => {
    const usuarios = await prisma.usuario.findMany({
        select: {
            id: true,
            nome: true,
            email: true
        }
    });
    res.json(usuarios);
};

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).json({ error: "Email e senha são obrigatórios." });
        }

        const usuario = await prisma.usuario.findFirst({
            where: { email, senha },
            select: { id: true, nome: true, email: true }
        });

        if (!usuario) {
            return res.status(401).json({ error: "Email ou senha inválidos" });
        }

        res.json(usuario);

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

const del = async (req, res) => {
    try {
        const id = Number(req.params.id);

        await prisma.usuario.delete({
            where: { id }
        });

        return res.status(204).end();

    } catch (e) {

        if (e.code === "P2025") {
            return res.status(404).json({ error: "Usuário não encontrado." });
        }

        if (e.code === "P2003") {
            return res.status(409).json({
                error: "Não é possível excluir: este usuário possui movimentações cadastradas."
            });
        }

        return res.status(400).json({ error: e.message });
    }
};

module.exports = {
    create,
    readAll,
    login,
    del
};
