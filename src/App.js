import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import CustomerForm from "./components/CustomerForm";
import SweetsForm from "./components/SweetsForm";
import OrdersTable from "./components/OrdersTable";
import OrderDetailsPage from "./components/OrderDetailsPage";
import Navbar from "./components/Navbar";

import { Box, Container } from "@mui/material";

const App = () => {
  // State to keep track of the current step in the order process
  const [step, setStep] = useState(1);

  // State to store the customer form data
  const [formData, setFormData] = useState(null);

  // State to store the orders
  const [orders, setOrders] = useState([]);

  // Use the navigate hook to navigate between routes
  const navigate = useNavigate();

  // Handle the next step in the order process
  const handleNext = (data) => {
    // Update the formData state with the customer form data
    setFormData(data);
    // Move to the next step
    setStep(step + 1);
  };

  // Handle going back to the previous step
  const handleBack = () => {
    // Move back to the previous step
    setStep(step - 1);
  };

  // Handle submitting the order
  const handleSubmit = (selectedSweets) => {
    // Convert the selectedSweets object to an array
    const sweetsArray = Object.keys(selectedSweets).map((name) => ({
      name,
      grams: selectedSweets[name].grams,
      quantity: selectedSweets[name].quantity,
      quantitys: formData.quantitys // Assuming formData.quantitys is the correct property
    }));

    // Create a new order object with the customer form data and sweets array
    const order = {...formData, sweets: sweetsArray, id: Date.now().toString() };

    // Add the new order to the orders state
    setOrders([...orders, order]);

    // Reset the step and formData states
    setStep(1);
    setFormData(null);
  };

  // Handle viewing an order
  const handleView = (index) => {
    // Get the order ID from the orders state
    const orderId = orders[index].id;
    // Navigate to the order details page
    navigate(`/order/${orderId}`);
  };

  // Handle editing an order (TO DO: implement edit functionality)
  const handleEdit = (index) => {
    // TO DO: implement edit functionality
  };

  // Handle deleting an order
  const handleDelete = (index) => {
    // Filter out the deleted order from the orders state
    setOrders(orders.filter((_, i) => i!== index));
  };

  return (
<>
<Navbar />
    <Container>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {/* Show the customer form on step 1 */}
              {step === 1 && <CustomerForm onNext={handleNext} />}
              {/* Show the sweets form on step 2 */}
              {step === 2 && (
                <SweetsForm
                  formData={formData}
                  onBack={handleBack}
                  onSubmit={handleSubmit}
                />
              )}
              {/* Show the orders table on step 1 */}
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
          }
        />
        <Route path="/order/:id" element={<OrderDetailsPage orders={orders} />} />
      </Routes>
    </Container>
    </>
  );
};

export default App;