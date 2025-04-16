import { useState } from "react";
import RenderProducts from "./components/renderProducts";

function Product() {
  const [sortBy, setSortBy] = useState("name");
  const [orderAsc, setOrderAsc] = useState(true);
  const [pagina, setPagina] = useState(1);
  const [byPage, setByPage] = useState(10);

  const handlerSort = (campo) => {
    if (sortBy === campo) {
      setOrderAsc(!orderAsc);
    } else {
      setSortBy(campo);
      setOrderAsc(true);
    }
    setPagina(1);
  };

  return (
    <>
      {/* Tabla */}
      <div className="max-h-[80vh] overflow-y-auto overflow-x-auto no-scrollbar">
        <table className="min-w-full text-sm text-left text-gray-400 dark:text-gray-300">
          <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-400 dark:bg-[rgb(62,67,80)] dark:text-gray-300">
            <tr>
              <th
                onClick={() => handlerSort("name")}
                className="px-4 py-2 cursor-pointer whitespace-nowrap"
              >
                Producto {sortBy === "name" ? (orderAsc ? "↑" : "↓") : ""}
              </th>
              <th
                onClick={() => handlerSort("category")}
                className="px-4 py-2 cursor-pointer whitespace-nowrap"
              >
                Categoría {sortBy === "category" ? (orderAsc ? "↑" : "↓") : ""}
              </th>
              <th
                onClick={() => handlerSort("sales")}
                className="px-4 py-2 cursor-pointer whitespace-nowrap"
              >
                Vendidos {sortBy === "sales" ? (orderAsc ? "↑" : "↓") : ""}
              </th>
              <th
                onClick={() => handlerSort("entire")}
                className="px-4 py-2 cursor-pointer whitespace-nowrap"
              >
                Total {sortBy === "entire" ? (orderAsc ? "↑" : "↓") : ""}
              </th>
              <th
                onClick={() => handlerSort("price")}
                className="px-4 py-2 cursor-pointer whitespace-nowrap"
              >
                Precio {sortBy === "price" ? (orderAsc ? "↑" : "↓") : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            <RenderProducts byPage={byPage} />
          </tbody>
        </table>
      </div>

      {/* Paginación */}
      <div className="flex justify-center items-center gap-4 py-4 dark:text-white">
        <button
          onClick={() => setPagina((p) => Math.max(p - 1, 1))}
          disabled={pagina === 1}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded disabled:opacity-50"
        >
          Anterior
        </button>
        <span>Página {pagina}</span>
        <button
          onClick={() => setByPage((p) => p + 10)}
          className="px-3 py-1 bg-gray-300 dark:bg-gray-600 rounded"
        >
          Siguiente
        </button>
      </div>
    </>
  );
}

export default Product;
