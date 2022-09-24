import React, { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import {
  actualizarProductoService,
  crearProductoService,
  eliminarProductoService,
  obtenerProductoService,
  obtenerProductosService,
} from "../services/productServices";

const initialState = {
  products: [],
  product: {
    id: "",
    name: "",
    description: "",
    price: "",
  },
  cart: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const obtenerProductos = useCallback(async () => {
    const resp = await obtenerProductosService();
    const productos = resp.data.map((obj) => {
      return {
        id: obj._id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
      };
    });

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: productos,
    });
  }, []);

  const crearProducto = async (form) => {
    await crearProductoService(form);
    await obtenerProductos();
  };

  const eliminarProducto = async (id) => {
    await eliminarProductoService(id);
    await obtenerProductos();
  };

  const obtenerProducto = useCallback(async (id) => {
    const res = await obtenerProductoService(id);
    const producto = {
      id: res.data._id,
      name: res.data.name,
      description: res.data.description,
      price: res.data.price,
    };

    dispatch({
      type: "OBTENER_PRODUCTO",
      payload: producto,
    });
  }, []);

  const actualizarProducto = async (id, form) => {
    await actualizarProductoService(id, form);
    await obtenerProducto(id);
  };

  const agregarProductoCarrito = (product) => {
    const productoEncontrado = globalState.cart.find(
      (producto) => product.id === producto.id
    );

    if (!productoEncontrado) {
      dispatch({
        type: "AGREGAR_PRODUCTO_CARRITO",
        payload: product,
      });
    }
  };

  const eliminarProductoCarrito = (id) => {
    dispatch({
      type: "ELIMINAR_PRODUCTO_CARRITO",
      payload: id,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        obtenerProductos,
        crearProducto,
        eliminarProducto,
        obtenerProducto,
        product: globalState.product,
        actualizarProducto,
        agregarProductoCarrito,
        cart: globalState.cart,
        eliminarProductoCarrito,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
