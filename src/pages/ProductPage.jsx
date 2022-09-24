import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import ProductFormEdit from "../components/ProductFormEdit";

const ProductPage = () => {
  const { id } = useParams();
  const { obtenerProducto, product, agregarProductoCarrito } =
    useContext(ProductContext);

  const handleAgregarProductoCarrito = () => {
    agregarProductoCarrito(product);
  };

  useEffect(() => {
    obtenerProducto(id);
  }, [id, obtenerProducto]);

  return (
    <>
      <Title titulo="Pagina de producto" />
      <main className="row pt-5">
        <article className="col-md-4">
          <ProductFormEdit />
        </article>
        <article className="col-md-8">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAgregarProductoCarrito}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default ProductPage;
