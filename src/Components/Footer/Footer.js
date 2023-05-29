import React from "react";
import style from "./Footer.module.css";
import dog from "../Assets/beautiful-pet.png";
import dog2 from "../Assets/lovely-pet.png";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <img className={style.img} src={dog} />
        <div className={style.footer_logo}>
          <Logo width={"100px"} />
          <div className={style.container_ul}>
            <ul className={style.ul}>
              <h3>INSTITUCIONAL</h3>
              <Link to="/">Quem Somos</Link>
              <Link to="/">Entregas e Prazos</Link>
              <Link to="/">Politica de Trocas e Devoluções</Link>
              <Link to="/">Politicas de Privacidade</Link>
              <Link to="/">Contato</Link>
            </ul>
            <ul className={style.ul}>
              <h3>CATEGORIAS</h3>
              <Link to="/">Gatos</Link>
              <Link to="/">Cachorros</Link>
            </ul>
            <ul className={style.ul}>
              <h3>RELACIONAMENTO</h3>
              <p className={style.ajuda}>
                Precisa de ajuda com um pedido ou informações sobre produtos?
              </p>
              <Link
                to="/"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: 'center',
                  marginTop: "20px",
                }}
              >
                <FaWhatsapp className={style.icon} />
                <p>(44) 99999-9999</p>
              </Link>
            </ul>
          </div>
          <p style={{ textAlign: "center", marginTop: "35px" }}>
            Desenvolvido por{" "}
            <a href="https://www.uscs.edu.br/" target='_blank'>Bruno, Hayan, Jonathan, Matheus e Rodrigo</a>
          </p>
        </div>
        <img className={style.img} src={dog2} />
      </div>
    </>
  );
};

export default Footer;
