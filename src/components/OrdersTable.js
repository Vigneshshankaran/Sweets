import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import { Visibility, Edit, Delete } from "@mui/icons-material";

const OrdersTable = ({ orders, onView, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
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
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.name}</TableCell>
              <TableCell>{order.phone}</TableCell>
              <TableCell>{order.orderDate}</TableCell>
              <TableCell>{order.deliveryDate}</TableCell>
              <TableCell>{order.boxType}</TableCell>
              <TableCell>{order.weight}</TableCell>
              <TableCell>{order.quantity}</TableCell>
              <TableCell>
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
  );
};

export default OrdersTable;