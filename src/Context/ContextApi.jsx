import React, { useContext, useState, createContext } from "react";
export const DataProvider = createContext(null);

const ContextApi = ({ children }) => {
  // ! We can use simple variable to store static data
  // ! But as per guidance i have to use hooks, that's why I approached this trick
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/assets/img.png",
      title: "Product 1",
      price: "358",
      description: "This is description of the product 1",
    },
    {
      id: 2,
      image: "/assets/img2.png",
      title: "Product 2",
      price: "358",
      description: "This is description of the product 2",
    },
    {
      id: 3,
      image: "/assets/img3.png",
      title: "Product 3",
      price: "358",
      description: "This is description of the product 3",
    },
    {
      id: 4,
      image: "/assets/img4.png",
      title: "Product 4",
      price: "358",
      description: "This is description of the product 4",
    },
    {
      id: 5,
      image: "/assets/img5.png",
      title: "Product 5",
      price: "358",
      description: "This is description of the product 5",
    },
    {
      id: 6,
      image: "/assets/img6.png",
      title: "Product 6",
      price: "358",
      description: "This is description of the product 6",
    },
    {
      id: 7,
      image: "/assets/img6.png",
      title: "Product 7",
      price: "358",
      description: "This is description of the product 7",
    },
    {
      id: 8,
      image: "/assets/img2.png",
      title: "Product 8",
      price: "358",
      description: "This is description of the product 8",
    },
    {
      id: 9,
      image: "/assets/img4.png",
      title: "Product 9",
      price: "358",
      description: "This is description of the product 9",
    },
    {
      id: 10,
      image: "/assets/img5.png",
      title: "Product 10",
      price: "358",
      description: "This is description of the product 10",
    },
  ]);
  return (
    <DataProvider.Provider value={{ products, setProducts }}>
      {children}
    </DataProvider.Provider>
  );
};

export default ContextApi;
