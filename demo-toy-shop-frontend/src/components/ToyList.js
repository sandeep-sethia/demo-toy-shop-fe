import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography, Button } from '@mui/material';

const ToyList = ({ onAddToCart }) => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/toys`);
        setToys(response.data);
      } catch (error) {
        console.error('Error fetching toys', error);
      }
    };

    fetchToys();
  }, []);

  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={2}>
      {toys.map((toy) => (
        <Card key={toy.id}>
          <CardContent>
            <Typography variant="h5">{toy.name}</Typography>
            <Typography variant="body2">{toy.description}</Typography>
            <Button variant="contained" onClick={() => onAddToCart(toy)}>Add to Cart</Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ToyList;
