import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

// provider help to delever the data and children work as  main APP
const AppProvider = ({ children }) => {
  // async await is use to handle the error
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const product = await res.data;
    console.log(product);
    //  console.log(res)   to check API response
  };
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ myName: "krishna" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
