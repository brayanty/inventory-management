import RenderProducts from "./renderProducts";
import { useEffect, useState } from "react";
import ShoppingSelect from "./shoppingSelect.tsx";
import { useShoppingCart } from "../context/ShoppingCartProvider.tsx";
// import { ShoppingPreview } from "./shoppingCart";

interface ProductElement {
  name: string;
  category: string;
  entire: number;
  price: number;
  ID: string;
  checked?: boolean;
}

interface SelectedProduct {
  name: string;
  price: number;
  category: string;
  ID: string;
}

function useProducts() {
  const { products, setProducts } = useShoppingCart();
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );

  const handleSelectionChange = (updatedProducts: ProductElement[]) =>
    setProducts(updatedProducts);

  useEffect(() => {
    const getSelectionProducts = () => {
      const newSelectProducts = products
        .filter((product) => product.checked)
        .map((product) => ({
          name: product.name,
          price: product.price,
          category: product.category,
          ID: product.ID,
        }));
      setSelectedProducts(newSelectProducts);
    };

    getSelectionProducts();
  }, [products]);

  return { products, selectedProducts, handleSelectionChange };
}

function Product({ className }: { className: string }) {
  const { products, selectedProducts, handleSelectionChange } = useProducts();

  return (
    <div
      className={`relative overflow-y-scroll overflow-hidden h-full rounded-2xl ${className}`}
    >
      <div className="w-full flex flex-col">
        <table className="w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-300 rounded-2xl">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
            <tr>
              <th scope="col" className="text-center">
                Selecionar
              </th>
              <th scope="col" className="px-6 py-3">
                Producto
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
            </tr>
          </thead>
          <tbody>
            <RenderProducts
              products={products}
              onSelectionChange={handleSelectionChange}
            />
          </tbody>
        </table>
        {selectedProducts.length > 0 && (
          <ShoppingSelect products={selectedProducts} />
        )}
      </div>
    </div>
  );
}

export default Product;
