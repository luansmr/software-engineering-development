import { Request, Response } from "express";
import { CreateTrolleyUseCase } from "./CreateTrolleyUseCase";

export class CreateTrolleyController {
  private createTrolleyUseCase: CreateTrolleyUseCase;

  constructor(createTrolleyUseCase: CreateTrolleyUseCase) {
    this.createTrolleyUseCase = createTrolleyUseCase;
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const { products } = request.body;

    try {
      const trolley = await this.createTrolleyUseCase.execute({
        products,
      });

      return response.status(201).json(trolley);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
