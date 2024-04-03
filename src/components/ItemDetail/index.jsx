import React, {useState} from 'react';
import ItemCount from '../ItemCount/index';
import {Link} from 'react-router-dom';

export const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart ] = useState(false);
    const onAdd = () => {
        //console.log(`Compraste ${quantity} unidades`)
        setGoToCart(true);
        
    }
    return (
        <div>
           <div className="container">
                <div className="detail">
                    <h1>{data.title}</h1>
                    <img className="detail__image" src={data.image} alt="" />
                    <div className="content">
                       
                       {
                        goToCart 
                        ? <Link to="/cart">Terminar compra</Link>
                        : <ItemCount initial={1} stock={10} onAdd={onAdd}/> 
                    }
                        
                    </div>
                </div>

           </div>
         
        </div>
    );
}
export default ItemDetail;