import React from "react";
import classes from './Header.module.css';
import Avatar from '../Profile/Avatar';
import logo from '../UI/img/logo.png';
import axios from "axios";

const Header = () =>{
    
    return(
        <header className={classes.Header}>
            <img className={classes.Header__logo} src={logo} alt="Header Logo" />
            <h1 className={classes.Header__title}><h1 className={classes.Header__V}>V</h1>Reacte</h1>
            <div className={classes.Header__profile}>
            <Avatar/>
            <ul className={classes.Header__profile_list}>
                <li className={classes.Header__MyProfile}>My profile</li>
                <li className={classes.Header__exit}>Exit</li>
            </ul>
            </div>
        </header>
    );
}

export default Header;