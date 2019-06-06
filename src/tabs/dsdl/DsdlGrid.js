import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import Pre from '../../components/Pre';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function DsdlGrid(props) {
  const gridApi = React.useRef({});

  React.useEffect(() => {
    let resizer = () => {
      gridApi.current.sizeColumnsToFit();
    };
    window.addEventListener('resize', resizer);
    return () => window.removeEventListener('resize', resizer);
  }, []);

  const columnDefs = [
    {
      headerName: 'ID',
      field: 'info.dataTypeID',
      minWidth: 60,
      maxWidth: 60
    },
    {
      headerName: 'Full ID',
      field: 'id'
    },
    {
      headerName: 'Type',
      field: 'type',
      minWidth: 40,
      maxWidth: 80
    },

    {
      headerName: 'Hash',
      field: 'info.hashStr',
      cellRendererFramework: Pre,
      maxWidth: 90
    },
    {
      headerName: 'Max length',
      field: 'info.maxBitsLength',
      minWidth: 50,
      maxWidth: 100
    }
  ];

  return (
    <div style={{ flexGrow: 1, backgroundColor: 'red', border: 50 }}>
      <div
        className="ag-theme-balham"
        style={{
          flex: 1,
          height: '100%',
          paddingBottom: 40
        }}
      >
        <AgGridReact
          gridOptions={{
            onRowClicked: row => props.setCurrentRow(row.data)
          }}
          deltaRowDataMode={true}
          pagination={true}
          paginationPageSize={1000}
          suppressPaginationPanel={false}
          suppressCellSelection={true}
          onGridReady={params => {
            gridApi.current = params.api;
            gridApi.current.sizeColumnsToFit();
          }}
          defaultColDef={{
            filter: true,
            sortable: true,
            resizable: true
          }}
          getRowNodeId={data => {
            return data.id;
          }}
          columnDefs={columnDefs}
          rowData={props.dsdlRows}
        />
      </div>
    </div>
  );
}

export default DsdlGrid;
