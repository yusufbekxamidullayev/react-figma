
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../portfolios/portfolio.css"

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <section class="hero">
                        <div className='container'>
                            <div class="hero-content">
                                <p className='hero-name'>LEANGROUP - тубы и этикетки</p>
                                <h2 className='hero-page'>Ламинатные тубы</h2>
                                <div className='hero-desc'>
                                    <p className='hero-descreption'>
                                        Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой
                                        индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do‑it‑Yourself).
                                    </p>
                                </div>
                                <button className='hero-btn'>Каталог</button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section class="hero2">
                        <div className='container'>
                            <div class="hero-content">
                                <p className='hero-name-2'>LEANGROUP - тубы и этикетки</p>
                                <h2 className='hero-page-2'>Ламинатные тубы</h2>
                                <div className='hero-desc'>
                                    <p className='hero-descreption-2'>
                                        Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой
                                        индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do‑it‑Yourself).
                                    </p>
                                </div>
                                <button className='hero-btn'>Каталог</button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section class="hero3">
                        <div className='container'>
                            <div class="hero-content">
                                <p className='hero-name-2'>LEANGROUP - тубы и этикетки</p>
                                <h2 className='hero-page-2'>Ламинатные тубы</h2>
                                <div className='hero-desc'>
                                    <p className='hero-descreption-2'>
                                        Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой
                                        индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do‑it‑Yourself).
                                    </p>
                                </div>
                                <button className='hero-btn'>Каталог</button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
