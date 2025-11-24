import React, { useState } from 'react'
// import { MdAddShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import "../header/header.css"
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";


function Header() {
    const [dark , setDark] = useState(false)


    function changeMode(){
        document.documentElement.classList.toggle("dark")
        setDark(!dark)
    }
    return (
        <div className='header bg-[white] shadow-[0_4px_8px_rgba(0,0,0,0.2)] dark:bg-gray-800 dark:shadow-md dark:shadow-[white]'>
            <header className='px-[10px]'>
                <div className='container'>
                    <div className='navbar '>
                        <div>
                            <img src="https://lean-group-tau.vercel.app/logo.svg" alt="" />
                        </div>
                        <div>
                            <ul className='navbar-menu'>
                                <li className='navbar-menu-li border-r-[1px] border-r-[#00103d2d] dark:border-r-[white]'>
                                    <a href="#" className="navbar-menu-a text-[#2C2D2E] dark:text-[white]">Продукция</a>
                                </li>
                                <li className='navbar-menu-li border-r-[1px] border-r-[#00103d2d] dark:border-r-[white]'>

                                    <a href="#" className="navbar-menu-a text-[#2C2D2E] dark:text-[white]">Сертификаты</a>
                                </li>
                                <li className='navbar-menu-li border-r-[1px] border-r-[#00103d2d] dark:border-r-[white]'>
                                    <a href="#" className="navbar-menu-a text-[#2C2D2E] dark:text-[white]">Наша команда</a>
                                </li>
                                <li className='navbar-menu-li border-r-[1px] border-r-[#00103d2d] dark:border-r-[white]'>
                                    <a href="#" className="navbar-menu-a text-[#2C2D2E] dark:text-[white]">О нас</a>
                                </li>
                                <li className='navbar-menu-li border-r-[1px] border-r-[#00103d2d] dark:border-r-[white]'>
                                    <a href="#" className="navbar-menu-a text-[#2C2D2E] dark:text-[white]">Новости</a>
                                </li>
                                <li className='navbar-menu-li border-r-[1px] border-r-[#00103d2d] dark:border-r-[white]'>
                                    <a href="#" className="navbar-menu-a text-[#2C2D2E] dark:text-[white]">Вакансии</a>
                                </li>
                                <li className='navbar-menu-li border-r-[1px] border-r-[#00103d2d] dark:border-r-[white]'>
                                    <a href="#" className="navbar-menu-a text-[#2C2D2E] dark:text-[white]">Контакты</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className='navbar-menu'>
                                <button onClick={changeMode}>
                                    {
                                        dark ? <FaSun className='text-yellow-400 text-[24px]' /> : <FaMoon className='text-[24px]'/>
                                    }
                                </button>
                            </ul>
                        </div>
                        <div>
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