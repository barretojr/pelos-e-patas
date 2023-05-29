import React from "react";
import Button from "../Button/Button";

const Infos = () => {
  return (
    <div>
      <h1>
        Tudo o que seu pet precisa a <span style={{color: 'var(--primary-color)'}}>Pelos & Patas</span>{" "}
        tem!
      </h1>
      <h2>
        O lugar perfeito pra você e seu pet... 
        Confira nosso catalogo de produtos e serviços!
      </h2>
      <Button text='Saiba Mais' />
    </div>
  );
};

export default Infos;
