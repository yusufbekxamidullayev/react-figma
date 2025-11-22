// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './mode.css'

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-5.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-5.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-5.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-3.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-5.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://lean-group-tau.vercel.app/certificate-3.png" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
