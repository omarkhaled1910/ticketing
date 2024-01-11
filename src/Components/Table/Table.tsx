import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { deafultRows, defaultCols } from "../../Constants";

export default function DataTable({
  rows = deafultRows,
  columns = defaultCols,
}: {
  rows?: any[];
  columns?: GridColDef[];
}) {
  return (
    <div className="flex-center" style={{ width: "max-content" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
