import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import bannerImage1 from '../../assets/image1.jpeg'
import bannerImage2 from '../../assets/images2.jpg'
import bannerImage3 from '../../assets/images3.jpeg'


const Banner = () => {
    return (
        <div className=' py-20 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                {/* 1st  */}

                <SwiperSlide
                    style={{
                        backgroundImage: `url(${bannerImage1})`,
                        backgroundSize: 'cover',
                        height: "600px",
                        width: "full",
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center '>
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Limitless learning at your fingertips</h2>
                            <p className='text-sm font-medium text-white mt-2'>Education is no longer limited by walls; online learning opens doors to a world of possibilities</p>
                        </div>
                    </div>

                </SwiperSlide>

                {/* 2nd */}

                <SwiperSlide

                    style={{
                        backgroundImage: `url(${bannerImage2})`,
                        backgroundSize: 'cover',
                        height: "600px",
                        width: "full",
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70 '>
                        <div className='px-3 lg:px-0'>
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Explore Group Study Anytime, Anywhere....</h2>
                            <h4 className=' font-medium text-gray-200 mt-2'>The beauty of online education is that you can learn at your own pace, in your own space</h4>

                
                        </div>
                    </div>

                </SwiperSlide>

                {/* 3rd */}

                <SwiperSlide

                    style={{
                        backgroundImage: `url(${bannerImage3})`,
                        backgroundSize: 'cover',
                        height: "600px",
                        width: "full",
                        backgroundPosition: 'center',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center '>
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Unlock a World of Study and Knowledge</h2>
                            <p className='text-sm font-medium text-white mt-2'>The internet is the classroom of the future, where learning knows no boundaries</p>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Banner;