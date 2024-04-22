import React from "react";
import { useLocation } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

const StockResults = () => {
  const location = useLocation();
  const { criteria } = location.state;

  return (
    <Paper style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h5">Stock Results</Typography>
      <Typography>Filtering by:</Typography>
      <Typography>Price: {criteria.price}</Typography>
      <Typography>Market Cap: {criteria.marketCap}</Typography>
      {/* Add logic to fetch and display filtered stocks */}
    </Paper>
  );
};

export default StockResults;
