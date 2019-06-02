import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import PreCellRenderer from '../PreCellRenderer';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const allRows = [];

function FrameGrid(props) {
  const gridApi = React.useRef();
  const [rowData, setRowData] = React.useState(allRows);
  React.useEffect(() => {
    const listener = () => {
      gridApi.current.sizeColumnsToFit();
    };
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  });

  const columnDefs = [
    {
      headerName: 'ID',
      field: 'id'
    },
    {
      headerName: 'Make',
      field: 'make'
    },
    {
      headerName: 'Model',
      field: 'model'
    },
    {
      headerName: 'Price',
      field: 'price',
      cellRendererFramework: PreCellRenderer
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
          onGridReady={(params) => {
            gridApi.current = params.api;
            console.log(gridApi.current);
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

export default FrameGrid;
