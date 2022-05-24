type Contributor_Login = {
  email: string;
  pass_word: string;
};

export class ContributorSignInService {
  async execute({ email, pass_word }: Contributor_Login) {}
}
