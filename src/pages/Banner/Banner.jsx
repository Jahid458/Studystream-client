import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import bannerImage1 from '../../assets/image1.jpeg'
import bannerImage2 from '../../assets/images2.jpg'
import bannerImage3 from '../../assets/images3.jpeg'

import { Link } from 'react-router-dom';
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
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Welcome to Your Knowledge Haven</h2>
                            <p className='text-sm font-medium text-white mt-2'>Discover a world of books, knowledge, and endless possibilities. Your <br/> journey to wisdom starts here.</p>
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
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Explore Books Anytime, Anywhere....</h2>
                            <h4 className=' font-medium text-gray-200 mt-2'>Enjoy the convenience of accessing our library resources from anywhere, anytime. Here&apos;s what you&apos;ll get:</h4>

                            <ul className='mt-8 space-y-1'>
                                <p className='flex gap-1 items-center'><i className="fa-solid fa-check text-white"></i> <li className='text-gray-300'>Thousands of e-books, journals, and research materials.</li></p>
                                
                                <p className='flex gap-1 items-center'><i className="fa-solid fa-check text-white"></i><li className='text-gray-300'>Easily search and navigate through categories.</li></p>
                                
                                <p className='flex gap-1 items-center'><i className="fa-solid fa-check text-white"></i><li className='text-gray-300'>Access the library at any time of the day.</li></p>

                            </ul>
                            <Link
                                to='/'
                                
                            >
                            <button className=' px-4 py-3 mt-8  text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>Browse Our Digital Library</button>
                                
                            </Link>
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
                            <h2 className='text-3xl font-semibold text-white lg:text-4xl'>Unlock a World of Stories and Knowledge</h2>
                            <p className='text-sm font-medium text-white mt-2'>From thrilling adventures to insightful non-fiction, find the perfect book <br /> to inspire your mind and soul.</p>
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>

    );
};

export default Banner;