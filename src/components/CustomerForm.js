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
  // State to store the customer form data
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    orderDate: "",
    deliveryDate: "",
    boxType: "",
    weight: "",
    quantitys: 0,
  });

  // Handle changes to the form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle submitting the form
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
        {/* Customer Name field */}
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

        {/* Phone Number field */}
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

        {/* Order Date field */}
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

        {/* Delivery Date field */}
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

        {/* Box Type field */}
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
              <MenuItem value="Marvellous Menu">Marvellous Menu</MenuItem>
              <MenuItem value="VIP Menu">VIP Menu</MenuItem>
              <MenuItem value="Luxury Menu">Luxury Menu</MenuItem>
              <MenuItem value="Delight">Dry Fruit Delight</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {/* Weight field */}
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

        {/* Quantity field */}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="quantitys"
            name="quantitys"
            label="Quantity"
            type="number"
            fullWidth
            value={formData.quantitys}
            onChange={handleChange}
            inputProps={{ min: 1 }}
          />
        </Grid>

        {/* Next button */}
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