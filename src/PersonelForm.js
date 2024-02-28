import React, { useState } from 'react';

const PersonelForm = ({ onPersonelFormSubmit }) => {

    const [personelInfo,setPersonelInfo]=useState({
        PersonelName:'',
        PersonelSurname:'',
        PersonelAge:0,
        PersonelJob:'',
        PersonelDepartment:'',
    });
    const handlePersonelSubmit = async (e) => {
        e.preventDefault();
      
        onPersonelFormSubmit(personelInfo);
        await setPersonelInfo({
            PersonelName:'',
            PersonelSurname:'',
            PersonelAge:0,
            PersonelJob:'',
            PersonelDepartment:'',
        });
    };
    
    return (
        <form onSubmit={handlePersonelSubmit}>
            <label>
                PersonelName:
                <input type='text' value={personelInfo.PersonelName}
                onChange={(e)=> 
                setPersonelInfo({...personelInfo,PersonelName:e.target.value})}/>
            </label>
            <br/>
            <label>
            PersonelSurname:
                <input type='text' value={personelInfo.PersonelSurname}
                onChange={(e)=> 
                setPersonelInfo({...personelInfo,PersonelSurname:e.target.value})}/>
            </label>
            <br/>
            <label>
            PersonelAge:
                <input type='number' value={personelInfo.PersonelAge}
                onChange={(e)=> 
                setPersonelInfo({...personelInfo,PersonelAge:e.target.value})}/>
            </label>
            <br/>
            <label>
            PersonelJob:
                <input type='text' value={personelInfo.PersonelJob}
                onChange={(e)=> 
                setPersonelInfo({...personelInfo,PersonelJob:e.target.value})}/>
            </label>
            <br/>
            <label>
            PersonelDepartment:
                <input type='text' value={personelInfo.PersonelDepartment}
                onChange={(e)=> 
                setPersonelInfo({...personelInfo,PersonelDepartment:e.target.value})}/>
            </label>
            <br/>

            <button type="submit">Submit</button>

        </form>
    )
};
export default PersonelForm;