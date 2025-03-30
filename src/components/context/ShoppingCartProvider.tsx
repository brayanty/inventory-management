import React, { createContext, useState, ReactNode, useContext } from "react";
import { v4 as generateUUID } from "uuid";

interface ProductElement {
  name: string;
  category: string;
  entire: number;
  price: number;
  ID: string;
  checked?: boolean;
}

interface ShoppingContextType {
  products: ProductElement[];
  setProducts: React.Dispatch<React.SetStateAction<ProductElement[]>>;
}

const ShoppingContext = createContext<ShoppingContextType | undefined>(
  undefined
);

interface ShoppingCartProviderProps {
  children: ReactNode;
}
const productsStatic = [
  {
    name: "Redmi Note 11",
    category: "Display",
    price: 120000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 14 Pro",
    category: "Display",
    price: 12000,
    entire: 6,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 12",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },

  {
    name: "Display Redmi Note 1234",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 1266",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 16",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
  {
    name: "Display Redmi Note 14",
    category: "Display",
    price: 12000,
    entire: 12,
    ID: generateUUID(),
  },
];

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [products, setProducts] = useState<ProductElement[]>(productsStatic);

  return (
    <ShoppingContext.Provider value={{ products, setProducts }}>
      {children}
    </ShoppingContext.Provider>
  );
}

export function useShoppingCart() {
  const context = useContext(ShoppingContext);
  if (!context) {
    throw new Error(
      "useShoppingCart debe usarse dentro de un ShoppingCartProvider"
    );
  }
  return context;
}
