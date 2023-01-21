import React, { useState, useEffect, useRef, useContext } from 'react';

//CAMBIAR...
import Spinner from '../../../components/loader/Spinner';
import Exportar from './Botones/Exportar';
import TablaTurnos from './Tabla/TablaProducto';
import EliminarUno from './Dialogos/EliminarUno';
import EliminarVarios from './Dialogos/EliminarVarios';
import CrearM1 from './Dialogos/CrearM1';
import { leftToolbarTemplate } from '../ComponentsCat/Botones/AgregarEliminar'
import { ProductContext } from '../ComponentsCat/Contexts/ProductContext';
import { renderHeader } from '../ComponentsCat/Buscador/Cabezal';
//CAMBIAR...
import { TurnoService } from '../../../service/TurnoService';
import { productoVacio } from './Objetos/ProductoVacio';


import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import { FilterMatchMode } from 'primereact/api';


const CrudProducto = ({titulos, notificaciones}) => {
//--------------------| Importacion de metodos axios |--------------------
    const turnoService = new TurnoService();

//--------------------| Uso de Contextos |--------------------
    const {
        createProduct,
        updateProduct,
        deleteProduct,

        products,
        setProducts
    }=useContext(ProductContext);

//--------------------| Uso de estados |--------------------
    const [productDialog, setProductDialog] = useState(false);
    const [siguiente, setSiguiente] = useState(false)
    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(productoVacio);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [globalFilter, setGlobalFilter] = useState('');

    // CAMBIAR...
    const [filters, setFilters] = useState({
        'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
        'id': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'turno': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        'linea': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const toast = useRef(null);
    const dt = useRef(null);

//--------------------| Barra de Buscar |--------------------
    const onGlobalFilterChange = (e) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;

        setFilters(_filters);
        setGlobalFilter(value);
    }
    //------> Cabezal de buscador
    const header=renderHeader(globalFilter,onGlobalFilterChange,titulos.Buscador,titulos.TituloTabla)

//--------------------| Funciones para mostrar dialogos |--------------------
    //------> Nuevo gasto
    const openNew = () => {
        setSiguiente(false)
        setProduct(productoVacio);
        setProductDialog(true);
    }
    //------> Ocultar dialogo de crear
    const hideDialog = () => {
        setProductDialog(false);
    }
    //------> Ocultar dialogo de eliminar 1 producto
    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    }
    //------> Ocultar dialogo de eliminar varios productos
    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    }
    //------> Ventana para eliminar 1 producto
    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }
    //------> Ventana para eliminar varios productos
    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    }

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
        console.log("[+]ID: " + product.id);
        if (!product.id) {
            createProduct(product);
            toast.current.show({ severity: 'success', summary: 'Atencion!', detail: `${notificaciones.creacion}`, life: 3000 });
        } else {
            updateProduct(product);
            toast.current.show({ severity: 'success', summary: 'Atencion!', detail: `${notificaciones.modificacion}`, life: 3000 });
        }
        setProduct(productoVacio);
        setProductDialog(false);
    }
    //------> Eliminar 1 producto
    const _deleteProduct = () => {
        console.log("Se elimino el ID: "+product.id);
        deleteProduct(product.id);
        setProduct(productoVacio);
        toast.current.show({ severity: 'error', summary: 'Atencion!', detail: `${notificaciones.eliminacion}`, life: 3000 });
        setDeleteProductDialog(false);
    }
    //------> Eliminar varios productos
    const deleteSelectedProducts = () => {
        selectedProducts.map( producto => {
            console.log("Se elimino el ID: " + producto.id)
            return deleteProduct(producto.id)
        })
        setDeleteProductsDialog(false);                                         // Ocultara dialogo
        setSelectedProducts(null);                                              // Elemetos seleccionados = 0
        toast.current.show({ severity: 'error', summary: 'Atencion!', detail: `${notificaciones.eliminaciones}`, life: 3000 });
    }
    //------> Editar producto
    const _editProduct = (product) => {
        setProduct({...product});
        setProductDialog(true);
    }

//--------------------| Botones en pantalla |--------------------
    //------> Botones para agregar/eliminar productos
    const BotonesCabezal=leftToolbarTemplate(openNew, confirmDeleteSelected, selectedProducts);

    //------> Boton para exportar
    const ExportarRegistros=Exportar(products);

    //------> Botones parte derecha
    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button 
                    icon="pi pi-pencil" 
                    className="p-button-rounded p-button-success mr-2" 
                    onClick={() => _editProduct(rowData)} 
                />
                <Button 
                    icon="pi pi-trash" 
                    className="p-button-rounded p-button-warning" 
                    onClick={() => confirmDeleteProduct(rowData)} 
                />
            </>
        );
    }
    const siguienteModal = () => {
        setProductDialog(false)
        setSiguiente(true)
    }

//--------------------| Obtener registros de back-end |--------------------
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    //---> Obtendra los datos del back-end
    useEffect(()=>{
        const cargarDatos=async()=>{
            setIsLoading(true)
            setError(null)
            try{
                const data=await turnoService.readAll()
                setProducts(data)  
            } catch(error){
                setError(error.message)
            }
            setIsLoading(false)
        }
        cargarDatos()
        return () => {                                      // Funcion de limpieza
            setProducts([])
        }
    },[]); // eslint-disable-line react-hooks/exhaustive-deps    
    
    useEffect(() => {
        turnoService.readAll().then((data) => setProducts(data));
    }, [products]); // eslint-disable-line react-hooks/exhaustive-deps


//--------------------| Valor que regresara |--------------------
    return (
        <div className="datatable-crud-demo">
            <Toast ref={toast} />
            {!isLoading && !error && (
            <TablaTurnos
                BotonesCabezal={BotonesCabezal} 
                ExportarRegistros={ExportarRegistros} 
                dt={dt} 
                products={products} 
                selectedProducts={selectedProducts} 
                filters={filters} 
                setSelectedProducts={setSelectedProducts} 
                header={header}
                actionBodyTemplate={actionBodyTemplate} 
            />)}
            {isLoading&&<Spinner/>}
            {error&&<p>{error}</p>}

            <CrearM1
                productDialog={productDialog}
                titulos={titulos}
                saveProduct={saveProduct}
                hideDialog={hideDialog}
                product={product}
                updateField={updateField}
                siguienteModal={siguienteModal}
                siguiente={siguiente}
            />

            <EliminarUno
                deleteProductDialog={deleteProductDialog} 
                _deleteProduct={_deleteProduct}
                hideDeleteProductDialog={hideDeleteProductDialog} 
                product={product}
            />

            <EliminarVarios 
                deleteProductsDialog={deleteProductsDialog}
                deleteSelectedProducts={deleteSelectedProducts}
                hideDeleteProductsDialog={hideDeleteProductsDialog}
                product={product}
            />
        </div>
    );
}

export default CrudProducto