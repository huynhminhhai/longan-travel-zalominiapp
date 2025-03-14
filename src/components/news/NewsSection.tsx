import images from "assets/images"
import TitleSection from "components/titleSection"
import React from "react"
import { Box, useNavigate } from "zmp-ui"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const newsData = [
    {
        title: 'Trồng khoai mì ruột vàng mang lại thu nhập cao',
        category: 'Xã hội',
        publisedDate: '22/02/2025',
        imgUrl: 'https://www.baolongan.vn/image/news/2025/20250228/images/62_766_img-1316.jpg'
    },
    {
        title: 'Du lịch Long An - Thêm nhiều hứa hẹn',
        category: 'Văn hóa - Giải trí',
        publisedDate: '04/03/2025',
        imgUrl: 'https://www.baolongan.vn/image/news/2025/20250203/images/19_2025-37_52534448_475437088-1149167247217145-3869741133198436879-n.jpg'
    },
    {
        title: 'Về xứ đồng bưng thưởng thức món ngon dân dã',
        category: 'Xã hội',
        publisedDate: '22/02/2025',
        imgUrl: 'https://www.baolongan.vn/image/news/2025/20250226/images/2_2025-36_94342599_ngu-o-i-da-n-di-xu-c-ca-lia-thia-o-ca-c-ca-nh-do-ng-nga-p-nu-o-c.jpg'
    },
    {
        title: 'Phát huy hiệu quả các mô hình bảo đảm an ninh, trật tự',
        category: 'Xã hội',
        publisedDate: '22/02/2025',
        imgUrl: 'https://www.baolongan.vn/image/news/2025/20250303/thumbnail/510x286/734_1741003486.jpeg'
    },
]

const NewsSection: React.FC = () => {

    const navigate = useNavigate()

    return (
        <Box py={4} pl={4} className="news-section">
            <Box pr={4}>
                <TitleSection title="Tin tức mới nhất" handleClick={() => navigate('/news')} /> 
            </Box>
            <Swiper
                spaceBetween={12}
                slidesPerView={1.06}
                loop
            >
                {
                    newsData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div onClick={() => navigate(`/news-detail`)}>
                                <img
                                    className="slide-img h-[200px] w-full object-cover rounded-xl"
                                    src={item.imgUrl || images.thumbnailNews}
                                    alt={item.title}
                                />
                                <div className="flex items-center justify-between mt-3 mb-2 pb-2 border-b-[1px] border-[#355933]">
                                    <div className="text-[13px] leading-[1] font-semibold">{item.category}</div>
                                    <div className="text-[12px] leading-[1] font-medium">{item.publisedDate}</div>
                                </div>
                                <h3 className="text-[16px] font-semibold whitespace-normal mt-2 line-clamp-2 ">{item.title}</h3>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </Box>
    )
}

export default NewsSection