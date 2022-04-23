import { MongoDBTrolleyRepository } from "../../repositories/MongoDBTrolleyRepository";
import { CreateTrolleyUseCase } from "./CreateTrolleyUseCase";
import { CreateTrolleyController } from "./CreateTrolleyController";

const mongoDBTrolleyRepository = new MongoDBTrolleyRepository();

const createTrolleyUseCase = new CreateTrolleyUseCase(mongoDBTrolleyRepository);

const createTrolleyController = new CreateTrolleyController(
  createTrolleyUseCase
);

export { createTrolleyUseCase, createTrolleyController };
