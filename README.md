Sistema de Controle de Estoque para Equipamentos Eletrônicos

Controle completo de produtos, movimentações e níveis de estoque em tempo real.

Este sistema foi desenvolvido para substituir planilhas manuais e oferecer uma ferramenta eficiente, intuitiva e segura para controle de estoque de equipamentos eletrônicos como smartphones, notebooks, tablets, smart TVs e acessórios.

O sistema permite cadastrar produtos com suas especificações técnicas, registrar movimentações de entrada e saída, acompanhar níveis de estoque e alertas de estoque mínimo, além de contar com controle de usuários e autenticação.

📁 Estrutura do Projeto
./api   → Backend (Node.js, Express, Prisma, MySQL)
./web   → Frontend (HTML, CSS, JavaScript)
./docs  → Documentação, diagramas e screenshots
README.md → Documentação principal do projeto

▶️ Instruções para Execução Local
1. Clonar o repositório
git clone <URL do repositório>

2. Instalar dependências do backend
cd api
npm install

3. Configurar banco de dados (MySQL – XAMPP)

Inicie o serviço MySQL no XAMPP.

Crie o banco se ainda não existir (Prisma cria automaticamente).

Preencha o arquivo .env:

DATABASE_URL="mysql://root@localhost:3306/estoque_eletronicos_db"

4. Criar as tabelas (Prisma)
npx prisma migrate dev --name init

5. Iniciar o backend
npm run dev

6. Abrir o frontend

Abra o arquivo:

/web/index.html


ou utilize o Live Server do VSCode.

Funcionalidades Principais
Autenticação

Login com email e senha.

Validação com mensagens de erro.

Redirecionamento para a interface principal.

Interface principal

Exibe o nome do usuário autenticado.

Navegação entre:

Produtos

Movimentações

Botão de logout.

Gestão de Produtos

Cada produto possui:

Nome

Categoria (Smartphone, TV, Notebook, etc.)

Fabricante

Código interno

Preço

Estoque atual

Estoque mínimo

Especificações técnicas:

Processador

Memória RAM

Armazenamento

Tamanho da tela

Cores

Resolução da câmera

Sistema Operacional

Conectividade (Wi-Fi, Bluetooth…)

Portas disponíveis (USB, HDMI…)

Funcionalidades:

Listar produtos

Adicionar novo produto

Editar informações

Excluir

Buscar por nome/modelo

Alertas de estoque baixo

Movimentações de Estoque

Registrar entrada de produtos (compra, reposição).

Registrar saída de produtos (venda, uso interno).

Definir data da movimentação.

Atualização automática do estoque.

Bloqueio de saída quando não há quantidade suficiente.

Ordenação dos produtos por nome.

Alerta visual para estoque abaixo do mínimo.

📷 Evidências (Screenshots)

Estão disponíveis na pasta /docs, incluindo:

Tela de login

Tela principal

Cadastro de produto

Lista/edição/exclusão

Movimentações (entrada e saída)

Alerta de estoque mínimo

Casos de Teste

Arquivo completo aqui:

./docs/casos_de_teste.md


Inclui:

Testes de produtos

Testes de movimentações

Testes de autenticação

Testes de alertas

Testes de integração via Insomnia (script incluso)

Requisitos de Infraestrutura
Ambiente de Desenvolvimento

Node.js 14+

Express.js 4+

Prisma ORM 4+

MySQL (XAMPP – MariaDB 10.4+)

HTML5, CSS3, JavaScript puro

Sistema Operacional

Windows 10+

Linux

MacOS

Lista de Verificação por Atividade (Checklists da Prova)

Todos os checklists permanecem válidos, pois o sistema cumpre:

Requisitos funcionais

DER

Scripts DB

Autenticação

Interface principal

Produtos

Movimentações

Casos de teste

Infraestrutura

(Mantive seus quadros originais — se quiser, posso também melhorar o visual.)

Autor

Gabriel B. Zanon