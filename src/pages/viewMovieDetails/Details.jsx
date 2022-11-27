import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import DetailItem from "./DetailItem";

const Details = ({ movie }) => {
  const list = Object.entries(movie)
    .filter(
      (item) =>
        item[0] !== "Poster" && item[0] !== "Ratings" && item[0] !== "Response"
    )
    .map((entry) => ({
      label: entry[0],
      value: entry[1],
    }));

  return (
    <>
      <Link to="/">{"< Back"}</Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 400,
        }}
      >
        <img
          src={movie?.Poster}
          alt="poster"
          loading="eager"
          style={{ marginBottom: "3rem", borderRadius: "5px" }}
        />
        <Grid container justifyContent={"center"}>
          {movie?.Ratings.map((detail) => (
            <DetailItem value={detail.value} label={detail.label} />
          ))}
        </Grid>
        <Grid container justifyContent={"center"}>
          {list.map((detail) => (
            <DetailItem value={detail.value} label={detail.label} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Details;
