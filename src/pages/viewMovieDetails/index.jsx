import { Divider, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchMovie } from "../../network/services/searchMovie";
import Details from "./Details";

const ViewMovieDetails = () => {
  let { imdbId } = useParams();

  const { data: movie, isLoading } = useQuery([imdbId], () =>
    searchMovie({
      i: imdbId,
    })
  );

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <>
      <Typography variant="h3">Movie details</Typography>
      <Divider sx={{ my: 1 }} />
      <Details movie={movie} />
    </>
  );
};

export default ViewMovieDetails;
