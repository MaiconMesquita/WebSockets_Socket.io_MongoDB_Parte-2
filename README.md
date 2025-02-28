﻿# AluraDocs: Praticando com WebSockets (Parte 2)

## Sobre o Projeto 🚀

Este projeto é a segunda parte do **AluraDocs**, um organizador de arquivos de texto que permite colaboração em tempo real. Nesta etapa, o foco foi na implementação de funcionalidades de autenticação e controle de acesso, adicionando mais segurança e robustez à aplicação. O curso utilizado como base foi **"WebSockets: implemente autenticação e avance no Socket.IO"**, da Alura.

## Objetivo 🎯

O objetivo principal desta segunda parte foi:

- Implementar cadastro e autenticação de usuários.
- Controlar acessos ao servidor utilizando middlewares.
- Gerenciar informações dos sockets de maneira local.

## Funcionalidades Implementadas ✨

1. **Cadastro e Login de Usuários:**

   - Fluxo completo para registro e autenticação de usuários.
   - Armazenamento seguro de senhas utilizando criptografia.
   - Geração e armazenamento de JWT (JSON Web Token) nos cookies do cliente.

2. **Visualização de Usuários no Documento:**

   - Lista em tempo real dos usuários conectados a determinado documento.

3. **Restrições de Acesso:**

   - Controle para impedir que o mesmo usuário abra duas abas com o mesmo documento simultaneamente.

4. **Segurança e Controle:**
   - Uso de middlewares para validar a autenticidade dos clientes.
   - Namespace no Socket.IO para registro de middlewares.

## Tecnologias e Ferramentas Utilizadas 🛠️

- **Node.js**
- **JavaScript**
- **Socket.IO**
- **JWT (JSON Web Token)**
- **MongoDB**

## Aprendizados e Desafios 💡

Nesta etapa do projeto, os principais aprendizados foram:

1. **Implementação de Cadastro e Login:**

   - Criação de senhas criptografadas e armazenamento seguro.
   - Autenticação de usuários e geração de JWT no servidor.
   - Armazenamento do JWT em cookies para autenticação persistente.

2. **Controle de Acessos:**

   - Uso de middlewares para validar usuários antes de permitir acesso ao servidor.
   - Implementação de namespaces para organização e registro de middlewares no Socket.IO.

3. **Gerenciamento Local de Informações:**
   - Criação de uma lista local no servidor para gerenciar as conexões associadas aos documentos.
   - Uso do objeto `socket.data` para armazenar informações específicas de cada conexão.

## Observações 🌟

- A parte de front-end (telas de cadastro, login e demais interfaces) foi totalmente fornecida pela Alura, enquanto o back-end foi implementado durante o curso.

---

## Sobre o Autor 👤

Este projeto foi desenvolvido por mim, Maicon Mesquita, como parte dos estudos nos cursos da Alura sobre WebSockets.
