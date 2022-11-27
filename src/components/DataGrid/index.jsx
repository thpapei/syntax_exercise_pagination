import { DataGrid as MuiDataGrid } from "@mui/x-data-grid";
import { TABLE_HEIGHT } from "./constants";

const DataGrid = (props) => {
  return (
    <div style={{ height: TABLE_HEIGHT, width: "100%" }}>
      <MuiDataGrid
        paginationMode="server"
        pagination
        pageSize={10}
        rowsPerPageOptions={[10]}
        {...props}
      />
    </div>
  );
};

export default DataGrid;
