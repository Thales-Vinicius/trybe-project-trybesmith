export interface IOrders {
  id: number,
  userId: number,
  product: number
}

export interface ListOrders {
  id?: number,
  userId: number,
  products: number[]
}