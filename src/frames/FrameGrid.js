import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import PreCellRenderer from '../PreCellRenderer';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const allRows = [];

function FrameGrid(props) {
  const [rowData, setRowData] = React.useState(allRows);

  let gridApi;
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      gridApi.sizeColumnsToFit();
      console.log('RESIZE');
    });

    const interval = setInterval(() => {
      allRows.push({
        make: 'Porsche',
        model: 'Boxter',
        price: Math.floor(Math.random() * 1000),
        id: window.performance.now()
      });
      setRowData(allRows.slice(0));
    }, 1000);
    return () => clearInterval(interval);
  }, [gridApi]);

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
          onGridReady={params => {
            gridApi = params.api;
            gridApi.sizeColumnsToFit();
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
          rowData={rowData}
        />
      </div>
    </div>
  );
}

export default FrameGrid;
