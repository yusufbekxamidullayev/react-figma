import React from 'react'
// import { MdAddShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import "../header/header.css"

function Header() {
    return (
        <div className='header'>
            <header>
                <div className='container'>
                    <div className='navbar '>
                        <div>
                            <img src="https://lean-group-tau.vercel.app/logo.svg" alt="" />
                        </div>
                        <div>
                            <ul className='navbar-menu'>
                                <li className='navbar-menu-li'>
                                    <a href="#" className="navbar-menu-a">Продукция</a>
                                </li>
                                <li className='navbar-menu-li'>

                                    <a href="#" className="navbar-menu-a">Сертификаты</a>
                                </li>
                                <li className='navbar-menu-li'>
                                    <a href="#" className="navbar-menu-a">Наша команда</a>
                                </li>
                                <li className='navbar-menu-li'>
                                    <a href="#" className="navbar-menu-a">О нас</a>
                                </li>
                                <li className='navbar-menu-li'>
                                    <a href="#" className="navbar-menu-a">Новости</a>
                                </li>
                                <li className='navbar-menu-li'>
                                    <a href="#" className="navbar-menu-a">Вакансии</a>
                                </li>
                                <li className='navbar-menu-li'>
                                    <a href="#" className="navbar-menu-a">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='navbar-menu'>
                                <li className='navbar-menu-li'>
                                    <a className='navbar-menu-a' href="">RU</a>
                                </li>
                                <li>
                                    <a className='navbar-menu-a' href="">EN</a>
                                </li>
                            </ul>
                            <div className='toggle'>
                                <IoMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header