
class ProductManager {
    constructor() {
        this.getProducts = [];
    }
    addPtoducts(title, description, price, thumbnail, stock = 25) {
       const producto ={
        id: this.#getMaxId() + 1,
        title,
        description,
        price,
        thumbnail,
        code: [],
        stock,
    };
    this.getProducts.push(producto);
    console.log(this.getProducts);
}
    getProductById(idProducto, idNCode) {
    const producto = this.#getProducts(idProducto);
    if (producto) {
      if (!producto.code.includes(idNCode)) producto.code.push(idNCode);
      console.log(this.getProducts);
    } else {
      console.log("El producto no existe");
    }
  }

  
#getMaxId() {
    let maxId = 0;
    this.getProducts.map((producto) => {
      if (producto.id > maxId) maxId = producto.id;
    });
    return maxId;
  }

  #getProducts(idProducto) {
    return this.getProducts.find((producto) => producto.id === idProducto);
  }  

}

const productManager = new ProductManager();

productManager.addPtoducts("Mesa de comedor", "mesa de madera", 1400, "Sin imagen", 25);
productManager.addPtoducts("Escritorio", "Producto de caoba", 2000, "Sin imagen", 30);
productManager.addPtoducts("Sofa de sala", "Producto", 2000, "Sin imagen", 40);
productManager.getProductById(1, "B455")
productManager.getProductById(4, "D255");
