
const productsService = async() => {
  const resp=await fetch("http://localhost:3001/products");
    if(!resp.ok) {
        throw new Error("Greska pri povlacenju proizvoda");
    }

    return resp.json();

};

const deleteProduct = async(id) => {
  const resp=await fetch("http://localhost:3001/products/" + id, {method:"DELETE"})
  if(!resp.ok) {
    throw new Error("Greska pri brisanju");
  }

  return true;
};

const createProduct = async(product) => {
  const resp=await fetch("http://localhost:3001/products", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(product)
  })

  if(!resp.ok) {
    throw new Error("Greska pri kreiranju proizvoda");
  }

  return resp.json();
}

export { productsService, deleteProduct, createProduct };