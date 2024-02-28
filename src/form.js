import React, { useState } from 'react';
import Product from './Product';

const Form = ({ onFormSubmit }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    surname: '',
    age: 0,
    city: '',
    birthday: '2014-02-09',
    job: '',
    products: []
  });

  const handleProductSubmit = (productInfo) => {
    setCustomerInfo({ ...customerInfo, products: [...customerInfo.products, productInfo] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(customerInfo);
    setCustomerInfo({
      name: '',
      surname: '',
      age: 0,
      city: '',
      birthday: '2014-02-09',
      job: '',
      products: []
    });
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={customerInfo.name} 
        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })} />
      </label>
      <br />
      <label>
        xxSurname:
        <input type="text" value={customerInfo.surname} 
        onChange={(e) => setCustomerInfo({ ...customerInfo, surname: e.target.value })} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={customerInfo.age} 
        onChange={(e) => setCustomerInfo({ ...customerInfo, age: e.target.value })} />
      </label>
      <br />

      <label>
        city:
        <input type="text" value={customerInfo.city} 
        onChange={(e) => setCustomerInfo({ ...customerInfo, city: e.target.value })} />
      </label>
      <br />

      <label>
        birthday:
        <input type="date" value={customerInfo.birthday} 
        onChange={(e) => setCustomerInfo({ ...customerInfo, birthday: e.target.value })} />
      </label>
      <br />
      <label>
      job
        <input type="text" value={customerInfo.job} 
        onChange={(e) => setCustomerInfo({ ...customerInfo, job: e.target.value })} />
      </label>
      <br />
      <label>
        Products:
      
       <Product onProductSubmit={handleProductSubmit} />
<div>
  <ul>
    {customerInfo.products.map((product, index) => (
      <li key={index}>{product}</li>
    ))}
  </ul>
</div>

<button type="submit">Submit</button>
</label>
</form>
);
};

export default Form;

