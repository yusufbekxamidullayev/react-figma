import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div>
            <footer className='mt-[65px]'>
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
                    </div><hr />
                    <div className='footer-cards'>
                        <div className='footer-card'>
                            <h1 className='footer-page'>Продукция</h1>
                            <p className='footer-desc'>Ламинатные тубы</p>
                            <p className='footer-desc'>Экструзионные тубы</p>
                            <p className='footer-desc'>Другая упаковка</p>
                        </div>
                        <div className='footer-card'>
                            <h1 className='footer-page'>Компания</h1>
                            <p className='footer-desc'>О нас</p>
                            <p className='footer-desc'>Наша команда</p>
                            <p className='footer-desc'>Сертификаты</p>
                        </div>
                        <div className='footer-card'>
                            <h1 className='footer-page'>Разделы</h1>
                            <p className='footer-desc'>Контакты</p>
                            <p className='footer-desc'>Новости</p>
                            <p className='footer-desc'>Вакансии</p>
                        </div>
                        <div className='footer-card2'>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Беларусь</p>
                                <p className='footer-desc2' >+375 (17) 270 53 77</p>
                                <p className='footer-desc2'>+375 (17) 270 53 78</p>
                            </div>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Европа</p>
                                <p className='footer-desc2' >+48 73 1111 044</p>
                            </div>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Москва</p>
                                <p className='footer-desc2' >+7 (495) 280 73 44</p>
                                <p className='footer-desc2'>+7 (495) 280 73 44</p>
                            </div>
                            <div className='footer-ca'>
                                <p className='footer-page2'>Екатеринбург</p>
                                <p className='footer-desc2'> +7 (343) 346 82 06</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer