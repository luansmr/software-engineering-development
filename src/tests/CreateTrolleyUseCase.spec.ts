import { Trolley } from "../entities/Trolley";
import { MongoDBTrolleyRepository } from "../repositories/MongoDBTrolleyRepository";
import { CreateTrolleyUseCase } from "../useCases/CreateTrolley/CreateTrolleyUseCase";

const products = [
  { id: "3123", name: "Notebook Dell", quantity: 1 },
  { id: "6564", name: "Máquina de Lavar", quantity: 5 },
  { id: "986", name: "Fone de Ouvido", quantity: 1 },
  { id: "8675", name: "Aspirador de Pó", quantity: 7 },
];

describe("CreateTrolleyUseCase", () => {
  it("The trolley has been validated.", async () => {
    const trolley = new Trolley({
      products,
    });
    const mongoDBTrolleyRepository = new MongoDBTrolleyRepository();
    const createTrolleyUseCase = new CreateTrolleyUseCase(
      mongoDBTrolleyRepository
    );
    const data = await createTrolleyUseCase.execute(trolley);

    expect(data.id).not.toBeNull();
  });
});
