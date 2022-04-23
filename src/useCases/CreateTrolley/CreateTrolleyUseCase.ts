import { ITrolleysRepository } from "../../repositories/ITrolleysRepository";
import { ICreateTrolleyDTO } from "./CreateTrolleyDTO";
import { Trolley } from "../../entities/Trolley";

export class CreateTrolleyUseCase {
  private trolleysRepository: ITrolleysRepository;

  constructor(trolleysRepository: ITrolleysRepository) {
    this.trolleysRepository = trolleysRepository;
  }

  async execute(data: ICreateTrolleyDTO) {
    if (!data.products?.length) {
      throw new Error("The trolley needs at least one product!");
    }

    const trolley = new Trolley(data);

    return await this.trolleysRepository.save(trolley);
  }
}
