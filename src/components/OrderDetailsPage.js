import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Button,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

const OrderDetailsPage = ({ orders }) => {
  const { id } = useParams();
  const order = orders.find((order) => order.id === id);
  console.log(order)

  if (!order || !Array.isArray(order.sweets)) {
    console.error("Invalid order or sweets array:", order);
    return (
      <Container>
        <Typography variant="h6">Order not found or invalid order data</Typography>
        <Button
          onClick={() => window.history.back()}
          color="primary"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Go Back
        </Button>
      </Container>
    );
  }

  const { sweets } = order;
  console.log(sweets)

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Order Details
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sweet Name</TableCell>
              <TableCell>Grams</TableCell>
              <TableCell>Total KG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sweets.map((sweet, index) => (
              <TableRow key={index}>
                <TableCell>{sweet.name}</TableCell>
                <TableCell>{sweet.grams}</TableCell>
                <TableCell>{sweet.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        onClick={() => window.history.back()}
        color="primary"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Close
      </Button>
    </Container>
  );
};

OrderDetailsPage.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      sweets: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          grams: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default OrderDetailsPage;
