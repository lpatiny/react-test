import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import DisplayBoolean from '../../components/DisplayBoolean';
import BytesAsHex from '../../components/BytesAsHex';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

function DataGrid(props) {
  const gridApi = React.useRef();
  React.useEffect(() => {
    let resizer = () => {
      gridApi.current.sizeColumnsToFit();
    };
    window.addEventListener('resize', resizer);
    return () => window.removeEventListener('resize', resizer);
  });

  const columnDefs = [
    {
      headerName: 'Src',
      field: 'sourceNodeID'
    },
    {
      headerName: 'Dst',
      field: 'destinationNodeID'
    },
    {
      headerName: 'Service',
      field: 'isService',
      cellRendererFramework: DisplayBoolean
    },
    {
      headerName: 'Request',
      field: 'isRequest',
      cellRendererFramework: DisplayBoolean
    },
    {
      headerName: 'Data type',
      field: 'dataTypeID'
    },
    {
      headerName: 'Data type full',
      field: 'dataTypeFullID',
      minWidth: 200
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
          rowData={props.frameRows}
        />
      </div>
    </div>
  );
}

export default DataGrid;
