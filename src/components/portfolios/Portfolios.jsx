
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../portfolios/portfolio.css"

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
                                <p className='text-[#2C2D2E] text-[16px] pt-[160px]'>LEANGROUP - тубы и этикетки</p>
                                <h2 className='text-[40px] text-[#2C2D2E] font-bold pt-[16px]'>Ламинатные тубы</h2>
                                <div className='hero-desc'>
                                    <p className='text-[16px] text-[#2C2D2E] pt-[17px]'>
                                        Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой
                                        индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do‑it‑Yourself).
                                    </p>
                                </div>
                                <button className='mt-[20px] text-[16px] text-[#EF7C00] w-[120px] h-[40px] rounded-[5px] border-[1px] border-[#EF7C00] hover:bg-[#EF7C00] hover:text-[white] duration-300'>
                                    Каталог
                                </button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section class="hero2">
                        <div className='container'>
                            <div class="hero-content">
                                <p className='text-[white] text-[16px] pt-[160px]'>LEANGROUP - тубы и этикетки</p>
                                <h2 className='text-[40px] text-[white] font-bold pt-[16px]'>Ламинатные тубы</h2>
                                <div className='hero-desc'>
                                    <p className='text-[16px] text-[white] pt-[17px]'>
                                        Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой
                                        индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do‑it‑Yourself).
                                    </p>
                                </div>
                                <button className='mt-[20px] text-[16px] text-[#EF7C00] w-[120px] h-[40px] rounded-[5px] border-[1px] border-[#EF7C00] hover:bg-[#EF7C00] hover:text-[white] duration-300'>
                                    Каталог
                                </button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section class="hero3">
                        <div className='container'>
                            <div class="hero-content">
                                <p className='text-[white] text-[16px] pt-[160px]'>LEANGROUP - тубы и этикетки</p>
                                <h2 className='text-[40px] text-[white] font-bold pt-[16px]'>Ламинатные тубы</h2>
                                <div className='hero-desc'>
                                    <p className='text-[16px] text-[white] pt-[17px]'>
                                        Используются для производства зубных паст. Широко применяются в <br /> сегменте косметики, пищевой
                                        индустрии, парафармацевтике, бытовой <br /> химии и DIY (Do‑it‑Yourself).
                                    </p>
                                </div>
                                <button className='mt-[20px] text-[16px] text-[#EF7C00] w-[120px] h-[40px] rounded-[5px] border-[1px] border-[#EF7C00] hover:bg-[#EF7C00] hover:text-[white] duration-300'>
                                    Каталог
                                </button>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
