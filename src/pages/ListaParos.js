import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
//import { ProductService } from "../service/ProductService";

const ListaParos = () => {
    //--------------------| Producto vacio |--------------------
    let emptyParos = {
        id: null,
        fecha: "",
        planta: "",
        area: "",
        linea: "",
        maquina: "",
        falla: "",
        inicio: "",
        fin: "",
        tiempo: null,
    };

    //--------------------| Uso de estados |--------------------
    //const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyParos);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    /*useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then((data) => setProducts(data));
    }, []);*/

    //valores ficticios
    const products = [
        { id: 1, fecha: "02/08/22", planta: "Monterrey", area: "Galletas", linea: "L1", maquina: "1", falla: "Falta harina", inicio: "02:00pm", fin: "03:00pm", tiempo: "01:00" },
        { id: 2, fecha: "02/08/22", planta: "Guadalajara", area: "Galletas", linea: "L2", maquina: "2", falla: "Falta harina", inicio: "02:00pm", fin: "03:00pm", tiempo: "01:00" },
        { id: 3, fecha: "02/08/22", planta: "Monterrey", area: "Galletas", linea: "L3", maquina: "3", falla: "Falta harina", inicio: "02:00pm", fin: "03:00pm", tiempo: "01:00" },
        { id: 4, fecha: "02/08/22", planta: "Guadalajara", area: "Galletas", linea: "L4", maquina: "4", falla: "Falta harina", inicio: "02:00pm", fin: "03:00pm", tiempo: "01:00" },
        { id: 5, fecha: "02/08/22", planta: "Monterrey", area: "Galletas", linea: "L5", maquina: "5", falla: "Falta harina", inicio: "02:00pm", fin: "03:00pm", tiempo: "01:00" },
        { id: 6, fecha: "02/08/22", planta: "Monterrey", area: "Galletas", linea: "L6", maquina: "6", falla: "Falta harina", inicio: "02:00pm", fin: "03:00pm", tiempo: "01:00" },
    ];

    //--------------------| Funciones para mostrar dialogos |--------------------
    const openNew = () => {
        setProduct(emptyParos);
        setSubmitted(false);
        setProductDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };

    //--------------------| Acciones de crud |--------------------
    const saveProduct = () => {
        setSubmitted(true);

        if (product.planta.trim()) {
            let _products = [...products];
            let _product = { ...product };
            if (product.id) {
                const index = findIndexById(product.id);

                _products[index] = _product;
                toast.current.show({ severity: "success", summary: "Successful", detail: "Paro Updated", life: 3000 });
            } else {
                _product.id = createId();
                _products.push(_product);
                toast.current.show({ severity: "success", summary: "Successful", detail: "Paro Created", life: 3000 });
            }

            //setProducts(_products);
            setProductDialog(false);
            setProduct(emptyParos);
        }
    };

    const editProduct = (product) => {
        setProduct({ ...product });
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = products.filter((val) => val.id !== product.id);
        //setProducts(_products);
        setDeleteProductDialog(false);
        setProduct(emptyParos);
        toast.current.show({ severity: "success", summary: "Successful", detail: "Paro Deleted", life: 3000 });
    };

    const findIndexById = (id) => {
        let index = -1;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    };

    const createId = () => {
        let id = "";
        let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));
        //setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({ severity: "success", summary: "Successful", detail: "Products Deleted", life: 3000 });
    };

    const onInputChange = (e, planta) => {
        const val = (e.target && e.target.value) || "";
        let _product = { ...product };
        _product[`${planta}`] = val;

        setProduct(_product);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="New" icon="pi pi-plus" className="p-button-success mr-2" onClick={openNew} />
                    <Button label="Delete" icon="pi pi-trash" className="p-button-danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
                </div>
            </React.Fragment>
        );
    };

    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} label="Import" chooseLabel="Import" className="mr-2 inline-block" />
                <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} />
            </React.Fragment>
        );
    };

    const idBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">ID</span>
                {rowData.id}
            </>
        );
    };

    const fechaBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Fecha</span>
                {rowData.fecha}
            </>
        );
    };

    const plantaBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Planta</span>
                {rowData.planta}
            </>
        );
    };

    const areaBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Area</span>
                {rowData.area}
            </>
        );
    };

    const lineaBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Linea</span>
                {rowData.linea}
            </>
        );
    };

    const maquinaBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Maquina</span>
                {rowData.maquina}
            </>
        );
    };

    const fallaBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Modo de Falla</span>
                {rowData.falla}
            </>
        );
    };

    const inicioBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Inicio</span>
                {rowData.inicio}
            </>
        );
    };

    const finBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Fin</span>
                {rowData.fin}
            </>
        );
    };

    const tiempoBodyTemplate = (rowData) => {
        return (
            <>
                <span className="p-column-title">Tiempo</span>
                {rowData.tiempo}
            </>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <div className="actions">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning mt-2" onClick={() => confirmDeleteProduct(rowData)} />
            </div>
        );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
            <h5 className="m-0">Listado de Paros</h5>
            <span className="block mt-2 md:mt-0 p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
            </span>
        </div>
    );

    const productDialogFooter = (
        <>
            <Button label="Cancel" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Save" icon="pi pi-check" className="p-button-text" onClick={saveProduct} />
        </>
    );
    const deleteProductDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteProduct} />
        </>
    );
    const deleteProductsDialogFooter = (
        <>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteProductsDialog} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text" onClick={deleteSelectedProducts} />
        </>
    );

    return (
        <div className="grid crud-demo">
            <div className="col-12">
                <div className="card mb-4" style={{ textAlign: "center", background: "#6366f2" }}>
                    <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                        Lista de Paros
                    </span>
                </div>
                <div className="card mb-4">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={products}
                        selection={selectedProducts}
                        onSelectionChange={(e) => setSelectedProducts(e.value)}
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25]}
                        className="datatable-responsive mb-4"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                        globalFilter={globalFilter}
                        emptyMessage="No products found."
                        header={header}
                        responsiveLayout="scroll"
                    >
                        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }}></Column>
                        <Column field="id" header="id" sortable body={idBodyTemplate} headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="fecha" header="Fecha" sortable body={fechaBodyTemplate} headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="planta" header="Planta" sortable body={plantaBodyTemplate} headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="area" header="Area" body={areaBodyTemplate} sortable headerStyle={{ width: "14%", minWidth: "8rem" }}></Column>
                        <Column field="linea" header="Linea" sortable body={lineaBodyTemplate} headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="maquina" header="Maquina" body={maquinaBodyTemplate} sortable headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="falla" header="Falla" body={fallaBodyTemplate} sortable headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="inicio" header="Inicio" body={inicioBodyTemplate} sortable headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="fin" header="Fin" body={finBodyTemplate} sortable headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column field="tiempo" header="tiempo" body={tiempoBodyTemplate} sortable headerStyle={{ width: "14%", minWidth: "10rem" }}></Column>
                        <Column body={actionBodyTemplate}></Column>
                    </DataTable>

                    <Dialog visible={productDialog} style={{ width: "450px" }} header="Product Details" modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog}>
                        <div className="field">
                            <label htmlFor="fecha">Fecha</label>
                            <InputText id="fecha" value={product.fecha} onChange={(e) => onInputChange(e, "fecha")} required autoFocus className={classNames({ "p-invalid": submitted && !product.fecha })} />
                            {submitted && !product.fecha && <small className="p-invalid">Fecha is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="planta">Planta</label>
                            <InputText id="planta" value={product.planta} onChange={(e) => onInputChange(e, "planta")} required autoFocus className={classNames({ "p-invalid": submitted && !product.planta })} />
                            {submitted && !product.planta && <small className="p-invalid">Planta is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="area">Area</label>
                            <InputText id="area" value={product.area} onChange={(e) => onInputChange(e, "area")} required autoFocus className={classNames({ "p-invalid": submitted && !product.area })} />
                            {submitted && !product.area && <small className="p-invalid">Area is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="linea">Linea</label>
                            <InputText id="linea" value={product.linea} onChange={(e) => onInputChange(e, "linea")} required autoFocus className={classNames({ "p-invalid": submitted && !product.linea })} />
                            {submitted && !product.linea && <small className="p-invalid">Linea is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="maquina">Maquina</label>
                            <InputText id="maquina" value={product.maquina} onChange={(e) => onInputChange(e, "maquina")} required autoFocus className={classNames({ "p-invalid": submitted && !product.maquina })} />
                            {submitted && !product.maquina && <small className="p-invalid">Maquina is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="falla">Modo de Falla</label>
                            <InputText id="falla" value={product.falla} onChange={(e) => onInputChange(e, "falla")} required autoFocus className={classNames({ "p-invalid": submitted && !product.falla })} />
                            {submitted && !product.falla && <small className="p-invalid">Falla is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="falla">Inicio</label>
                            <InputText id="inicio" value={product.inicio} onChange={(e) => onInputChange(e, "inicio")} required autoFocus className={classNames({ "p-invalid": submitted && !product.inicio })} />
                            {submitted && !product.inicio && <small className="p-invalid">Inicio is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="fin">Fin</label>
                            <InputText id="fin" value={product.fin} onChange={(e) => onInputChange(e, "fin")} required autoFocus className={classNames({ "p-invalid": submitted && !product.fin })} />
                            {submitted && !product.fin && <small className="p-invalid">Fin is required.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="tiempo">Tiempo</label>
                            <InputText id="tiempo" value={product.tiempo} onChange={(e) => onInputChange(e, "tiempo")} required autoFocus className={classNames({ "p-invalid": submitted && !product.tiempo })} />
                            {submitted && !product.tiempo && <small className="p-invalid">Tiempo is required.</small>}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                            {product && (
                                <span>
                                    Are you sure you want to delete <b>{product.planta}</b>?
                                </span>
                            )}
                        </div>
                    </Dialog>

                    <Dialog visible={deleteProductsDialog} style={{ width: "450px" }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
                        <div className="flex align-items-center justify-content-center">
                            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: "2rem" }} />
                            {product && <span>Are you sure you want to delete the selected paro?</span>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(ListaParos, comparisonFn);
