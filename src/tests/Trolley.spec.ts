import { Trolley } from "../entities/Trolley";

const products = [];

describe("Trolley", () => {
  it("The trolley has been created.", async () => {
    const data = new Trolley({ products });

    expect(data.id).not.toBeNull();
  });
});
