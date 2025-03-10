import images from "assets/images"
import TitleSection from "components/titleSection"
import React from "react"
import { Box, useNavigate } from "zmp-ui"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const eventData = [
    {
        title: 'Du lịch Long An nhiều chương trình hấp dẫn phục vụ 𝐓𝐮𝐚̂̀𝐧 𝐕𝐚̆𝐧 𝐡𝐨́𝐚 – 𝐓𝐡𝐞̂̉ 𝐭𝐡𝐚𝐨 – 𝐃𝐮 𝐥𝐢̣𝐜𝐡 𝐭𝐢̉𝐧𝐡 𝐥𝐚̂̀𝐧 𝐭𝐡𝐮̛́ 𝟐 𝐧𝐚̆𝐦 𝟐𝟎𝟐𝟒 (28/11 - 04/12/2024) ',
        category: 'Sự kiện',
        publisedDate: '22/02/2025',
        imgUrl: 'https://scontent.iocvnpt.com/resources/portal//Images/LAN/toanlm.lan/2024/z6064936543707_e78248ae6d5959b5ba6ba1a560e91a61_916470942.jpg'
    },
    {
        title: 'Tuần Văn hóa – Thể thao – Du lịch tỉnh Long An',
        category: 'Sự kiện',
        publisedDate: '04/03/2025',
        imgUrl: 'https://scontent.iocvnpt.com/resources/portal//Images/LAN/toanlm/2024/z6055808802997_04702604dc1650e5cde5d49bd5c45781_895515248.jpg'
    },
    {
        title: 'KHÁT VỌNG SÔNG VÀM 2024 - LONG AN ĐÃ SẴN SÀNG',
        category: 'Sự kiện',
        publisedDate: '22/02/2025',
        imgUrl: 'https://scontent.iocvnpt.com/resources/portal//Images/LAN/toanlm/2024/467404204_122100529274628028_4299896698637172696_n_100185913.jpg'
    },
]

const EventSection: React.FC = () => {

    const navigate = useNavigate()

    return (
        <Box py={4} pl={4} className="news-section">
            <Box pr={4}>
                <TitleSection title="Sự kiện mới nhất" handleClick={() => navigate('/news')} /> 
            </Box>
            <Swiper
                spaceBetween={12}
                slidesPerView={1.06}
                loop
            >
                {
                    eventData.map((item, index) => (
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

export default EventSection