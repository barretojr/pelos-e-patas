import React from 'react';
import style from './Planos.module.css';

const Planos = () => {
  return (
      <div className={style.container}>
      <div className={style.rows}>
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.cardHeader}>
              <h4 className={style.cardTitle}>Pet Basic</h4>
            </div>
            <div className={style.cardBody}>
              <h1 className={style.cardTitle}>R$75<small>/mês</small></h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">2 Banhos ao mês</li>
                <li className="list-group-item">1 Tosa Higiênica</li>
                <li className="list-group-item">Sistema Leva e trás</li>
                <li className="list-group-item">3 meses ganha 1 Hidratação</li>
              </ul>
              <button className={style.btn}>Conheça o Plano</button>
            </div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.cardHeader}>
              <h4 className={style.cardTitle}>Pet Care</h4>
            </div>
            <div className={style.cardBody}>
              <h1 className={style.cardTitle}>R$100<small>/mês</small></h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">3 Banhos ao mês</li>
                <li className="list-group-item">1 Tosa Higiênica</li>
                <li className="list-group-item">1 Hidratação</li>
                <li className="list-group-item">Sistema Leva e trás</li>
              </ul>
              <button className={style.btn}>Conheça o Plano</button>
            </div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.card}>
            <div className={style.cardHeader}>
              <h4 className={style.cardTitle}>Pet Exclusive</h4>
            </div>
            <div className={style.cardBody}>
              <h1 className={style.cardTitle}>R$140<small>/mês</small></h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">4 Banhos ao mês</li>
                <li className="list-group-item">2 Tosas Higiênicas</li>
                <li className="list-group-item">2 Hidratações</li>
                <li className="list-group-item">Horário Flexível</li>
              </ul>
              <button className={style.btn}>Conheça o Plano</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planos;
