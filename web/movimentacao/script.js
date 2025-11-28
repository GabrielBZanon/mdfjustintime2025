async function carregar() {
    const req = await fetch("http://localhost:3000/movimentacoes");
    const movs = await req.json();

    const tabela = document.getElementById("tabela");

    tabela.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Usuário</th>
            <th>Quantidade</th>
            <th>Tipo</th>
        </tr>
    `;

    movs.forEach(m => {
        tabela.innerHTML += `
            <tr>
                <td>${m.id}</td>
                <td>${m.produto?.nome}</td>
                <td>${m.usuario?.nome}</td>
                <td>${m.quantidade}</td>
                <td>${m.tipo}</td>
            </tr>
        `;
    });
}

async function registrar() {
    const data = {
        usuarioId: Number(document.getElementById("usuarioId").value),
        produtoId: Number(document.getElementById("produtoId").value),
        quantidade: Number(document.getElementById("quantidade").value),
        tipo: document.getElementById("tipo").value
    };

    await fetch("http://localhost:3000/movimentacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    carregar();
}

carregar();
