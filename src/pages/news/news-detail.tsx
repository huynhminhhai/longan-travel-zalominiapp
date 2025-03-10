import { Icon } from "@iconify/react"
import CommentTemp from "components/comment-temp"
import { Divider } from "components/divider"
import { HeaderSub } from "components/header-sub"
import { NewsOthers } from "components/news"
import TitleSection from "components/titleSection"
import { News, NEWSDATA } from "constants/utinities"
import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Box, Page, useNavigate,  } from "zmp-ui"

const NewsDetailPage: React.FC = () => {

    const navigate = useNavigate()


    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết tin tức" />
                <Box px={4} pb={4}>
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-[24px] w-[5px] bg-[#355933] block"></div>
                        <h3 className="text-[16px] leading-[1] font-medium">Du lịch</h3>
                    </div>
                    <h2 className="text-[22px] leading-[28px] font-semibold mb-2 text-[#355933]">
                        Du lịch Long An - Thêm nhiều hứa hẹn
                    </h2>
                    <h4 className="text-[14px] leading-[1] font-medium">04/02/2025</h4>
                    <Box mt={6}>
                        <div className="detail-content" dangerouslySetInnerHTML={{__html: `<div class="detail-content">
                            <p><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;">
                                    </em></p><div class="b-img-slider-jsgallery" data-pos="0"><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;"><img title="Du lịch Long An - Thêm nhiều hứa hẹn" data-socail-link="https://baolongan.vn/du-lich-long-an-them-nhieu-hua-hen-a189859.html" class="zoomimg i-img-slider-jsgallery" alt="" src="https://www.baolongan.vn/image/news/2025/20250203/images/19_2025-37_52534448_475437088-1149167247217145-3869741133198436879-n.jpg" style="width: 500px; height: 375px; cursor: pointer;" data-pos="0">
                                    </em></div><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;">
                                </em><p></p>

                            <p><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;">&nbsp;"Nhốt
                                    người thả thú" là điểm nhấn tại Vườn Thú Mỹ Quỳnh (huyện Đức Hòa)</em></p>

                            <p><strong>Đón 65.000 lượt khách trong Tết Nguyên đán</strong></p>

                            <p>Năm 2024, lần đầu tiên tỉnh đón hơn <strong><a href="https://baolongan.vn/hon-500-000-luot-khach-du-lich-den-long-an-trong-tuan-van-hoa-the-thao-du-lich-tinh-lan-thu-2-a186617.html" target="_blank"><span style="color:#0000FF;">2 triệu lượt du
                                            khách</span></a></strong> trong năm với tổng doanh thu vượt 1.000 tỉ
                                đồng. Dịp Tết Nguyên đán Ất Tỵ năm 2025, mặc dù một số điểm du lịch trong tỉnh không
                                mở cửa đón khách (khu du lịch (KDL) Happy Land, KDL Vàm Cỏ farmstay) nhưng lượt du
                                khách đến Long An không giảm.</p>

                            <p>Các KDL trong tỉnh đều tập trung phát triển các sản phẩm chủ lực, xây dựng các sản
                                phẩm du lịch mới và nâng cấp sản phẩm đang khai thác. Tại KDL Làng Nổi Tân Lập, bên
                                cạnh các dịch vụ tham quan rừng tràm, trải nghiệm đời sống vùng nước nổi (dở lợp bắt
                                cá, câu cá, bắt ốc,...) thì dịch vụ chèo thuyền Kayak, lặn ngắm thủy sinh vừa đưa
                                vào phục vụ cách đây không lâu cũng thu hút sự quan tâm của du khách. Trong kỳ nghỉ
                                Tết Nguyên đán Ất Tỵ năm 2025, KDL Làng Nổi Tân Lập đón khoảng 1.000 lượt khách với
                                khoảng 100 khách lưu trú.</p>
                            <p>Tiếp tục phát huy thế mạnh là vườn thú bán hoang dã nổi bật ngay bên cạnh TP.HCM,
                                Vườn Thú Mỹ Quỳnh tiếp tục là điểm đến được quan tâm hàng đầu tại Long An và đón
                                khoảng 5.000 lượt khách chỉ trong kỳ nghỉ tết. Trong đó, dịch vụ “nhốt người thả
                                thú” vẫn là điểm nhấn nổi bật nhất, bên cạnh đa dạng các dịch vụ vui chơi, giải trí
                                trong nhà và ngoài trời khác.</p>

                            <p style="text-align: center;">
                            </p><div class="b-img-slider-jsgallery" data-pos="1"><img title="Du lịch Long An - Thêm nhiều hứa hẹn" data-socail-link="https://baolongan.vn/du-lich-long-an-them-nhieu-hua-hen-a189859.html" class="zoomimg i-img-slider-jsgallery" alt="" src="https://www.baolongan.vn/image/news/2025/20250203/images/19_2025-37_57809507_475997289-1149166797217190-6093460241099346470-n.jpg" style="width: 500px; height: 375px; cursor: pointer;" data-pos="1"></div>
                            <p></p>

                            <p>Các khu, điểm du lịch khác trong địa bàn tỉnh: Chavi Garden, Phước Lộc Thọ, Cánh Đồng
                                Bất Tận, Vân Lại Viên đón từ 200 - 1.000 lượt khách trong dịp này.</p>

                            <p>Tất cả các điểm đến đều chủ động xây dựng kế hoạch phục vụ khách du lịch trong dịp
                                Tết Nguyên đán Ất Tỵ năm 2025 từ việc chuẩn bị đủ thực phẩm, hàng hóa đến phòng,
                                chống cháy, nổ, bảo đảm an toàn thực phẩm và bảo vệ môi trường.</p>

                            <p>Thông tin từ Sở Văn hóa, Thể thao và Du lịch, việc chấp hành quy định pháp luật về
                                giá, niêm yết giá và bán đúng giá niêm yết được các điểm đến thực hiện nghiêm. Trong
                                tỉnh không xảy ra tình trạng tùy tiện nâng giá, chèo kéo&nbsp;du khách. Trong kỳ
                                nghỉ tết năm nay, tỉnh đón khoảng 65.000 lượt khách với doanh thu khoảng 32 tỉ đồng.
                            </p>

                            <p><strong>Từng bước khai thác du lịch đường sông</strong></p>

                            <p><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;">
                                    </em></p><div class="b-img-slider-jsgallery" data-pos="2"><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;"><img title="Du lịch Long An - Thêm nhiều hứa hẹn" data-socail-link="https://baolongan.vn/du-lich-long-an-them-nhieu-hua-hen-a189859.html" class="zoomimg i-img-slider-jsgallery" alt="" src="https://www.baolongan.vn/image/news/2025/20250203/images/19_2025-37_82273300_462530255-1719615295454510-8750804818931214311-n.jpg" style="width: 500px; height: 375px; cursor: pointer;" data-pos="2">
                                    </em></div><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;">
                                </em><p></p>

                            <p><em style="color:#808080;float:left;font-size:small;margin-bottom:5px;margin:auto;text-align:center;width:100%;">Khu
                                    du lịch Làng Nổi Tân Lập (huyện Mộc Hóa) là nơi du khách có thể trải nghiệm cuộc
                                    sống ở vùng Đồng Tháp Mười (Ảnh: KDL cung cấp)</em></p>

                            <p><strong><a href="https://baolongan.vn/dip-tet-co-truyen-long-an-don-khoang-65-ngan-luot-khach-du-lich-a189801.html" target="_blank"><span style="color:#0000FF;">Những “tín hiệu”
                                            vui</span></a></strong> không chỉ thể hiện qua con số từ các khu, điểm
                                du lịch mà còn từ những dịch vụ mới được các địa phương phát triển. Long An vốn nổi
                                tiếng với đôi dòng sông Vàm Cỏ Đông và Vàm Cỏ Tây thơ mộng, hào hùng. Tiềm năng phát
                                triển du lịch đường sông tại tỉnh luôn được đánh giá cao về cả những giá trị sẵn có
                                lẫn khả năng kết nối tốt với TP.HCM.</p>

                            <p>Giám đốc điều hành Công ty Cổ phần Les Rives - Liêu Thị Mỹ Hạnh khẳng định, với lợi
                                thế về cảnh quan và bề dày văn hóa, lịch sử, các tour&nbsp;đường sông về Long An rất
                                thích hợp dành cho du khách nước ngoài, những người mong muốn tìm về những miền quê
                                hiền hòa, đậm chất Nam Bộ.</p>

                            <p>Nắm bắt được những điều đó, UBND huyện Thủ Thừa triển khai đưa vào hoạt động bến thủy
                                nội địa trên kênh Thủ Thừa, ngay khu vực đình Vĩnh Phong, chợ Thủ Thừa để phục vụ
                                hành khách và bốc dỡ hàng hóa. Đây là điểm nhấn mới, tạo điều kiện thuận lợi cho các
                                tour du lịch đường sông về với huyện Thủ Thừa.</p>

                            <p>Tại TP.Tân An, việc khai thác du lịch đường sông cũng được chú trọng. Hai bến thủy
                                tại sông Vàm Cỏ Tây và sông Bảo Định được xây dựng nhằm phục vụ hoạt động du lịch.
                                Dự kiến, sẽ có những chuyến tàu du lịch hoạt động tại khu vực này trong thời gian
                                tới, từng bước hiện thực hóa ý tưởng phát triển du lịch “trên bến, dưới thuyền” tại
                                TP.Tân An.</p>

                            <p>Trước đó, Trung tâm Thông tin Xúc tiến Du lịch cũng đưa đoàn khảo sát của các doanh
                                nghiệp lữ hành và nhà đầu tư bến tàu du lịch tại TP.HCM về Long An tham quan sông
                                Vàm Cỏ Đông, sông Vàm Cỏ Tây, sông Vàm Thủ và kênh Bảo Định,… góp phần khai thác
                                hiệu quả loại hình du lịch đường sông thời gian tới.</p>

                            <p>Với những tín hiệu tích cực, du lịch Long An đang trên đà phát triển. Sự nỗ lực của
                                các cấp chính quyền, doanh nghiệp và người dân, việc khai thác các tiềm năng du lịch
                                sẵn có đang ngày càng phát huy hiệu quả và mang đến nhiều kỳ vọng./.</p>

                            <p style="text-align: right;"><strong>Mộc Châu</strong></p>
                        </div>`}}></div>
                    </Box>
                </Box>
                <Box px={4} mb={10}>
                    <CommentTemp />
                </Box>
                <Box px={4}>
                    <TitleSection title="Tin tức khác" handleClick={() => navigate('/news')} />
                    <NewsOthers idNews={Number(1)} />
                </Box>
                
            </Box>
        </Page>
    )
}

export default NewsDetailPage