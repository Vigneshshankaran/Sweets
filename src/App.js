import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import SweetsForm from "./components/SweetsForm";
import OrdersTable from "./components/OrdersTable";
import OrderDetailsPage from "./components/OrderDetailsPage";
import { Box, Container } from "@mui/material";

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const handleNext = (data) => {
    setFormData(data);
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  // const handleSubmit = (sweets) => {
  //   const order = { ...formData, sweets, id: Date.now().toString() };
  //   setOrders([...orders, order]);
  //   setStep(1);
  //   setFormData(null);
  // };
  const handleSubmit = (selectedSweets) => {
    // Convert selectedSweets object to array
    const sweetsArray = Object.keys(selectedSweets).map((name) => ({
      name,
      grams: selectedSweets[name],
    }));
  
    const order = { ...formData, sweets: sweetsArray, id: Date.now().toString() };
    setOrders([...orders, order]);
    setStep(1);
    setFormData(null);
  };
  
  const handleView = (index) => {
    const orderId = orders[index].id;
    navigate(`/order/${orderId}`);
  };

  const handleEdit = (index) => {
    // Implement edit functionality here
  };

  const handleDelete = (index) => {
    setOrders(orders.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Routes>
        <Route exact path="/" element={
          <>
            {step === 1 && <CustomerForm onNext={handleNext} />}
            {step === 2 && (
              <SweetsForm
                formData={formData}
                onBack={handleBack}
                onSubmit={handleSubmit}
              />
            )}
            {step === 1 && (
              <Box mt={4}>
                <OrdersTable
                  orders={orders}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              </Box>
            )}
          </>
        } />
        <Route path="/order/:id" element={<OrderDetailsPage orders={orders} />} />
      </Routes>
    </Container>
  );
};

export default App;