import React, { useState } from "react";
import { ProductosService } from "../../../../service/ProductosService";
import { ProductContext } from "./ProductContext";

const ProductosProvider = (props) => {
    //--------------------| Importacion de metodos axios |--------------------
    const productosService = new ProductosService();

    //--------------------| Uso de estados |--------------------
    const [products, setProducts] = useState([]);

    //--------------------| Funciones de Crud |--------------------
    //------> Crear nuevo producto
    const createProduct = (product) => {
        productosService.create(product).then((data) => setProducts([...products, data]));
    };
    //------> Actualizar producto
    const updateProduct = (product) => {
        productosService.update(product).then((data) => setProducts(products.map((p) => (p.id === product.id ? data : product))));
    };
    //------> Eliminar producto
    const deleteProduct = (id) => {
        productosService.delete(id).then(() => setProducts(products.filter((p) => p.id !== id)));
    };

    //--------------------| Funciones de Crud |--------------------
    return (
        <ProductContext.Provider
            value={{
                createProduct,
                updateProduct,
                deleteProduct,

                products,
                setProducts,
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductosProvider;
