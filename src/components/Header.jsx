import React from 'react';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div><img className={classes.image} src="https://img2.freepng.ru/20190213/jix/kisspng-american-crow-bird-new-caledonian-crow-rook-common-canarias-pgina-9-canal-del-rea-de-tecnolog-5c63ebd3e320f5.9837491515500523079303.jpg"></img></div>
            <div><p className={classes.title}>Social Network for Gachimans</p></div>
        </div>
    )
}

export default Header;