# **🚀 Study Docs 📝** - Compartilhando conhecimento, incentivando a colaboração!

[![Vídeo de demonstação do projeto](https://ik.imagekit.io/x4ikoq975/Study_Docs/capa_hIrM_qxVF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653789580032)](https://clipchamp.com/watch/dt8SfGSRCF5)

<p align="center">
<img src="https://img.shields.io/github/license/juniawinner/study-docs?style=plastic" alt="Badge License MIT">
<img src="https://img.shields.io/github/stars/juniawinner/study-docs?style=plastic" alt="Badge Stars on GitHub">
</p>

# 📜 Índice

1. [Sobre o projeto](#-sobre-o-projeto)
1. [Desafios e Soluções](#-desafios-e-soluções)
1. [Funcionalidades](#-funcionalidades)
1. [Design Responsivo](#-design-responsivo)
1. [Mapas Conceituais](#-mapas-conceituais)
1. [Tecnologias utilizadas](#-tecnologias-utilizadas)
1. [Como baixar o projeto](#-como-baixar-o-projeto)
1. [Autora](#-autora)

# 🔖 Sobre o projeto

Com layout extrovertido através de cores e textos atraentes, o site é destinado aos estudantes de Desenvolvimento de Software. Mediante a didática de Mapas Conceituais, elaborados com base na documentação oficial de algumas ferramentas, as aulas sintetizam os principais conceitos e o funcionamento de *frameworks*, *cloud computing*, *ORMs* e *databases*, a exemplo do Vue.JS, Azure, TypeORM e MongoDB.

Além disso, o projeto incentiva o cadastramento de Contribuidores(as) para construção de novos Mapas Conceituais, fortalecendo, assim, o compartilhamento de experiência entre a comunidade dev❤️‍🔥!

O front-end é organizado em *pages* e *components* do React.JS, ao passo que o back-end foi desenvolvido com Node/Express e no formato de API/REST, seguindo os princípios da Arquitetura em Camadas. Ambos os lados, cliente e servidor, foram codificados com TypeScript.

![Comunicação entre cliente e servidor](https://ik.imagekit.io/x4ikoq975/Study_Docs/front-back_xa5QLK9sR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653750335227)

Para a modelagem de dados no MongoDB, o projeto organiza a *collection Module em documents*, que são um conjunto de Aulas sobre determinada ferramenta (por exemplo, Módulo Azure). Nesse sentido, a *entidade Lesson são subdocuments* e contém o Mapa Conceitual que explica alguma funcionalidade do Módulo (por exemplo, Aula sobre Azure App Service). Esse é o modelo técnico de incorporação de dados, também conhecido como modelo desnormalizado.

No que tange os dados da *collection Contributor*, utiliza-se a modelagem de referência ou normalizada. Ou seja, a informação *nickname*, gerada durante o cadastro de contribuidores(as), é a referência da entidade *Contributor* no array *Lesson*, que faz parte da *collection Module*.

![Collection Module e subdocuments Lesson](https://ik.imagekit.io/x4ikoq975/Study_Docs/mod-less_--ou9-cmJ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653748400110)

A consequência é a interligação de dados, que é diferente do Modelo de Relacionamentos do SQL, porque não há chaves primárias e estrangeiras para relacionar as informações. No NoSQL, especialmente em *databases* baseados em documentos, como o MongoDB, implementa-se a referência de dados de uma entidade (Contributor) em outra (Lesson), com o objetivo de interligar informações relevantes. Por exemplo, a contribuidora com nickname “juniawinner” foi quem escreveu a Aula sobre “Índices” do Módulo “MongoDB”.

![Collection Contributor](https://ik.imagekit.io/x4ikoq975/Study_Docs/contrib_UEJuSKXBD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653748400044)

Portanto, a principal aprendizagem do projeto Study Docs são as diferenças que existem na Modelagem de Dados em databases SQL e NoSQL. Ademais, proporcionou a minha primeira experiência de desenvolvimento com token JWT. A imagem abaixo mostra o *service* responsável pelo login do(a) contribuidor(a), além de gerar o token que é retornado ao cliente, caso a autenticação seja realizada com sucesso.

![Código do ContributorSignInService](https://ik.imagekit.io/x4ikoq975/Study_Docs/serv-tok_xaLXt87pR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653752271134)

Por conseguinte, essa imagem é a depuração do token gerado após o login bem-sucedido, executado através do Postman:

![Depuração do Token JWT](https://ik.imagekit.io/x4ikoq975/Study_Docs/JWT_G3ba0tHO-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653752298595)

No entanto, o projeto ainda não está finalizado, pois existem alguns desafios que vão ser superados.

# 🎯 Desafios e Soluções

- Desenvolver o código para guardar o token JWT, gerado pelo servidor no momento de login do(a) contribuidor(a) na página do site. A solução é utilizar o Armazenamento Local do lado do cliente, que deve comunicar-se com o servidor através do token válido, reenviando o token a cada requisição as rotas privadas do API/REST, com o objetivo de autorizar o exercício das tarefas de contribuidor(a).

- Criar o front-end do dashboard de Contribuidores(as), que é o espaço reservado para pessoas autorizadas ao exercício de criar, editar, excluir e listar os Mapas Conceituais.

- Codificar os endpoints PUT e DELETE, para que o(a) contribuidor(a) manipule os Mapas Conceituais de que seja autor(a). No momento, apenas os endpoints GET e POST foram desenvolvidos, para listar e criar novos Módulos e Aulas.

# 🛠️ Funcionalidades

- `Compartilhar conhecimento entre desenvolvedores(as):` Principal objetivo do projeto.

- `Contribuições:` Projeto aberto para o cadastramento de novos(as) contribuidores(as).

- `Conteúdo técnico:` Site para estudar ferramentas de Desenvolvimento de Software através da documentação oficial.

- `Exemplos práticos:` Os Mapas Conceituais são sínteses de documentações, com design esquematizado e trechos de códigos para exemplificar os conceitos técnicos.

- `Mercado de Trabalho:` Aperfeiçoar a qualidade técnica dos(as) estudantes que almejam um emprego na área de Tecnologia.

- `Design Responsivo:` Técnica do *CSS Grid Layout*.

# 💻📱 Design Responsivo
 
## Layout mobile
 
![Homepage e Cards de Módulos](https://ik.imagekit.io/x4ikoq975/Study_Docs/lm2_g-dRScCec.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653781591308)
 
![Página de Aulas](https://ik.imagekit.io/x4ikoq975/Study_Docs/lm1_zpGBc5k2u.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653781591252)
 
## Layout desktop
 
![Homepage e Cards de Módulos](https://ik.imagekit.io/x4ikoq975/Study_Docs/f-d1_PoiPj01a4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653781031933)
 
![Página de Aulas](https://ik.imagekit.io/x4ikoq975/Study_Docs/f-d2_6SZuxxBSN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653781031898)

# 📝 Mapas Conceituais

Módulos|                     Aulas                     
-------|--------------------------------------------------------------------------
Azure  |[Azure App Service](https://www.canva.com/design/DAFBbttxXLY/Bn2-IV_zLTMHzG4tmVDLFQ/edit?utm_content=DAFBbttxXLY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)                          
MongoDB| 1. [Índices](https://www.canva.com/design/DAFBc02b_B8/-iRPB8lvYFbH1qVHoIiTcA/edit?utm_content=DAFBc02b_B8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) 2. [Relacionamentos de Dados](https://www.canva.com/design/DAFCAgfyq-w/T6nrk7U_zJNL0tecId4s7g/edit?utm_content=DAFCAgfyq-w&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
Node.JS|[Módulo URL](https://www.canva.com/design/DAFBc5CO5mI/Dxe5caIHiumoNpD936ITXQ/edit?utm_content=DAFBc5CO5mI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
TypeORM|[Migrations](https://www.canva.com/design/DAFBb_5N9e4/kOJakuTt04zAFYIszJajow/edit?utm_content=DAFBb_5N9e4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)               
Vue.JS |[Provide and Inject](https://www.canva.com/design/DAFBmVjzMIs/NWMsLIl8Z19op4Bp3lJcvw/edit?utm_content=DAFBmVjzMIs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)                                                     

# 🚀 Tecnologias utilizadas

BACK-END                                     |                      FRONT-END                     
---------------------------------------------|----------------------------------------------------
[NodeJS](https://nodejs.org/en/)             |[ReactJS](https://pt-br.reactjs.org/)                          
[Express](https://expressjs.com/pt-br/)      |[TypeScript](https://www.typescriptlang.org/)       
[TypeScript](https://www.typescriptlang.org/)|[HTML and CSS](https://developer.mozilla.org/pt-BR/)
[TypeORM](https://typeorm.io/)               |[Axios](https://axios-http.com/ptbr/)               
[MongoDB](https://www.mongodb.com/pt-br)     |                                                    

# 🗂️ Como baixar o projeto

## Front-end

```bash
# clonar repositório
git clone https://github.com/juniawinner/study-docs

# entrar na pasta do projeto frontend
cd frontend

# instalar dependências
npm install

# executar o projeto
npm start
```

## Back-end

Pré-requisitos: NodeJS e NPM

```bash
# clonar repositório
git clone https://github.com/juniawinner/study-docs

# entrar na pasta do projeto backend
cd backend

# instalar dependências
npm install

# executar o projeto
npm run dev
```

# 👩🏾‍💻 Autora

Desenvolvido 💚 por Junia Winner

https://www.linkedin.com/in/junia-winner