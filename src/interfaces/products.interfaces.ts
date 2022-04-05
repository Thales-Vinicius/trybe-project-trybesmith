export interface Products {
  id?: number,
  name: string,
  amount: string,
  orderId?: number
}

export interface NewProduct {
  item: {
    id: number,
    name: string,
    amount: string
  }
}
