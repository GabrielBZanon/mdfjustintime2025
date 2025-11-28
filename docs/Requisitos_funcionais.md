Requisitos Funcionais (RF)

A seguir, apresenta-se a lista completa de requisitos funcionais do sistema Just in Time.

[RF01] Autenticação de Usuário

[RF01.1] Solicitar email e senha para acesso.

[RF01.2] Validar as credenciais informadas.

[RF01.3] Redirecionar o usuário autenticado para a interface principal do sistema.

[RF02] Interface Principal

[RF02.1] Exibir menu de navegação contendo as opções:

Produtos

Produção

[RF02.2] Disponibilizar botão para logout e retorno à tela de autenticação.

[RF03] Gerenciamento de Produtos

[RF03.1] Exibir lista de produtos cadastrados.

[RF03.2] Permitir adicionar novos produtos informando:

Nome

Descrição

Quantidade em estoque

Estoque mínimo

Custo unitário de produção

[RF03.3] Permitir editar os dados de um produto existente.

[RF03.4] Permitir excluir produtos da lista.

[RF03.5] Implementar funcionalidade de busca por nome do produto.

[RF04] Gerenciamento de Produção

[RF04.1] Exibir lista de produtos ordenada alfabeticamente.

[RF04.2] Exibir alertas visuais (cor de destaque) para produtos com estoque abaixo do mínimo.

[RF04.3] Permitir registrar ordens de produção, informando:

Produto

Quantidade a produzir

Data

Atualização automática do estoque como entrada

[RF04.4] Permitir registrar pedidos concluídos, atualizando o estoque como saída.

[RF04.4.1] Antes de registrar a saída, o sistema deve verificar se há estoque suficiente.

Caso não haja, o sistema deve exibir uma mensagem de erro indicando falta de estoque.