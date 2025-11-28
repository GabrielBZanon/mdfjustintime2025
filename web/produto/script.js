async function carregar() {
    const req = await fetch("http://localhost:3000/produtos");
    const produtos = await req.json();

    const tabela = document.getElementById("tabela");

    tabela.innerHTML = `
        <tr>
            <th>ID</th>
            <th>SKU</th>
            <th>Nome</th>
            <th>Estoque</th>
            <th>Ações</th>
        </tr>
    `;

    produtos.forEach(p => {
        tabela.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.sku}</td>
                <td>${p.nome}</td>
                <td>${p.estoque}</td>
                <td>
                    <button onclick="deletar(${p.id})">Excluir</button>
                </td>
            </tr>
        `;
    });
}

async function cadastrar() {
    const data = {
        sku: document.getElementById("sku").value,
        nome: document.getElementById("nome").value,
        descricao: document.getElementById("descricao").value,
        custo: Number(document.getElementById("custo").value),
        estoque: Number(document.getElementById("estoque").value),
        estoqueMinimo: Number(document.getElementById("estoqueMinimo").value)
    };

    await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    carregar();
}

async function deletar(id) {
    await fetch(`http://localhost:3000/produtos/${id}`, { method: "DELETE" });
    carregar();
}

carregar();
