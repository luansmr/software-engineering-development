import { ITrolleysRepository } from "./ITrolleysRepository";
import { Trolley } from "../entities/Trolley";

/// /////////////////////////////
// Professor: This class was  //
// created just to illustrate //
// the Database service.      //
/// /////////////////////////////
export class MongoDBTrolleyRepository implements ITrolleysRepository {
  private trolley: Trolley;

  async save(trolley: Trolley): Promise<Trolley> {
    return trolley;
  }
}
