import { Icon } from "@iconify/react"
import CommentTemp from "components/comment-temp"
import { Divider } from "components/divider"
import { HeaderSub } from "components/header-sub"
import { EventList, NewsItem, NewsOthers } from "components/news"
import { EVENTDATA } from "components/news/EventList"
import TitleSection from "components/titleSection"
import { News, NEWSDATA } from "constants/utinities"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, Page, useNavigate, } from "zmp-ui"

const NewsDetailPage: React.FC = () => {

    const navigate = useNavigate()


    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết sự kiện" />
                <Box px={4} pb={4}>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[24px] w-[5px] bg-[#355933] block"></div>
                        <h3 className="text-[16px] leading-[1] font-medium">Sự kiện</h3>
                    </div>
                    <h2 className="text-[22px] leading-[28px] font-semibold mb-2 text-[#355933]">
                        Tuần Văn hóa - Thể thao - Du lịch tỉnh Long An lần thứ 2 năm 2024 - Thành
                        công tốt đẹp
                    </h2>
                    <h4 className="text-[14px] leading-[1] font-medium">04/02/2025</h4>
                    <Box mt={6}>
                        <div className="detail-content" dangerouslySetInnerHTML={{
                            __html: `<div class="content-fck slider-jsgallery" style="margin: 0; padding: 0; text-align: center">
                                <p style="margin: 0 0 10px; padding: 0; text-align: center"><span style="color: rgba(0, 0, 0, 1)"><img alt="" title="Tuần Văn hóa - Thể thao - Du lịch tỉnh Long An lần thứ 2 năm 2024 - Thành công tốt đẹp" class="zoomimg i-img-slider-jsgallery" src="https://www.baolongan.vn/image/news/2024/20241205/images/khai%20m%E1%BA%A1c%20(38).jpg" style="height: 334px; width: 500px; margin: 0; padding: 5px 0; border: 0"></span>
                                </p>
                                <span style="color: rgba(0, 0, 0, 1)"><em style="width: 510px; margin: auto; padding: 0">Chương trình nghệ thuật đặc sắc,
                                        được đầu tư kỹ lưỡng tại lễ khai mạc</em></span>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)"><em style="margin: 5px; padding: 0"><span style="margin: 0; padding: 0"><strong>- PV: Ông có nhận xét gì sau 7
                                                    ngày diễn ra Tuần VHTTDL tỉnh Long An lần thứ 2 năm
                                                    2024?</strong></span></em></span></p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)"><span style="margin: 0; padding: 0; color: rgba(0, 0, 0, 1)">Ông Nguyễn Thành
                                            Thanh:</span>&nbsp;Được sự quan tâm chỉ đạo sâu sát của Tỉnh ủy, UBND tỉnh,
                                        đến thời điểm này, có thể khẳng định&nbsp;<span style="margin: 0; padding: 0">Tuần VHTTDL tỉnh Long An lần thứ 2 năm
                                            2024</span>&nbsp;đã diễn ra thành công tốt đẹp. Qua đây, góp phần không nhỏ
                                        trong việc giới thiệu, quảng bá tiềm năng, thế mạnh, thu hút đầu tư - thương
                                        mại - du lịch của tỉnh, gắn với việc phát huy các giá trị truyền thống, văn hóa,
                                        nhân văn và tài nguyên thiên nhiên của tỉnh với nhân dân và du khách.</span></p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)">Qua Tuần VHTTDL tỉnh lần thứ 2 năm 2024, tỉnh
                                        quảng bá đến bạn bè quốc tế rằng Long An có tiềm năng du lịch sinh thái, du lịch
                                        văn hóa, lịch sử cũng như du lịch vui chơi, giải trí, du lịch thể thao,... Từ
                                        đó, thu hút du khách nhiều hơn nữa trong thời gian tới, giúp ngành Du lịch phát
                                        triển bền vững, góp phần vào sự phát triển chung của tỉnh.</span></p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)"><strong>-&nbsp;</strong><em style="margin: 5px; padding: 0"><span style="margin: 0; padding: 0"><strong>PV: Một số kết quả nổi bật của
                                                    Tuần VHTTDL tỉnh Long An lần thứ 2 năm 2024 là gì, thưa
                                                    ông?</strong></span></em></span></p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)"><span style="margin: 0; padding: 0; color: rgba(0, 0, 0, 1)">Ông Nguyễn Thành
                                            Thanh:</span>&nbsp;Trong khuôn khổ sự kiện, 10 hoạt động được tổ chức theo
                                        đúng kế hoạch tạo nên không gian lễ hội hoành tráng, sôi động trong những ngày
                                        qua. Trong đó có thể kể đến những hoạt động chính như Lễ khai mạc Tuần VHTTDL
                                        tỉnh Long An lần thứ 2 năm 2024; Hội nghị Liên kết, hợp tác, xúc tiến du lịch và
                                        sản phẩm OCOP giữa TP.HCM và 13 tỉnh, thành phố Vùng Đồng bằng sông Cửu Long;
                                        cuộc thi “Tỏa sáng tài năng sinh viên”;&nbsp;<span style="margin: 0; padding: 0">Lễ hội Âm nhạc - Hite Jinro Festival
                                            2024</span>&nbsp;và các chương trình thể thao;...</span></p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)">Chỉ trong vòng 7 ngày diễn ra sự kiện, Long An
                                        đón và phục vụ hơn 500.000 lượt khách du lịch trong nước, quốc tế và nhân dân
                                        trong tỉnh đến tham quan, trải nghiệm các hoạt động VHTTDL, ẩm thực và các không
                                        gian giới thiệu, trưng bày, triển lãm,... Trong đó, các chuỗi sự kiện chính thu
                                        hút du khách bao gồm Hội chợ Thương mại, Ẩm thực, Du lịch đón hơn 160.000 lượt
                                        người đến ăn uống, mua sắm; Lễ hội Âm nhạc&nbsp; - Hite Jinro Festival 2024 với
                                        hơn 60.000 khán giả; trình diễn drone cùng nghệ thuật sân khấu đêm khai mạc đón
                                        hơn 20.000 người;...</span></p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)">Số lượng người đến dự các sự kiện quan trọng lên
                                        đến hàng&nbsp;trăm ngàn lượt người. Số lượng truy cập qua Báo Long An điện tử,
                                        các nền tảng mạng xã hội của Báo Long An, Đài Phát thanh và Truyền hình Long An
                                        cũng ở mức cao, tạo sự lan tỏa lớn. Đây là cơ hội để Long An quảng bá môi trường
                                        đầu tư, các khu, điểm du lịch trong tỉnh đến bạn bè trong và ngoài nước.</span>
                                </p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)">Chắc chắn rằng qua sự kiện này sẽ thu hút được
                                        khách du lịch đến Long An nhiều hơn cũng như thu hút được nhà đầu tư đến đầu tư
                                        vào các khu, điểm du lịch, giúp du lịch Long An phát triển bền vững hơn.</span>
                                </p>
                                <p style="margin: 0 0 10px; padding: 0; text-align: justify"><span style="color: rgba(0, 0, 0, 1)"><strong>-&nbsp;</strong><em style="margin: 5px; padding: 0"><span style="margin: 0; padding: 0"><strong>PV: Xin cảm ơn ông về cuộc phỏng
                                                    vấn này!./.</strong></span></em></span></p>
                            </div>`}}></div>
                    </Box>
                </Box>
                <Box px={4} mb={10}>
                    <CommentTemp />
                </Box>
                <Box px={4}>
                    <TitleSection title="Sự kiện khác khác" handleClick={() => navigate('/news')} />
                    <Box>
                        {
                            EVENTDATA.slice(1).map((item, index) => (
                                <NewsItem key={index} data={item} />
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default NewsDetailPage