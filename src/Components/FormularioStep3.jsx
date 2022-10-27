import React, { useState } from "react";
// import styled from "styled-components";

export const FormularioStep3 = (props) => {
    const {hanleChange} = props
    const [datos, setDatos] = useState({
        email: "",
        cell: ""
      });
    
      const handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
    
        setDatos({
          ...datos,
          [name]: value,
        });
      };
      
      const onSubmit = (event) => {
        event.preventDefault();
        
        sessionStorage.setItem("step3",JSON.stringify(datos))
        hanleChange(4)
      };
  return (
    <form action="submit" onSubmit={onSubmit}>
      <div className="d-grid gap-2">
        <div className="mb-3">
          <label className="form-label">
            Como podemos contactarte?
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="email"
            name="email"
            onChange={handleInputChange}
            title="Insert valid Email"
            placeholder="Correo Electronico"
            required
            type="email"
            value={datos.email}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="cell"
            name="cell"
            onChange={handleInputChange}
            title="Insert valid cellphone"
            placeholder="Telefono Celular"
            type="tel"
            min={1}
            max={10}
            value={datos.cell}
          />
        </div>
        <div className="mb-3 mx-auto">
          <button type="submit" className="btn btn-primary">
            Finalizar
          </button>
        </div>
      </div>
    </form>
  );
};

