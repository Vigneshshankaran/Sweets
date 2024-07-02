import React, { useState } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  Typography,
} from "@mui/material";

const CustomerForm = ({ onNext }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderDate: "",
    deliveryDate: "",
    boxType: "",
    weight: "",
    quantity: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Customer Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Customer Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            value={formData.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="orderDate"
            name="orderDate"
            label="Order Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.orderDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="deliveryDate"
            name="deliveryDate"
            label="Delivery Date"
            type="date"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.deliveryDate}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="boxType-label">Box Type</InputLabel>
            <Select
              labelId="boxType-label"
              id="boxType"
              name="boxType"
              value={formData.boxType}
              onChange={handleChange}
            >
              <MenuItem value="Marvels Menu">Marvels Menu</MenuItem>
              <MenuItem value="VIP Menu">VIP Menu</MenuItem>
              <MenuItem value="Luxury Menu">Luxury Menu</MenuItem>
              <MenuItem value="Delight">Delight</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="weight-label">Weight</InputLabel>
            <Select
              labelId="weight-label"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
            >
              <MenuItem value="1kg">1kg</MenuItem>
              <MenuItem value="500gm">500gm</MenuItem>
              <MenuItem value="250gm">250gm</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="quantity"
            name="quantity"
            label="Quantity"
            type="number"
            fullWidth
            value={formData.quantity}
            onChange={handleChange}
            inputProps={{ min: 1 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CustomerForm;