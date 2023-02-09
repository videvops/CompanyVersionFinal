import React,{ useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';


const BitacoraTbl = (props) =>{

    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [customers, setCustomers] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedCustomers, setSelectedCustomers] = useState(null);
    const [selectedRepresentative, setSelectedRepresentative] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInputTooltip, setPageInputTooltip] = useState('Press \'Enter\' key to go to this page.');
    const [first1, setFirst1] = useState(0);
    const [lazyParams, setLazyParams] = useState({
        first: 0,
        rows: 5,
        page: 0,
        sortField: null,
        sortOrder: null,
        filters: {
            'accion': { value: '', matchMode: 'contains' },
            'modulo': { value: '', matchMode: 'contains' },
            'createBy': { value: '', matchMode: 'contains' },
            'createOn': { value: '', matchMode: 'contains' },
        }
    });

    let loadLazyTimeout = null;

    useEffect(() => {
        loadLazyData();
    },[lazyParams]);

    const loadLazyData = () => {
        setLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //imitate delay of a backend call
        loadLazyTimeout = setTimeout(() => {
            setLoading(false);

            // CustomerService.getCustomers({ lazyEvent: JSON.stringify(lazyParams) }).then(data => {
            //     setTotalRecords(data.totalRecords);
            //     setCustomers(data.customers);
            //     setLoading(false);
            // });
        }, Math.random() * 1000 + 250);
    }

    const onPage = (event) => {
        setLazyParams(event);
        //when we go through pages 
        console.log("on page: ")
        console.log(event.page)
        
        props.enviarFiltroE({page:event.page});
    }

    const onSort = (event) => {
        setLazyParams(event);
    }

    const onFilter = (event) => {
        console.log("on filter");
        event['first'] = 0;
        setLazyParams(event);
    }

    const onSelectionChange = (event) => {
        const value = event.value;
        setSelectedCustomers(value);
        setSelectAll(value.length === totalRecords);
    }

    const onSelectAllChange = (event) => {
        const selectAll = event.checked;

        if (selectAll) {
            // CustomerService.getCustomers().then(data => {
            //     setSelectAll(true);
            //     setSelectedCustomers(data.customers);
            // });
        }
        else {
            setSelectAll(false);
            setSelectedCustomers([]);
        }
    }

    const representativeBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                
                <span className="vertical-align-middle ml-2">{rowData.createOn}</span>
            </React.Fragment>
        );
    }

    const countryBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                
                <span className="vertical-align-middle ml-2">{rowData.modulo}</span>
            </React.Fragment>
        );
    }
    const template1 = {
        layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
        'PrevPageLink': (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Previous</span>
                    <Ripple />
                </button>
            )
        },
        'NextPageLink': (options) => {
            return (
                <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
                    <span className="p-3">Next</span>
                    <Ripple />
                </button>
            )
        },
        'PageLinks': (options) => {
            if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
                const className = classNames(options.className, { 'p-disabled': true });

                return <span className={className} style={{ userSelect: 'none' }}>...</span>;
            }

            return (
                <button type="button" className={options.className} onClick={options.onClick}>
                    {options.page + 1}
                    <Ripple />
                </button>
            )
        },
        'RowsPerPageDropdown': (options) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 },
                { label: 'All', value: options.totalRecords }
            ];

            return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
        },
        'CurrentPageReport': (options) => {
            return (
                <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
                    Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip}
                        onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange}/>
                </span>
            )
        }
    };

    const onPageInputKeyDown = (event, options) => {
        console.log("onPageInputKeyDown")
        console.log(event.key)
        if (event.key === 'Enter') {

            const page = parseInt(currentPage);
            if (page < 1 || page > options.totalPages) {
                setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
            }
            else {
                console.log("else:"+page)
                const first = currentPage ? options.rows * (page - 1) : 0;

                setFirst1(first);
                setPageInputTooltip('Press \'Enter\' key to go to this page.');
            }
        }
    }

    const onPageInputChange = (event) => {
        console.log("onPageInputChange")
        console.log(event.target.value)
        setCurrentPage(event.target.value);
    }

  return (

    <div>
       <DataTable value={props.bitacoraListP} lazy filterDisplay="row" responsiveLayout="scroll" dataKey="id"
            paginator first={lazyParams.first} rows={5}
            totalRecords={props.totalRecordsP} onPage={onPage}
            paginatorTemplate={template1}
            onSort={onSort} sortField={lazyParams.sortField} sortOrder={lazyParams.sortOrder}>
            <Column field="accion" header="Acción" sortable filter filterPlaceholder="" />
            <Column field="modulo" sortable header="Módulo" body={countryBodyTemplate} filter filterPlaceholder="Search by country" />
            <Column field="createBy" sortable filter header="Creado Por" filterPlaceholder="Search by company" />
            <Column field="createOn" sortable header="Fecha"  body={representativeBodyTemplate} filter filterPlaceholder="Search by representative" />
      </DataTable>

    </div>
  );

}

export default BitacoraTbl;



