import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import ProductCreate from "./pages/ProductCreate";
import ProductDetails from "./pages/ProductDetails";
import ProductEdit from "./pages/ProductEdit";



function App() {

    return (
      <>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/new" element={<ProductCreate/>} />
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
            <Route path='/products/:id/edit' element={<ProductEdit/>}></Route>
          </Route >
          <Route path="*" element={<h2>Stranica nije pronadjena</h2>} />

        </Routes>
      </>
    )
}

export default App
