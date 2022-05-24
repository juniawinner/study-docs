import { hash } from "bcryptjs";
import { ContributorRepository } from "../repositories/ContributorRepository";

type Contributors = {
  email: string;
  github: string;
  pass_word: string;
};

export class ContributorSignUpService {
  async execute({ email, github, pass_word }: Contributors) {
    const repository = ContributorRepository();

    const search = await repository.find({
      select: { email: true },
      where: { email: `${email}` },
    });

    if (email.length < 8 || !email.includes("@") || !email.includes(".")) {
      return "Email inválido ☹️";

    } else if (search.find(async (data) => data.email)) {
      return "Já existe um(a) contribuidor(a) cadastrado(a) com o email informado!";
      
    } else {
      let createNickname = `${github}`;
      let cN = new URL(createNickname);
      let path = cN.pathname;
      let organize = path.replace(/\//g, "");
      let nickname = organize;

      let password = await hash(pass_word, 10);

      let contribuidor = repository.create({
        email,
        password,
        github,
        nickname,
      });

      await repository.save(contribuidor);

      return "Contribuidor(a) cadastrado(a) com sucesso 🚀";
    }
  }
}
