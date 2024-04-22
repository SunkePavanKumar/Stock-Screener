import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Paper, Typography } from "@mui/material";

const HomePage = () => {
  const [criteria, setCriteria] = useState({ price: "", marketCap: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCriteria({ ...criteria, [name]: value });
  };

  const handleSubmit = () => {
    // Add logic to send criteria to backend or another component
    navigate("/results", { state: { criteria } });
  };

  return (
    <Paper style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h5">Stock Screener</Typography>
      <TextField
        label="Price"
        name="price"
        value={criteria.price}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Market Cap"
        name="marketCap"
        value={criteria.marketCap}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "16px" }}
      >
        Search
      </Button>
    </Paper>
  );
};

export default HomePage;
