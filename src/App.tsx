import { useState } from "react";

import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";

import { products } from "./data/products";

import type {
  Product,
  CreateProduct,
} from "./types/product";

function App() {
  const [productList, setProductList] =
    useState<Product[]>(products);

  const [showForm, setShowForm] =
    useState(false);

  const [editingProduct, setEditingProduct] =
    useState<Product | null>(null);

  // CREATE
  const handleCreateProduct = (
    product: CreateProduct
  ) => {
    const newProduct: Product = {
      id: `P${Date.now()}`,
      ...product,
    };

    setProductList((currentProducts) => [
      ...currentProducts,
      newProduct,
    ]);

    setShowForm(false);
  };

  // EDIT
  const handleEditProduct = (
    product: Product
  ) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  // UPDATE
  const handleUpdateProduct = (
    product: CreateProduct
  ) => {
    if (!editingProduct) {
      return;
    }

    setProductList((currentProducts) =>
      currentProducts.map((currentProduct) =>
        currentProduct.id === editingProduct.id
          ? {
              ...currentProduct,
              ...product,
            }
          : currentProduct
      )
    );

    setEditingProduct(null);
    setShowForm(false);
  };

  // DELETE
  const handleDeleteProduct = (
    id: string
  ) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) {
      return;
    }

    setProductList((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== id
      )
    );
  };

  // OPEN CREATE FORM
  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  // CANCEL FORM
  const handleCancel = () => {
    setEditingProduct(null);
    setShowForm(false);
  };

  return (
    <div className="app">

        {!showForm && (
          <Products
            products={productList}
            onAddProduct={handleAddProduct}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
        )}

        {showForm && (
          <AddProduct
            product={editingProduct}
            onCreate={handleCreateProduct}
            onUpdate={handleUpdateProduct}
            onCancel={handleCancel}
          />
        )}
      </div>
  );
}

export default App;