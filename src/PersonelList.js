import React, { useState } from "react";
import PersonelForm from "./PersonelForm";

const PersonelList = () => {
    const [personels, setPersonel] = useState([]);
    const [PersonelFormData, setPersonelFormData] = useState(null);

    const handlePersonelFormSubmit = (personelInfo) => {
        setPersonel([...personels, personelInfo]);
        setPersonelFormData(personelInfo);
    };

    return (
        <div>
            <h2>Personel List</h2>
            <table border="1">
        <thead>
          <tr>
            <th>Personel Name</th>
            <th>Personel Surname</th>
            <th>Personel Age</th>
            <th>Personel Job</th>
            <th>Personel Department</th>
          </tr>
        </thead>
        <tbody>
          {personels.map((personel, index) => (
            <tr key={index}>
              <td>{personel.PersonelName}</td>
              <td>{personel.PersonelSurname}</td>
              <td>{personel.PersonelAge}</td>
              <td>{personel.PersonelJob}</td>
              <td>{personel.PersonelDepartment}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <PersonelForm onPersonelFormSubmit={handlePersonelFormSubmit} />

        </div>
    );
};

export default PersonelList;
