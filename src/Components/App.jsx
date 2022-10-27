import React, { useState } from "react";
import styled from "styled-components";
import { FinalStepForm } from "./FinalStepForm";
import { FormularioStep1 } from "./FormularioApp";
import { FormularioStep2 } from "./FormularioStep2";
import { FormularioStep3 } from "./FormularioStep3";

export const App = () => {
  const [step, setStep] = useState(1);
  const changeStep = (stepNumber) => {
    setStep(stepNumber)
    console.log("step", step);
  };

  return (
    <div>
      <Contenido>
        <h2>Ayudanos a Conocerte Mejor</h2>
        { step === 1 && <FormularioStep1 hanleChange={(step) => changeStep(step)}></FormularioStep1>}
        { step === 2 && <FormularioStep2 hanleChange={(step) => changeStep(step)}></FormularioStep2>}
        { step === 3 && <FormularioStep3 hanleChange={(step) => changeStep(step)}></FormularioStep3>}
        { step === 4 && <FinalStepForm></FinalStepForm>}

      </Contenido>
    </div>
  );
};

/* Styles Styled-Components */
const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    vertical-align: top;
    border-radius: 3px;
  }
`;
