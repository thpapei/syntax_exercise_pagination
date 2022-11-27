import { Button, Divider, TextField, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import DataGrid from "../../components/DataGrid";
import { GET_MOVIES } from "../../constants";
import { searchMovies } from "../../network/services/searchMovies";
import movieColumns from "./columns";

const Dashboard = () => {
  const [page, setPage] = useState(parseInt(localStorage.getItem("page")) || 0);
  const [search, setSearch] = useState(localStorage.getItem("search") || "");
  const [enabled, setEnabled] = useState(false);
  const isValidated = search?.length > 3;

  const { data, error, isLoading } = useQuery(
    [GET_MOVIES, page],
    () =>
      searchMovies({
        s: search,
        page: page + 1,
      }),
    {
      enabled: enabled && isValidated,
      onSuccess: () => {
        setEnabled(false);
      },
      onError: () => {
        setEnabled(false);
      },
    }
  );

  useEffect(() => {
    // This will look for persisted query criteria
    // and if it finds it, enables search.
    // This helps in two scenarios:
    // 1. When user presses "back" from a detail page
    // 2. When user refreshes the page.
    const persistedPage = parseInt(localStorage.getItem("page"));
    const persistedSearch = localStorage.getItem("search");

    setPage(persistedPage);
    setSearch(persistedSearch);

    if (persistedPage !== undefined && !!persistedSearch) {
      setEnabled(true);
    }
  }, []);

  const enableAndPersist = () => {
    setEnabled(true);
    localStorage.setItem("search", search);
    setPage(0);
    localStorage.setItem("page", 0);
  };

  const handleSearch = () => {
    if (isValidated) {
      enableAndPersist();
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter" && isValidated) {
      enableAndPersist();
    }
  };

  return (
    <>
      <Typography variant="h3">Movies</Typography>
      <Divider sx={{ my: 1 }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          // error={!isValidated}
          onKeyDown={handleEnter}
          variant="outlined"
          label="Movie name"
          sx={{ my: 3, mx: 3 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          helperText={!isValidated && "Please type at least 4 characters"}
        />
        <Button
          variant="contained"
          disabled={!isValidated}
          onClick={handleSearch}
        >
          Search...
        </Button>
      </div>
      {error && <h2>Error: {error.message}</h2>}
      {!error && (
        <DataGrid
          rows={data?.Search || []}
          columns={movieColumns}
          page={page || 0}
          loading={enabled && isLoading}
          onPageChange={(newPage) => {
            setEnabled(true);
            setPage(newPage);
            localStorage.setItem("page", newPage);
          }}
          getRowId={(row) => row.imdbID}
          rowCount={parseInt(data?.totalResults) || 0}
        />
      )}
    </>
  );
};

export default Dashboard;
