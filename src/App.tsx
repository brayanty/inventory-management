import "./App.css";
import { ShoppingCartProvider } from "./components/context/ShoppingCartProvider";
import Inventory from "./components/inventory";
import SidebarCard from "./components/sidebar/index";

function App() {
  return (
    <>
      <div className="container max-h-screen overflow-hidden mx-auto grid grid-cols-5 grid-rows-5 gap-1">
        <SidebarCard className="row-span-6 col-start-1 row-start-2 max-h-[300px]"></SidebarCard>
        <ShoppingCartProvider>
          <Inventory className="h-full col-span-3 row-span-7 col-start-2 row-start-2" />
        </ShoppingCartProvider>
        <div className="row-span-3 col-start-5 bg-amber-100"></div>
        <div className="row-span-2 col-start-5 row-start-4 bg-fuchsia-300"></div>
      </div>
    </>
  );
}

export default App;
