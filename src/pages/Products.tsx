import { useState } from "react";

import type {
  Product,
  ProductCategory,
} from "../types/product";

import { PRODUCT_CATEGORIES } from "../types/product";

interface ProductsProps {
  products: Product[];
  onAddProduct: () => void;
  onEditProduct: (product: Product) => void;
  onDeleteProduct: (id: string) => void;
}

function Products({
  products,
  onAddProduct,
  onEditProduct,
  onDeleteProduct,
}: ProductsProps) {
  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState<ProductCategory | "all">("all");

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" ||
        product.category === category;

      return (
        matchesSearch && matchesCategory
      );
    }
  );

  return (
    <div className="page">
      {/* Header */}
      <div className="page-header">
        <div>
          <h1>Products</h1>

          <p>
            Manage your inventory products
          </p>
        </div>

        <button
          className="primary-button"
          onClick={onAddProduct}
        >
          + Add Product
        </button>
      </div>

      {/* Search and Filter */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          value={category}
          onChange={(event) =>
            setCategory(
              event.target.value as
                | ProductCategory
                | "all"
            )
          }
        >
          <option value="all">
            All Categories
          </option>

          {PRODUCT_CATEGORIES.map(
            (category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {/* Products Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredProducts.map(
              (product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>

                  <td>
                    {product.name}
                  </td>

                  <td>
                    {product.category}
                  </td>

                  <td>
                    ₹{product.price.toLocaleString()}
                  </td>

                  <td>
                    {product.stock}
                  </td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-button"
                        onClick={() =>
                          onEditProduct(product)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-button"
                        onClick={() =>
                          onDeleteProduct(
                            product.id
                          )
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>

        {filteredProducts.length === 0 && (
          <div className="empty-message">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;