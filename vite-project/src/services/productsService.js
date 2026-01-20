
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

export { productsService, deleteProduct };