export interface IProducts {
  id?: number,
  name: string,
  amount: string,
  orderId?: number
}

export interface INewProduct {
  item: {
    id: number,
    name: string,
    amount: string
  }
}
