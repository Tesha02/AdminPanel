import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import useProduct from "../hooks/useProduct";
import { getProductById, updateProduct } from "../services/productsService";

const ProductEdit = () => {
  const id = Number(useParams().id);
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState(null);

  const { product, error, loading, refetch } = useProduct(() => getProductById(id));

  if (loading) return <p>Ucitavanje...</p>;

  if (error) {
    return (
      <>
        <p>Greska: {error}</p>
        <button onClick={refetch}>Pokusaj opet</button>
        <br />
        <Link to="/products">Nazad</Link>
      </>
    );
  }

  if (!product || !product.id) return null;

  const initialValues = {
    name: product.name ?? "",
    price: product.price ?? 0,
    category: product.category ?? "",
    inStock: !!product.inStock
  };

  const handleUpdate = async (updatedProduct) => {
    try {
      setSubmitError(null);
      await updateProduct(id, updatedProduct);
      navigate(`/products/${id}`, { replace: true });
    } catch (err) {
      setSubmitError(err.message);
    }
  };

  return (
    <div>
      <h1>Edit product</h1>
      {submitError && <p style={{ color: "red" }}>{submitError}</p>}
      <ProductForm initialValues={initialValues} Fn={handleUpdate} />
    </div>
  );
};

export default ProductEdit;
