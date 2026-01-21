import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductForm = ({initialValues, Fn}) => {
  const [form,setForm] = useState(initialValues)
  const [errors,setErrors] = useState({
    name: "",
    price: "",
    category: "",
    inStock: ""
  })

  const handleChange = (e) => {
    if(e.target.type==="checkbox") {
      setForm(prev=> ({...prev, [e.target.name]:e.target.checked}))
      return;
    }
    setForm(prev=> ({...prev, [e.target.name]:e.target.value}))
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      price: "",
      category: "",
      inStock: ""
    };

    if(form.name.trim().length<2) newErrors.name="Ime mora biti duze od 2 karaktera";
    if(form.price<=0) newErrors.price="Cena mora biti veca od 0";
    if(form.category.trim().length<2) newErrors.category="Lose ime za kategoriju";

    setErrors(newErrors);
    return Object.values(newErrors).every(e=>!e)
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!validateForm()) return;
    const p= {
      name:form.name,
      price: form.price,
      category: form.category,
      inStock: form.inStock
    } 
    await Fn(p);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name </label>
        <input name='name' type='text' onChange={handleChange} value={form.name}></input><br/>
        <p style={{ color: "red" }}>{errors.name}</p>

        <label htmlFor='price'>Price </label>
        <input name='price' type='number' onChange={handleChange} value={form.price}></input><br/>
        <p style={{ color: "red" }}>{errors.price}</p>

        <label htmlFor='category'>Category </label>
        <input name='category' type='text' onChange={handleChange} value={form.category}></input><br/>
        <p style={{ color: "red" }}>{errors.category}</p>

        <label htmlFor='inStock'>In Stock </label>
        <input name='inStock' type='checkbox' onChange={handleChange} checked={form.inStock}></input><br/>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ProductForm
