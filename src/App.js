import React, { useState } from 'react';
import MyForm from './form';
import ReducerTutorial from './ReducerTutorial';
import ReducerTutorialSecond from './ReducerTutorialSecond';
import CustomerList from './CustomerList'; 
import PersonelForm from './PersonelForm';
import PersonelList from './PersonelList';

const StateTutorial = () => {
  const [counter, setCounter] = useState(0);
  const [deneme, setDeneme] = useState("denemeState");
  const [inputValue, setInputValue] = useState("elif");
  const [formData, setFormData] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
  };
  const renderComponent = () => {
    switch (selectedTitle) {
      case 'personelList':
        return <PersonelList />;
      case 'customerList':
        return <CustomerList />;
      default:
        return null;
    }
  };
  const increment = () => {
    setCounter(counter + 1);
  }

  const denemeInput = () => {
    setDeneme(inputValue + "aass");
  }

  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  }

  const handleFormSubmit = (data) => {
    // Form verilerini StateTutorial bileşeninde sakla
    setFormData(data);
  };

  return (
    <div>
     {/* {counter} <button onClick={increment}>Increment</button>
      {inputValue}<input placeholder='enter something..' value={inputValue} onChange={onChange} />
      {deneme}<button onClick={denemeInput}>deneme input</button>
      <ReducerTutorial />
      <ReducerTutorialSecond />
 <div>
        <h1>React Form App</h1>
        <MyForm onFormSubmit={handleFormSubmit} />
        {formData && (
        <div> 
            <h2>Submitted Form Data</h2>
            <p>Name: {formData.name}</p>
            <p>Surname: {formData.surname}</p>
            <p>Age: {formData.age}</p>
            <p>City: {formData.city}</p>
            <p>Birthday : {formData.birthday}</p>
            <p>Products : {formData.products}</p>
          </div>
        )}
      </div>
      <CustomerList />
      <PersonelList/> */}
      <div> 
        <h3 onClick={() => handleTitleClick('personelList')}>Personel List</h3>
        <h3 onClick={() => handleTitleClick('customerList')}>Customer List</h3>
      </div>
      
      {renderComponent()}
    </div>
    
  );
};

export default StateTutorial;
