
const productsService = async() => {
  const resp=await fetch("http://localhost:3001/products");
    if(!resp.ok) {
        throw new Error("Greska pri povlacenju proizvoda");
    }

    return resp.json();

}

export default productsService
