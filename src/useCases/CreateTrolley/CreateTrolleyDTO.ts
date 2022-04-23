interface IProductDTO {
  id: string;
  name: string;
  quantity: number;
}

export interface ICreateTrolleyDTO {
  products: IProductDTO[];
}
