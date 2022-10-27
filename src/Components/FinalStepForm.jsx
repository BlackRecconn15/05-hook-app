import React, { useState } from "react";
import styled from "styled-components";

export const FinalStepForm = (props) => {
const {hanleChange} = props
  const step1 = JSON.parse(sessionStorage.getItem("step1"));
  const step2 = JSON.parse(sessionStorage.getItem("step2"));
  const step3 = JSON.parse(sessionStorage.getItem("step3"));

  const date = new Date(step2.year, step2.month - 1, step2.day);
  const dateFormated = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "full",
  }).format(date);

  const onSubmit = () => {
    sessionStorage.clear()
    hanleChange(1)
  };

  return (
    <div className="d-grid gap-2">
      <div className="card">
        <div className="card">
          <Contenido>
            <div className="card-body toCapitalize">
              {step1.nombre} {step1.secNombre ? step1.secNombre : ""}{" "}
              {step1.apellidoP} {step1.apellidoM}
            </div>
            <div className="card-body">{dateFormated}</div>
            <div className="card-body">
              Correo: {step3.email} <br />
              Telefono: {step3.cell}
            </div>
          </Contenido>
          <div className="mb-3 mx-auto">
            <button type="button" className="btn btn-primary" onClick={onSubmit}>
              Reiniciar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contenido = styled.div`
  .toCapitalize {
    text-transform: capitalize;
  }
`;
