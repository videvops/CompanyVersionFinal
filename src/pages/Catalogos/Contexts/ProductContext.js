import React, { createContext, useState } from "react";
import { PlantaService } from "../../../service/PlantaService";
// import { ProductService } from "../Services/ProductService";

export const ProductContext=createContext();

const ProductContextProvider=(props)=>{
//--------------------| Importacion de metodos axios |--------------------
    const productService = new PlantaService();

//--------------------| Uso de estados |--------------------
    const [products, setProducts] = useState([]);

//--------------------| Funciones de Crud |--------------------
    //------> Crear nuevo producto
    const createProduct = (product) => {
        productService
        .create(product)
        .then((data) => setProducts([...products, data]));
    };
    //------> Actualizar producto
    const updateProduct = (product) => {
        productService
        .update(product)
        .then((data) =>
            setProducts(
            products.map((p) => (p.id === product.id ? data : product))
            )
        );
    };
    //------> Eliminar producto
    const deleteProduct = (id) => {
        productService
        .delete(id)
        .then(() => setProducts(products.filter((p) => p.id !== id)));
    };

//--------------------| Funciones de Crud |--------------------
    return(
        <ProductContext.Provider
        value={{
            createProduct,
            updateProduct,
            deleteProduct,

            products,
            setProducts
        }}
        >
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;