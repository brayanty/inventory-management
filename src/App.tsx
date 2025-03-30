import "./App.css";
import Button from "./components/common/button.tsx";
import { ShoppingCartProvider } from "./components/context/ShoppingCartProvider";
import Inventory from "./components/inventory";
import Navbar from "./components/navegation/navbar.tsx";
import SidebarCard from "./components/navegation/sidebar.tsx";

function App() {
  return (
    <>
      <div className="container max-h-screen overflow-hidden mx-auto grid grid-cols-5 grid-rows-10 gap-1">
        <div className="row-span-8 col-start-1 row-start-2">
          <SidebarCard></SidebarCard>
        </div>
        <div className="flex justify-between items- col-span-3 col-start-2 row-start-1 p-2">
          <Navbar />
          <div>
            <Button
              className="bg-blue-600 hover:bg-violet-600 transition ease-in-out duration-300"
              onClick={() => console.log("hola")}
            >
              Agregar Productos
            </Button>
          </div>
        </div>
        <div className="bg-white row-span-4 col-start-5 row-start-2"></div>
        <div className="col-span-3 row-span-8 col-start-2 row-start-2">
          <ShoppingCartProvider>
            <Inventory />
          </ShoppingCartProvider>
        </div>
      </div>
    </>
  );
}

export default App;
