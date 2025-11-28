Aqui está o **README revisado, profissional, organizado e com melhorias essenciais**, mantendo tudo o que você escreveu, mas com mais clareza, padrão e boa apresentação.

---

# **API Just in Time**

API desenvolvida em **Node.js**, utilizando **Express.js** e **Prisma ORM** para gerenciar produção, estoque mínimo e movimentações do sistema Just in Time.

---

## **Tecnologias Utilizadas**

* **Node.js**
* **Express.js**
* **Prisma ORM**
* **MySQL (XAMPP)**
* **JavaScript (ES6+)**
* **VS Code**

---

## **Como rodar o projeto localmente**

### **1️⃣ Clonar o repositório e instalar dependências**

Abra seu terminal (CMD, PowerShell ou Git Bash), acesse a pasta `api` e execute:

```bash
cd api
npm install
```

---

### **2️⃣ Iniciar o XAMPP**

Abra o painel e inicie:

* ✔ Apache
* ✔ MySQL

---

### **3️⃣ Criar o arquivo `.env`**

Na raiz da pasta `api`, crie um arquivo chamado `.env` contendo a conexão com o MySQL:

```env
DATABASE_URL="mysql://root@localhost:3306/preparacao_db"
```

> Caso sua senha de root não seja vazia, adicione assim:
> `"mysql://root:senha@localhost:3306/preparacao_db"`

---

### **4️⃣ Rodar as migrações do Prisma**

Este comando cria automaticamente todas as tabelas do sistema:

```bash
npx prisma migrate dev --name init
```

---

### **5️⃣ Rodar o servidor em modo desenvolvimento**

Para iniciar com **nodemon**:

```bash
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## **Observações importantes**

* O script de seed pode ser executado com:

```bash
npx prisma db seed
```

* Caso altere o schema, lembre-se de rodar novamente:

```bash
npx prisma migrate dev
```

* O banco de dados deve existir antes das migrações (crie no phpMyAdmin se necessário).

---

Autor 

Gabriel Barbosa Zanon