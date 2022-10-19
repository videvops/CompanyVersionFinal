import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomerService } from "../service/CustomerService";
import { ProductService } from "../service/ProductService";

const FormLayoutDemo = () => {
    const [customers3, setCustomers3] = useState([]);
    const [filters1, setFilters1] = useState(null);
    const [loading1, setLoading1] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const [idFrozen, setIdFrozen] = useState(false);
    const [products, setProducts] = useState([]);
    const [expandedRows, setExpandedRows] = useState(null);

    const porcentajes = [
        {
            status: "80%",
            linea: "80%",
            eficiencia: "54%",
            disponibilidad: "60%",
            velocidad: "90%",
            calidad: "85%",
            producto: "2100",
        },
        {
            status: "80%",
            linea: "78%",
            eficiencia: "54%",
            disponibilidad: "60%",
            velocidad: "90%",
            calidad: "85%",
            producto: "2100",
        },
        {
            status: "80%",
            linea: "60%",
            eficiencia: "54%",
            disponibilidad: "60%",
            velocidad: "90%",
            calidad: "85%",
            producto: "2100",
        },
    ];

    const customerService = new CustomerService();
    const productService = new ProductService();

    useEffect(() => {
        setLoading2(true);
        customerService.getCustomersMedium().then((data) => setCustomers3(data));
        productService.getProductsWithOrdersSmall().then((data) => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const statusBodyTemplate = (porcentajes) => {
        return <span></span>;
    };

    const headerTemplate = (porcentajes) => {
        return (
            <React.Fragment>
                <span className="image-text font-bold">{porcentajes.title}</span>
            </React.Fragment>
        );
    };

    const footerTemplate = (data) => {
        return (
            <React.Fragment>
                <td colSpan="4" style={{ textAlign: "right" }} className="text-bold pr-6">
                    Total Customers
                </td>
                <td>{calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    };

    const calculateCustomerTotal = (name) => {
        let total = 0;

        if (customers3) {
            for (let customer of customers3) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };

    return (
        <div className="grid">
            <div className="col-12 ">
                <div className="card mb-0" style={{ textAlign: "center", background: "#6366f2" }}>
                    <span className=" font-bold" style={{ fontSize: "25px", color: "white" }}>
                        Indicadores de Turno
                    </span>
                </div>
            </div>

            <div className="col-12">
                <div className="card">
                    <h5 className=" font-bold" style={{ fontSize: "25px" }}>
                        Status en Tiempo Real
                    </h5>
                    <DataTable value={porcentajes} stripedRows responsiveLayout="scroll" style={{ fontSize: "20px", textAlign: "center" }}>
                        <Column field="status" header="Status"></Column>
                        <Column field="linea" header="Linea" style={{ textAlign: "center" }}></Column>
                        <Column field="eficiencia" header="Eficiencia" style={{ textAlign: "center" }}></Column>
                        <Column field="disponibilidad" header="Disponibilidad" style={{ textAlign: "center" }}></Column>
                        <Column field="velocidad" header="Velocidad" style={{ textAlign: "center" }}></Column>
                        <Column field="calidad" header="Calidad" style={{ textAlign: "center" }}></Column>
                        <Column field="producto" header="Producto Terminado" style={{ textAlign: "center" }}></Column>
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(FormLayoutDemo, comparisonFn);
