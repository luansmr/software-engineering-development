import { Trolley } from "../entities/Trolley";

export interface ITrolleysRepository {
  save(trolley: Trolley): Promise<Trolley>;
}
