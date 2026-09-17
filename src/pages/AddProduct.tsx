import { useState } from "react";

import type {
  ChangeEvent,
  FormEvent,
} from "react";

import type {
  Product,
  CreateProduct,
} from "../types/product";

import { PRODUCT_CATEGORIES } from "../types/product";

interface AddProductProps {
  product: Product | null;
  onCreate: (product: CreateProduct) => void;
  onUpdate: (product: CreateProduct) => void;
  onCancel: () => void;
}

const emptyProduct: CreateProduct = {
  name: "",
  category: "Electronics",
  price: 0,
  stock: 0,
};

function AddProduct({
  product,
  onCreate,
  onUpdate,
  onCancel,
}: AddProductProps) {
  const [formState, setFormState] = useState(() => ({
    product,
    data: product
      ? {
          name: product.name,
          category: product.category,
          price: product.price,
          stock: product.stock,
        }
      : emptyProduct,
  }));

  const formData =
    formState.product === product
      ? formState.data
      : product
        ? {
            name: product.name,
            category: product.category,
            price: product.price,
            stock: product.stock,
          }
        : emptyProduct;

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;

    setFormState((current) => ({
      product,
      data: {
        ...(current.product === product
          ? current.data
          : formData),
        [name]:
          name === "price" ||
          name === "stock"
            ? Number(value)
            : value,
      },
    }));
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (formData.name.trim() === "") {
      alert("Product name is required.");
      return;
    }

    if (formData.price <= 0) {
      alert("Price must be greater than 0.");
      return;
    }

    if (formData.stock < 0) {
      alert("Stock cannot be negative.");
      return;
    }

    const productData: CreateProduct = {
      ...formData,
      name: formData.name.trim(),
    };

    if (product) {
      onUpdate(productData);
    } else {
      onCreate(productData);
    }
  };

  const isEditing = product !== null;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1>
            {isEditing
              ? "Update Product"
              : "Add Product"}
          </h1>

          <p>
            {isEditing
              ? "Update product details"
              : "Add a new product to your inventory"}
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="product-form"
      >
        <div className="form-group">
          <label>Product Name</label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
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

        <div className="form-row">
          <div className="form-group">
            <label>Price</label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
            />
          </div>

          <div className="form-group">
            <label>Stock</label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              min="0"
            />
          </div>
        </div>

        <div className="form-actions">
          <button type="submit">
            {isEditing
              ? "Update Product"
              : "Add Product"}
          </button>

          <button
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;