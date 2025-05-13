export class CartController {
  constructor() {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  getCart = () => JSON.parse(localStorage.getItem("cart")!) as number[];

  getProduct = (id: number) => this.getCart().filter((_id) => _id === id);

  addProduct = (id: number): void => {
    localStorage.setItem("cart", JSON.stringify([...this.getCart(), id]));
  };

  removeProduct = (id: number): void => {
    localStorage.setItem(
      "cart",
      JSON.stringify([...this.getCart().filter((_id) => _id !== id)])
    );
  };

  static count: number;
}
