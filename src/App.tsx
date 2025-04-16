import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Navbar from "./components/header/navbar.tsx";
import ProductsInventory from "./components/pages/productsInventory";
import Header from "./components/header/header.tsx";
import ShoppingCart from "./components/inventory/components/shoppingCart.tsx";
import { ShoppingCartIcon, X } from "lucide-react"; // Iconos
import TechnicalService from "./components/pages/technicalService.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-white">nada</div>,
  },
  {
    path: "/product",
    element: <ProductsInventory />,
  },
  {
    path: "/technicalservice",
    element: <TechnicalService />,
  },
]);

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div
      className="h-screen max-h-screen overflow-hidden grid gap-2 p-2 bg-[#1e1e1e]
      grid-cols-1 grid-rows-[auto_auto_1fr_auto]
      md:grid-cols-[200px_1fr_350px] md:grid-rows-[auto_1fr]"
    >
      {/* Navbar */}
      <aside className="row-start-1 md:row-span-2 md:col-start-1">
        <Navbar />
      </aside>

      {/* Header */}
      <header className="row-start-2 md:row-start-1 md:col-start-2">
        <Header />
      </header>

      {/* Main */}
      <main className="row-start-3 md:row-start-2 md:col-start-2 overflow-hidden">
        <RouterProvider router={router} />
      </main>

      {/* ShoppingCart (desktop only) */}
      <aside className="hidden md:block md:row-span-2 md:col-start-3">
        <ShoppingCart />
      </aside>

      {/* Mobile floating button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-50 bg-green-600 p-3 rounded-full shadow-lg"
      >
        <ShoppingCartIcon className="text-white w-5 h-5" />
      </button>

      {/* Mobile slide-in cart */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[rgba(36,40,50,1)] z-50 transform transition-transform duration-300 ease-in-out
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close button */}
        <button
          onClick={() => setIsCartOpen(false)}
          className="absolute top-4 right-4 z-50 text-white"
        >
          <X />
        </button>
        <ShoppingCart />
      </div>

      {/* Backdrop when cart is open */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
    </div>
  );
}

export default App;
