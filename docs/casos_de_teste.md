# Casos de Teste de Software

A primeira parte do sistema consiste no **banco de dados** e **backend**, responsáveis pela lógica de negócios e armazenamento.  
A segunda parte é o **frontend**, que fornece a interface para interação do usuário.

Os testes de integração entre banco de dados e backend foram realizados utilizando a ferramenta **Insomnia**, conforme ilustrado abaixo:

![Insomnia](./teste1incomnia.png)

Caso deseje realizar os testes manualmente, importe o arquivo **`./insomnia_2025-11-10.yaml`** no Insomnia.  
**Atenção:** o backend deve estar em execução para que os testes funcionem corretamente.

---

## ✔️ Requisitos Funcionais (Checklist — Testes Ponto a Ponto)

### **RF01 – Interface de Autenticação**
- [x] Solicitar email e senha  
- [x] Validar as credenciais do usuário  
- [x] Redirecionar para a interface principal do sistema  

![Screenshot 1](./screenshot01.png)

---

### **RF02 – Interface Principal do Sistema**
- [x] Exibir menu com opções **Produtos** e **Produção**  
- [x] Incluir botão **Sair**  

![Screenshot 2](./screenshot02.png)

---

### **RF03 – Gerenciamento de Produtos**
- [x] Exibir lista de produtos cadastrados  
- [x] Permitir adicionar produtos com:
  - nome  
  - descrição  
  - quantidade  
  - estoque mínimo  
  - custo unitário  
- [x] Permitir editar produtos existentes  
- [x] Permitir excluir produtos  
- [x] Implementar busca por nome  

![Screenshot 3](./screenshot03.png)  
![Screenshot 4](./screenshot04.png)

---

### **RF04 – Gerenciamento de Produção**
- [x] Exibir produtos em ordem alfabética  
- [x] Destacar produtos abaixo do estoque mínimo  
- [x] Registrar ordens de produção (entrada no estoque)  
- [x] Registrar pedidos concluídos (saída do estoque)  
  - [x] Verificar disponibilidade antes da saída  
  - [x] Exibir erro se o estoque for insuficiente  

![Screenshot 5](./screenshot05.png)  
![Screenshot 6](./screenshot06.png)

---

## Resumo

Os testes executados comprovam que todas as funcionalidades essenciais do sistema estão implementadas e funcionam conforme os requisitos.  
A autenticação é segura, o menu principal é intuitivo e os módulos de **Produtos** e **Produção** operam com consistência, incluindo validações, atualizações de estoque e alertas automáticos.

As evidências apresentadas demonstram que o sistema atende plenamente às necessidades operacionais.

