import React from 'react';
import style from "./compare.module.css";
import { BiCheck } from "react-icons/bi";

const Comparacao = () => {
    return (
      <div>
        <h2 className={style.textCenter}>Compare os Planos</h2>
        <div className={style.container}>
          <table className={style.table}>
            <thead>
              <tr>
                <th className={style.header}></th>
                <th className={style.header}>Pet Basic</th>
                <th className={style.header}>Pet Care</th>
                <th className={style.header}>Pet Exclusive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className={style.textStart}>Hidratação</th>
                <td></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
              </tr>
              <tr>
                <th scope="row" className={style.textStart}>Leva e Trás</th>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
              </tr>
              <tr>
                <th scope="row" className={style.textStart}>Banhos</th>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
              </tr>
              <tr>
                <th scope="row" className={style.textStart}>Tosa Higiênica</th>
                <td></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
              </tr>
              <tr>
                <th scope="row" className={style.textStart}>Horário Flexível</th>
                <td></td>
                <td></td>
                <td className={style.checkIcon}><BiCheck className={style.icon}/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

export default Comparacao;