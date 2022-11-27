import { useNavigate } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";

const movieColumns = [
  { field: "Title", headerName: "Title", flex: 1 },
  { field: "Year", headerName: "Year", flex: 1 },
  { field: "Type", headerName: "Movie", flex: 1 },
  {
    field: "Poster",
    headerName: "Poster",
    flex: 1,
    renderCell: (params) => {
      if (params.value === "N/A") {
        return <div>N/A</div>;
      }

      return (
        <img
          src={params?.value}
          alt="poster"
          loading="eager"
          style={{ marginBottom: "3rem", width: "4rem", objectFit: "contain" }}
        />
      );
    },
  },
  {
    field: "actions",
    type: "actions",
    renderCell: (params) => {
      const navigate = useNavigate();
      return (
        <GridActionsCellItem
          icon={<VisibilityOutlinedIcon />}
          onClick={() => navigate(`movie/${params.id}`)}
          label="Delete"
        />
      );
    },
  },
];

export default movieColumns;
