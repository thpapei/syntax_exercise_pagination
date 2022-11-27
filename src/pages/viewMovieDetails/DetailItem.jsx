import { Grid, Typography } from "@mui/material";

const DetailItem = ({ label, value }) => {
  return (
    <Grid item xs={12} md={6} lg={4} sx={{ m: 1 }}>
      <Typography style={{ color: "gray" }}>{label}</Typography>
      <Typography gutterBottom>{value}</Typography>
    </Grid>
  );
};

export default DetailItem;
