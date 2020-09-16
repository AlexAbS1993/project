import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FriendsSide.module.css';

const FriendSide = () => {
    return (
        <div className={classes.ava}>
            <div><img src="https://sun9-67.userapi.com/c857224/v857224388/33185/Wdba701JTo0.jpg" /><p>Скорая помощь</p></div>
            <div><img src="http://www.goroddosug.ru/loads/pochemu/dddf707ef157f7b5d6ed8d5edfb4f713.jpg" /><p>Доставка пиццы</p></div>
            <div><img src="http://lentka.com/079/0792778.jpg" /><p>Свидетели Иеговы</p></div>
            <div className={classes.last}><NavLink to="/friends"><h3>FRIENDS</h3></NavLink></div>
        </div>
    )
}
export default FriendSide;