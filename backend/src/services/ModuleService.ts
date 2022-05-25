import { ModuleDTO } from "../dtos/ModuleDTO";
import { ModuleRepository } from "../repositories/ModuleRepository";

export class ModuleService {
  async execute() {
    const repository = ModuleRepository();

    const index = await repository.createCollectionIndex({
      name: 1,
    });

    const search = await repository.find({
      order: { name: "ASC" },
    });

    let promises: any[] = [];

    search.forEach(async (data) => {
      let dto: ModuleDTO = {
        id: data.id,
        image: data.image,
        Modulo: data.name,
        description: data.description,
        Total: data.total_lessons,
      };

      promises.push(dto);
    });

    await Promise.all(promises)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        console.error("Ops! Erro durante o processo:", err);
      });

    return promises;
  }
}
