import React from 'react';
import CartWidget from '../CartWidget/index';
import {NavLink} from 'react-router-dom';
export const NavBar = () => {
    return (
    <div className="container">
        <nav className="nav">
            <div className="nav__brand">
                <NavLink className="nav__link" to='/'>
                    Mi Logo</NavLink>
            </div>
                <ul className="nav__list">
                    <li >
                        <NavLink className="nav__link" to='/categoria/juguetes'>
                            Categoria 1 de productos</NavLink>
                    </li>
                    <li >
                        <NavLink className="nav__link" to='/categoria/comidas'>
                            Categoria 2 de productos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to='cart'>
                            <CartWidget/> 
                        </NavLink>
                    </li>

                </ul>
 
        </nav>
    </div>
        
    );
};

export default NavBar;