import React, { useState } from 'react';
import Form from './form';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (customerInfo) => {
    setCustomers([...customers, customerInfo]);
    setFormData(customerInfo); // Set formData to the latest submitted customer info
  };

  return (
    <div>
      <h2>Customer List</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surnameyy</th>
            <th>Age</th>
            <th>City</th>
            <th>Birthday</th>
            <th>Products</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.surname}</td>
              <td>{customer.age}</td>
              <td>{customer.city}</td>
              <td>{customer.birthday}</td>
              <td>
                <ul>
                  {customer.products.map((product, productIndex) => (
                    <li key={productIndex}>{product}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form onFormSubmit={handleFormSubmit} />
      {formData && (
        <div>
          <h2>Submitted Form Data</h2>
          <p>
            Name: {formData.name} <br />
            Surname: {formData.surname} <br />
            Age: {formData.age} <br />
            City: {formData.city} <br />
            Birthday: {formData.birthday} <br />
            Products:
            <ul>
              {formData.products.map((product, productIndex) => (
                <li key={productIndex}>{product}</li>
              ))}
            </ul>
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomerList;
