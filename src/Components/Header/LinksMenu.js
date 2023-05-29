import React from "react";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";

import style from "./LinksMenu.module.css";


const HeaderLinks = () => {
  return (
    <div className={style.menu_container}> 
      <ul className={style.ul}>
        <NavLink className={style.links} exact="true" to="/">
         
        </NavLink>
        <NavLink className={style.links} to="sobre">Sobre</NavLink>
        <NavLink className={style.links} to="loja">Loja</NavLink>
        <NavLink className={style.links} to="contato">Contato</NavLink>
        <NavLink className={style.links} to ="servicos">Serviços</NavLink>
        <div className={style.cart}>
          <Cart />
        </div>
        </ul>
        
    </div>
  );
};

export default HeaderLinks;
