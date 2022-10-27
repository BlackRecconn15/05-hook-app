import React, { useState } from "react";
// import styled from "styled-components";

export const FormularioStep2 = (props) => {
    const {hanleChange} = props
    const [datos, setDatos] = useState({
        year: "",
        month: "",
        day: ""
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
        sessionStorage.setItem("step2",JSON.stringify(datos))
        hanleChange(3)
      };
  return (
    <form action="submit" onSubmit={onSubmit}>
      <div className="d-grid gap-2">
        <div className="mb-3">
          <label className="form-label">
            Cuando es tu cumpleaños?
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="day"
            name="day"
            onChange={handleInputChange}
            title="Insert valid Day"
            placeholder="Dia"
            required
            type="number"
            min={1}
            max={31}
            value={datos.day}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="month"
            name="month"
            onChange={handleInputChange}
            title="Insert valid month"
            placeholder="Mes"
            type="number"
            min={1}
            max={12}
            value={datos.month}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="year"
            name="year"
            onChange={handleInputChange}
            title="Insert valid year"
            placeholder="Año"
            required
            type="number"
            min={1900}
            max={2022}
            value={datos.year}
          />
        </div>
        <div className="mb-3 mx-auto">
          <button type="submit" className="btn btn-primary">
            Siguiente
          </button>
        </div>
      </div>
    </form>
  );
};

