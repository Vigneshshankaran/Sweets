import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Button, Typography } from "@mui/material";
import { exportTableToExcel } from './exportTableToExcel';

/**
 * OrderDetailsPage component
 * 
 * Displays the details of a single order
 * 
 * @param {array} orders - an array of order objects
 */
const OrderDetailsPage = ({ orders }) => {
  const { id } = useParams();
  const order = orders.find((order) => order.id === id);

  /**
   * Handle print button click
   */
  const handlePrint = () => {
    window.print();
  };

  /**
   * Handle export to Excel button click
   */
  const handleExport = () => {
    exportTableToExcel('order-details-table', 'OrderDetails');
  };

  // Check if the order is valid
  if (!order || !Array.isArray(order.sweets)) {
    console.error("Invalid order or sweets array:", order);
    return (
      <Container>
        <Typography variant="h6">Order not found or invalid order data</Typography>
        <Button onClick={() => window.history.back()} color="primary" variant="contained" sx={{ mt: 2 }}>
          Go Back
        </Button>
      </Container>
    );
  }

  const { sweets } = order;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Order Details</Typography>
      <Button onClick={handlePrint}>Print</Button>
      <Button onClick={handleExport}>Export to Excel</Button>
      <TableContainer component={Paper} id="printable-table">
        <Table id="order-details-table">
          <TableHead>
            <TableRow>
              <TableCell>Sweet Name</TableCell>
              <TableCell>Grams</TableCell>
              <TableCell>Sweet Quantity</TableCell>
              <TableCell>Box Quantity</TableCell>
              <TableCell>Total KG</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sweets.map((sweet, index) => (
              <TableRow key={index}>
                <TableCell>{sweet.name}</TableCell>
                <TableCell>{sweet.grams}</TableCell>
                <TableCell>{sweet.quantity}</TableCell>
                <TableCell>{sweet.quantitys}</TableCell>
                <TableCell>
                  {/* Calculate total KG */}
                  {isNaN(Number(sweet.grams)) || isNaN(Number(sweet.quantity)) || isNaN(Number(sweet.quantitys)) ? 
                    0 : 
                    (sweet.grams * sweet.quantity * sweet.quantitys) / 1000
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={() => window.history.back()} color="primary" variant="contained" sx={{ mt: 2 }}>
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
          quantity: PropTypes.number.isRequired,
          quantitys: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default OrderDetailsPage;