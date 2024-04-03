import React from 'react';
import "./item.css";
import {Link} from 'react-router-dom';

const Item = ({info}) => {

    return (
        <Link to={`/detalle/${info.id}`} className="producto">
            <p>{info.title}</p>
            <img src={info.image} alt="" />

        </Link>
    );
};
export default Item;