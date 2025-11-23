import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div>
            <footer className='bg-[#00103D0F] dark:bg-gray-800'>
                <div className="container">
                    <div className='footer-contact'>
                        <div>
                            <img src="https://lean-group-tau.vercel.app/logo.svg" alt="" />
                        </div>
                        <div className='footer-logo'>
                            <div>
                                <img src="https://lean-group-tau.vercel.app/vk.svg" alt="" />
                            </div>
                            <div>
                                <img src="https://lean-group-tau.vercel.app/fb.svg" alt="" />
                            </div>
                            <div>
                                <img src="https://lean-group-tau.vercel.app/ln.svg" alt="" />
                            </div>
                        </div>
                    </div><hr className='dark:text-[white]'/>
                    <div className='footer-cards'>
                        <div className='footer-card'>
                            <h1 className='footer-page text-[#2C2D2E] dark:text-[white]'>Продукция</h1>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Ламинатные тубы</p>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Экструзионные тубы</p>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Другая упаковка</p>
                        </div>
                        <div className='footer-card'>
                            <h1 className='footer-page text-[#2C2D2E] dark:text-[white]'>Компания</h1>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>О нас</p>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Наша команда</p>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Сертификаты</p>
                        </div>
                        <div className='footer-card'>
                            <h1 className='footer-page text-[#2C2D2E] dark:text-[white]'>Разделы</h1>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Контакты</p>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Новости</p>
                            <p className='footer-desc text-[#2C2D2E] dark:text-[silver]'>Вакансии</p>
                        </div>
                        <div className='footer-card2'>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Беларусь</p>
                                <p className='footer-desc2 text-[#2C2D2E] dark:text-[silver]' >+375 (17) 270 53 77</p>
                                <p className='footer-desc2 text-[#2C2D2E] dark:text-[silver]'>+375 (17) 270 53 78</p>
                            </div>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Европа</p>
                                <p className='footer-desc2 text-[#2C2D2E] dark:text-[silver]' >+48 73 1111 044</p>
                            </div>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Москва</p>
                                <p className='footer-desc2 text-[#2C2D2E] dark:text-[silver]' >+7 (495) 280 73 44</p>
                                <p className='footer-desc2 text-[#2C2D2E] dark:text-[silver]'>+7 (495) 280 73 44</p>
                            </div>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Екатеринбург</p>
                                <p className='footer-desc2 text-[#2C2D2E] dark:text-[silver]'> +7 (343) 346 82 06</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer