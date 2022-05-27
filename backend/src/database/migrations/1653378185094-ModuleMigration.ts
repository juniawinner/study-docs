import { MigrationInterface } from "typeorm";
import { MongoQueryRunner } from "typeorm/driver/mongodb/MongoQueryRunner";

export class ModuleMigration1653378185094 implements MigrationInterface {
  public async up(mongoQueryRunner: MongoQueryRunner): Promise<void> {
    const createIndex = await mongoQueryRunner.createCollectionIndex(
      "module",
      { name: 1, "lessons.name": 1, "lessons.conceitual_map": 1 },
      { unique: true }
    );
    console.log("Created indexes =>", createIndex);

    const insertResult = await mongoQueryRunner.insertMany("module", [
      {
        name: "TypeORM",
        description:
          "Vamos aprofundar nossos conhecimentos sobre Mapeamento Objeto-Relacional (ORM) com o TypeORM 🚀, que integra o conjunto de ORMs compatíveis com a plataforma Node.JS, a biblioteca React Native, entre outros.",
        total_lessons: 1,
        lessons: [
          {
            name: "Migrations",
            conceitual_map:
              "https://www.canva.com/design/DAFBb_5N9e4/kOJakuTt04zAFYIszJajow/edit?utm_content=DAFBb_5N9e4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            contributor_nickname: "juniawinner",
            registration_date: Date(),
          },
        ],
      },
      {
        name: "Azure",
        description:
          "Microsoft Azure é uma excelente opção para hospedagem de projetos pessoais, principalmente para devs iniciantes💙, porque possui tutoriais didáticos e vários recursos acessíveis no nível gratuito.",
        total_lessons: 1,
        lessons: [
          {
            name: "Azure App Service",
            conceitual_map:
              "https://www.canva.com/design/DAFBbttxXLY/Bn2-IV_zLTMHzG4tmVDLFQ/edit?utm_content=DAFBbttxXLY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            contributor_nickname: "juniawinner",
            registration_date: Date(),
          },
        ],
      },
      {
        name: "Vue.JS",
        description:
          "Famosa por seu alto nível de reatividade, isto é, a sensibilidade de rastrear as mudanças de estado do JavaScript e atualizar o DOM. Claro que você sabe qual é a ferramenta que estamos falando: Vue.JS💚!",
        total_lessons: 1,
        lessons: [
          {
            name: "Provide and Inject",
            conceitual_map:
              "https://www.canva.com/design/DAFBmVjzMIs/NWMsLIl8Z19op4Bp3lJcvw/edit?utm_content=DAFBmVjzMIs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            contributor_nickname: "juniawinner",
            registration_date: Date(),
          },
        ],
      },
      {
        name: "Node.JS",
        description:
          "Não há dúvidas que Node.JS é o “queridão” da comunidade dev✨. Afinal, a execução de códigos JavaScript fora do ambiente do Browser é sensacional para o Desenvolvimento de Software, a exemplo de criação de apps para desktop, como o editor Atom.",
        total_lessons: 1,
        lessons: [
          {
            name: "Módulo URL",
            conceitual_map:
              "https://www.canva.com/design/DAFBc5CO5mI/Dxe5caIHiumoNpD936ITXQ/edit?utm_content=DAFBc5CO5mI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            contributor_nickname: "juniawinner",
            registration_date: Date(),
          },
        ],
      },
      {
        name: "MongoDB",
        description:
          "Sem medo de retornar new Error(☹️), o MongoDB pode ser considerado um dos databases NoSQL mais usados na atualidade. Porque qualidades tem de sobra: versátil, orientado a documentos, salva diferentes tipos de dados nas collections, suporta o armazenamento de grandes escalas de informações. Enfim! Segue esse módulo e você vai conhecer muito mais!",
        total_lessons: 2,
        lessons: [
          {
            name: "Relacionamento de dados",
            conceitual_map:
              "https://embed.coggle.it/diagram/YozBdQ8o3JWkM_Yq/t/mongodb-relacionamento-de-dados/817bfa5c6c5d3b077146c7c3ace3c84405484e4b6b1d1da82f8e54a2463cd85f",
            contributor_nickname: "juniawinner",
            registration_date: Date(),
          },
          {
            name: "Índices",
            conceitual_map:
              "https://www.canva.com/design/DAFBc02b_B8/-iRPB8lvYFbH1qVHoIiTcA/edit?utm_content=DAFBc02b_B8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
            contributor_nickname: "juniawinner",
            registration_date: Date(),
          },
        ],
      },
    ]);
    console.log("Inserted documents =>", insertResult);
  }

  public async down(mongoQueryRunner: MongoQueryRunner): Promise<void> {}
}
