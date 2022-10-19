import React, { useState, useRef } from "react";
//useEffect,
import { classNames } from "primereact/utils";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProductService } from "../service/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";

const CatalogoPlantas = () => {
    //--------------------| Producto vacio |--------------------
    let emptyProduct = {
        id: null,
        nombrePlanta: "",
    };

    //--------------------| Uso de estados |--------------------
    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [editProduct, setEditProduct] = useState(null);

    //--------------------| Importacion de metodos axios |--------------------
    const productService = new ProductService();

    //--------------------| Obtener registros de back-end |--------------------
    /*useEffect(() => {
        productService.readAll().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps*/

    //--------------------| Funciones de CatalogoPlantas |--------------------
    const createProduct = (product) => {
        productService.create(product).then((data) => setProducts([...products, data]));
    };

    const updateProduct = (product) => {
        productService.update(product).then((data) => setProducts(products.map((p) => (p.id === product.id ? data : product))));
        setEditProduct(null);
    };

    const deleteProduct = (id) => {
        productService.delete(id).then(() => setProducts(products.filter((p) => p.id !== id)));
    };

    //--------------------| Funciones para mostrar dialogos |--------------------
    //------> Nuevo gasto
    const openNew = () => {
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };
    //------>
    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };
    //------> Ocultar dialogo de eliminar 1 producto
    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };
    //------> Ocultar dialogo de eliminar varios productos
    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    //--------------------| Acciones de crud |--------------------
    //------> Actualizar campo de producto
    const updateField = (data, field) => {
        setProduct({
            ...product,
            [field]: data,
        });
        console.log(product);
    };
    //------> Agregar nuevo registro
    const saveProduct = () => {
        setSubmitted(true);
        if (!editProduct) {
            createProduct(product);
            toast.current.show({ severity: "success", summary: "Atencion!", detail: "Registro creado", life: 3000 });
        } else {
            updateProduct(product);
            toast.current.show({ severity: "success", summary: "Atencion!", detail: "Registro modificado", life: 3000 });
        }
        setProduct(emptyProduct);
        setProductDialog(false);
    };
    //------> Ventana para eliminar 1 producto
    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };
    //------> Eliminar 1 producto
    const _deleteProduct = () => {
        console.log("Producto eliminado: " + product.id);
        deleteProduct(product.id);
        setProduct(emptyProduct);
        toast.current.show({ severity: "error", summary: "Atencion!", detail: "Registro eliminado", life: 3000 });
        setDeleteProductDialog(false);
    };
    //------> Ventana para eliminar varios productos
    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };
    //------> Eliminar varios productos
    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => selectedProducts.includes(val)); // Producto a eliminar
        console.log("[+]Registros eliminados: " + _products.length); // N# de productos a eliminar
        // setProducts(_products);                                              // Ver productos a eliminar
        for (let i = 0; i < _products.length; i++) {
            deleteProduct(_products[i].id);
            console.log("Registro eliminado: " + _products[i].id);
        }

        setDeleteProductsDialog(false); // Ocultara dialogo
        setSelectedProducts(null); // Elemetos seleccionados = 0
        toast.current.show({ severity: "error", summary: "Atencion!", detail: "Productos eliminados", life: 3000 });
    };

    const _editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    //--------------------| Botones de cabezal |--------------------
    //------> Botones para agregar/eliminar productos
    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button label="Nuevo" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                <Button label="Eliminar" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
            </React.Fragment>
        );
    };

    //------> Botones parte derecha
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => _editProduct(rowData)} />

                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    };
    //------> Componente cabezal
    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Producto: Plantas</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Buscar..." />
            </span>
        </div>
    );

    //--------------------| Botones |--------------------
    //------> Botones para crear registro
    const productDialogFooter = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </React.Fragment>
    );
    //------> Boton de eliminar 1 registro
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Si" icon="pi pi-check" className="p-button-text" onClick={_deleteProduct} />
        </React.Fragment>
    );
    //------> Botones para eliminar varios registros
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Si" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </React.Fragment>
    );

    //--------------------| Valor que regresara |--------------------
    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />
            <div className="card mb-4" style={{ textAlign: "center", background: "#6366f2" }}>
                <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                    Catalogo de Plantas
                </span>
            </div>

            <div className="card">
                <Toolbar className="mb-4" left={leftToolbarTemplate} /*right={rightToolbarTemplate}*/ />

                <DataTable
                    ref={dt}
                    value={products}
                    selection={selectedProducts}
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id"
                    paginator
                    rows={5}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter}
                    header={header}
                    responsiveLayout="scroll"
                >
                    <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} exportable={false} />
                    <Column field="id" header="ID" sortable style={{ minWidth: "12rem" }} />
                    <Column field="nombrePlanta" header="Planta" sortable style={{ minWidth: "16rem" }} />
                    <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: "8rem" }} />
                </DataTable>
            </div>

            <Dialog visible={productDialog} style={{ width: "450px" }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                {/* {product.image && <img src={`images/product/${product.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={product.image} className="product-image block m-auto pb-3" />} */}
                <div className="field">
                    <label htmlFor="nombrePlanta">Planta</label>
                    <InputText
                        id="nombrePlanta"
                        value={product.nombrePlanta}
                        onChange={(e) => {
                            updateField(e.target.value.trim(), "nombrePlanta");
                        }}
                        required
                        autoFocus
                        className={classNames({ "p-invalid": submitted && !product.nombrePlanta })}
                    />
                    {/* {submitted && !product.name && <small className="p-error">Name is required.</small>} */}
                </div>
            </Dialog>

            {/* Dialogo para eliminar producto por separado */}
            <Dialog visible={deleteProductDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                    {product && (
                        <span>
                            Estas seguro de eliminar <b>{product.nombrePlanta}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            {/* Dialogo para eliminar producto seleccionado */}
            <Dialog visible={deleteProductsDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                    {product && <span>Estas seguro de eliminar el producto seleccionado?</span>}
                </div>
            </Dialog>
        </div>
    );
};

export default CatalogoPlantas;
