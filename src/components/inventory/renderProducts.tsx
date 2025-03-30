import Checkbox from "../common/checkbox.tsx";

interface ProductElement {
  name: string;
  category: string;
  entire: number;
  price: number;
  ID: string;
  checked?: boolean;
}

interface Product {
  products: ProductElement[];
  onSelectionChange: (updateProducts: ProductElement[]) => void;
}

function RenderProducts({ products, onSelectionChange }: Product) {
  const handleCheckboxChange = (index: number, checked: boolean) => {
    if (onSelectionChange) {
      const updatedProducts = products.map((product, i) =>
        i === index ? { ...product, checked } : product
      );
      onSelectionChange(updatedProducts);
    }
  };

  return (
    <>
      {products.map((product, index) => {
        const checked = product.checked || false;

        return (
          <tr
            key={product.ID}
            className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 has-checked:bg-blue-400/35 has-checked:text-white has-checked:dark:text-white `}
            onClick={() => {
              handleCheckboxChange(index, !checked);
            }}
          >
            <td className="min-w-min max-w-[10ox] text-center">
              <Checkbox
                ID={product.ID}
                checked={product.checked || false}
                onChange={(checked) => handleCheckboxChange(index, checked)}
              />
            </td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {product.name}
            </th>
            <td className="px-6 py-4">{product.category}</td>
            <td className="px-6 py-4">{product.entire}</td>
            <td className="px-6 py-4">
              {new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
              }).format(product.price)}
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default RenderProducts;
