import { uuid } from "uuidv4";

interface IProduct {
  id: string;
  name: string;
  quantity: number;
}

export class Trolley {
  public readonly id: string;
  public products: IProduct[];

  constructor(props: Omit<Trolley, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
