import React, { useState } from 'react';
import Form from './form';
import Product from './Product';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  const handleFormSubmit = (customerInfo) => {
    setCustomers([...customers, customerInfo]);
  };

  const handleProductSubmit = (productInfo) => {
    setCustomers((prevCustomers) => {
      const lastCustomer = prevCustomers[prevCustomers.length - 1];
      const updatedCustomers = [...prevCustomers];
      lastCustomer.products = [...lastCustomer.products, productInfo];
      return updatedCustomers;
    });
  };

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
            <strong>Products:</strong>
            <Product />

      </ul>
      <Form onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default CustomerList;
