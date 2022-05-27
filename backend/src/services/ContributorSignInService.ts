import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import dotenv from "dotenv";
import { ContributorRepository } from "../repositories/ContributorRepository";

dotenv.config();

type Contributor_Login = {
  email: string;
  pass_word: string;
};

export class ContributorSignInService {
  token!: string;
  check!: string;

  async execute({ email, pass_word }: Contributor_Login) {
    const repository = ContributorRepository();

    const search = await repository.find({
      select: { email: true },
      where: { email: `${email}` },
    });

    if (search.find(async (data) => data.email)) {
      search.find(async (data) => {
        this.check = data.password;
      });

      const checkPassword = await compare(pass_word, this.check);

      if (!checkPassword) {
        return "Email ou senha estão incorretos ☹️";
      } else {
        search.find(async (data) => {
          const token_jwt = sign({ id: data.id }, `${process.env.SECRET_JWT}`, {
            subject: data.nickname,
            expiresIn: "1d",
          });

          this.token = token_jwt;
        });

        return `${this.token}`;
      }
    } else {
      return "Esse(a) contribuidor(a) ainda não está cadastrado(a)";
    }
  }
}
