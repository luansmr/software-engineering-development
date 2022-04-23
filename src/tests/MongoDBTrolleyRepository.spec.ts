import { Trolley } from "../entities/Trolley";
import { MongoDBTrolleyRepository } from "../repositories/MongoDBTrolleyRepository";

const products = [];

describe("MongoDBTrolleyRepository", () => {
  it("The trolley has been saved to the database.", async () => {
    const trolley = new Trolley({ products });
    const mongoDBTrolleyRepository = new MongoDBTrolleyRepository();
    const data = await mongoDBTrolleyRepository.save(trolley);

    expect(data.id).not.toBeNull();
  });
});
