import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';

const Banner = () => {
    return (
        <div>
            <div className="lg:mt-16 mt-20">
            <Swiper

                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={
                    { delay: 2000 }
                }
                pagination={{
                    clickable: true,
                }}


            >
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] md:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img src="https://i.ibb.co/BwmMVfw/Screenshot-2024-04-27-015834.png" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Welcome to Art & Craft Sliders</h1>
                                    <p>Showcase your range of accommodations, from cozy rooms to lavish suites, emphasizing comfort, style, and amenities.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px]  flex-col flex md:flex-row-reverse lg:flex-row-reverse">
                                <div className="lg:ml-36">
                                    <img  src="https://i.ibb.co/WxNhRRS/Screenshot-2024-04-27-013440.png" className=" rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Art & Craft Home Decor</h1>
                                    <p>Highlight your commitment to exceptional service, ensuring guests feel pampered and well-cared for throughout their stay.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img src="https://i.ibb.co/r3g9wRP/Screenshot-2024-04-27-013816.png" className="rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Special Home Decor Jute Parts</h1>
                                    <p>Present any current promotions, deals, or packages available to entice visitors to book their stay with you.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mt-12">
                        <div className="hero p-8 rounded-3xl bg-base-200">
                            <div className="hero-content lg:h-[400px] flex-col flex md:flex-row-reverse lg:flex-row-reverse ">
                                <div className="lg:ml-36">
                                    <img src="https://i.ibb.co/Jp9hDX8/Screenshot-2024-04-27-004210.png" className="rounded-lg shadow-2xl" />
                                </div>
                                <div className="space-y-4 pl-12">
                                    <h1 className="text-5xl font-bold mb-12">Jute and wooden jewellery</h1>
                                    <p>Share positive feedback from previous guests, building trust and credibility by showcasing real experiences and satisfaction.</p>
                                    <button className="btn text-white font-bold bg-blue-400">Explore More</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
            {/*  */}
            
        </div>
    )
}

export default Banner
