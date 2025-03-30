import Button from "../common/button";

interface Product {
  name: string;
  price: number;
  category: string;
  ID: string;
}

interface ShoppingCart {
  products: Product[];
}

const ShoppingSelect = ({ products }: ShoppingCart) => {
  return (
    <div className="mx-auto fixed max-w-[450px] max-h-min bottom-4 right-0 left-0 rounded-md bg-indigo-400 shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-3">
      <div className="flex justify-evenly items-center gap-1">
        <div className="font-bold border-2 p-2 rounded-2xl">
          Selecionados {products.length}
        </div>
        <Button
          className="bg-emerald-600 hover:bg-emerald-800"
          onClick={() => {
            console.log("hola");
          }}
        >
          Vender
        </Button>
        <Button
          className="bg-red-400 hover:bg-red-700"
          onClick={() => {
            console.log("hola");
          }}
        >
          Eliminar todos
        </Button>
      </div>
    </div>
  );
};

export default ShoppingSelect;
