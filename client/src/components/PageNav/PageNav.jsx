import React from 'react';
import logo from '../../../src/assets/images/logo.png';
import hamburger from '../../../src/assets/images/Hamburger_icon.png';
import './PageNav.scss';


function PageNav() {
    return (
        <div className="pagenav">
            <img className="pagenav__logo" src={logo} alt="page logo" />
            <p className="pagenav__title">ECO TRACK</p>
            <img className="pagenav__hamburger" src={hamburger} alt="hamburger image" />
        </div>
    )
}

export default PageNav;
