import React from "react";
import "./style.scss";
import logoAcessaBr from "../../images/logo-acessaBR.png";
import logoEbac from "../../images/logo-ebac.png";
const Header = () => {
  return (
    <header className="header__container">
      <div className=" header__ logo header__logo--state">
        <img src={logoAcessaBr} alt="Logo AcessaBR" />
        <span className="header__city">/ Jequié - BA</span>
      </div>

      <div className="header__ logo header__logo--ebac">
        <span className="header__span">Apoio:</span>

        <img src={logoEbac} alt="Logo Ebac" />
      </div>
    </header>
  );
};

export default Header;
