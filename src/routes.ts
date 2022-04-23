import { Router } from "express";
import { createTrolleyController } from "./useCases/CreateTrolley";

const router = Router();

router.post("/trolley", (request, response) => {
  return createTrolleyController.handle(request, response);
});

export { router };
