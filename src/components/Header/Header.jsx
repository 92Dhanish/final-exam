import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import '../Header/header.css'


function Header() {
    return (
        <div className='container'>

            <nav className="navbar navbar-expand-lg navbar-light nvcolor2">
                <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul className="navbar-nav text-white">
                        <li className="nav-item ">
                            <a className="nav-link" href="/">Add Product</a>
                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link" href="/view">view Products</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header