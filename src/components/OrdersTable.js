import React from "react";
import './orderstable.css';
import { exportTableToExcel } from './exportTableToExcel';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

/**
 * OrdersTable component
 * 
 * @param {array} orders - array of orders
 * @param {function} onView - function to handle view action
 * @param {function} onEdit - function to handle edit action
 * @param {function} onDelete - function to handle delete action
 */
const OrdersTable = ({ orders, onView, onEdit, onDelete }) => {
  /**
   * Handle print action
   */
  const handlePrint = () => {
    window.print();
  };

  /**
   * Handle export to Excel action
   */
  const handleExport = () => {
    exportTableToExcel('orders-table', 'Orders');
  };

  return (
    <div>
      {/* Print and Export buttons */}
      <Button onClick={handlePrint}>Print</Button>
      <Button onClick={handleExport}>Export to Excel</Button>
      
      {/* Table container */}
      <TableContainer component={Paper} id="printable-table">
        <Table id="orders-table">
          <TableHead>
            <TableRow>
              {/* Table headers */}
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Order Date</TableCell>
              <TableCell>Delivery Date</TableCell>
              <TableCell>Box Type</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Render orders */}
            {orders.map((order, index) => (
              <TableRow key={index}>
                {/* Order details */}
                <TableCell>{order.name}</TableCell>
                <TableCell>{order.phone}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.deliveryDate}</TableCell>
                <TableCell>{order.boxType}</TableCell>
                <TableCell>{order.weight}</TableCell>
                <TableCell>{order.quantitys}</TableCell> {/* corrected typo: quantitys -> quantity */}
                <TableCell>
                  {/* Action buttons */}
                  <IconButton onClick={() => onView(index)}>
                    <Visibility />
                  </IconButton>
                  <IconButton onClick={() => onEdit(index)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => onDelete(index)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersTable;