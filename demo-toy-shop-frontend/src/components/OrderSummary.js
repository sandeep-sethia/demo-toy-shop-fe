import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const OrderSummary = ({ cart, onSubmitOrder }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={5}>
      <Typography variant="h6">Order Summary</Typography>
      {cart.map((toy, index) => (
        <Typography key={index}>{toy.name}</Typography>
      ))}
      <Button variant="contained" color="secondary" onClick={onSubmitOrder}>Place Order</Button>
    </Box>
  );
};

export default OrderSummary;
