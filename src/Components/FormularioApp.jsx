import React, { useState } from "react";
// import styled from "styled-components";

export const FormularioStep1= (props) => {
    const {hanleChange} = props
    const [datos, setDatos] = useState({
        apellidoM: "",
        apellidoP: "",
        nombre: "",
        secNombre: "",
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
        sessionStorage.setItem("step1",JSON.stringify(datos))
        hanleChange(2)
      };
  return (
    <form action="submit" onSubmit={onSubmit}>
      <div className="d-grid gap-2">
        <div className="mb-3">
          <label className="form-label">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            Cual es tu Nombre?
          </label>
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="Nombre"
            name="nombre"
            onChange={handleInputChange}
            pattern="[a-zA-Z]*"
            title="Insert valid name"
            placeholder="Nombre"
            required
            type="text"
            value={datos.nombre}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="secNombre"
            name="secNombre"
            onChange={handleInputChange}
            pattern="[a-zA-Z]*"
            title="Insert valid Second Name"
            placeholder="Segundo Nombre"
            type="text"
            value={datos.secNombre}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="ApellidoP"
            name="apellidoP"
            onChange={handleInputChange}
            pattern="[a-zA-Z]*"
            placeholder="Apellido Paterno"
            title="Insert valid Name"
            required
            type="text"
            value={datos.apellidoP}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            id="ApellidoM"
            name="apellidoM"
            onChange={handleInputChange}
            pattern="[a-zA-Z]*"
            placeholder="Apellido Materno"
            title="Insert valid Last Name"
            required
            type="text"
            value={datos.apellidoM}
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

