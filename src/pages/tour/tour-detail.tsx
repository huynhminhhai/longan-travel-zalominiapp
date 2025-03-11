import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

export const imagesGallery = [
    'https://cdn.tgdd.vn/Files/2022/03/24/1421996/lang-noi-tan-lap-cam-nang-du-lich-tat-tan-tat-tu-a-z-202203240740452210.jpg',
    'https://thamhiemmekong.com/wp-content/uploads/2020/03/langnoitanlap-1.jpg',
    'https://dulichphuocthanhiv.com/wp-content/uploads/2024/09/PT_Lang-Noi-Tan-Lap-Long-An-Ve-Dep-Vung-Song-Nuoc-Tu-Nhien3.jpg',
    'https://www.sacotravel.com/wp-content/uploads/2023/08/lang-noi-tan-lap.jpg',
    'https://dulichthuduc.com.vn/vnt_upload/news/MIEN-TAY/long-an/lang_noi_tan_lap_du_lich_thu_duc_5.jpg',
]

const location = {
    lat: 10.482655336277755,
    lng: 106.69146306623148,
    name: "HOMESTAY VÀM CỎ FARMSTAY",
    address: "Đường Rạch Tre, ấp 5, xã An Thạnh, huyện Bến Lức, tỉnh Long An Tỉnh Long An",
    img: "https://scontent.iocvnpt.com/resources/portal//Images/LAN/toansauconkun994/1_647964214.jpg",
    markerImg: "https://cdn-icons-png.flaticon.com/128/3009/3009489.png",
};

const TourDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết tour du lịch" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Du lịch Long An - Khám phá làng nổi Tân Lập từ Sài Gòn</h1>
                                <div className="actions">
                                    <button className="btn-bookmark"><img src={images.favorite} alt="mục yêu thích" /></button>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <ImageGallery images={imagesGallery} />
                            </div>
                            <div className="detail-body--item">

                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">
                                    Thông tin
                                </h3>
                                <div className="infor-detail">
                                    <ul>
                                        <li>
                                            <img src={images.place} alt="location" />
                                            <span>Đường Rạch Tre, ấp 5, xã An Thạnh, huyện Bến Lức, tỉnh Long An Tỉnh Long An</span>
                                        </li>
                                        <li>
                                            <img src={images.email} alt="email" />
                                            <span>cskh@vamcofarmstay.com</span>
                                        </li>
                                        <li>
                                            <img src={images.phone} alt="phone" />
                                            <span>0397455789</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">
                                    Thông tin
                                </h3>
                                <div className="infor-detail">
                                    <ul className="schedule-tour">
                                        <li>SĐT liên hệ: 0848551554</li>
                                        <li>
                                            MÃ TOUR: HUFC7P
                                        </li>
                                        <li>
                                            Phương tiện di chuyển: Ô tô
                                        </li>
                                        <li>
                                            Thời gian: 1 Ngày
                                        </li>
                                        <li>
                                            Nơi khởi hành: TP. Hồ Chí Minh
                                        </li>
                                        <li>
                                            Ngày khởi hành: Chủ Nhật
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">Lịch trình</h3>
                                <div className="detail-content" dangerouslySetInnerHTML={{
                                    __html: `
                                        <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description entry-content" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
                                            <p style="text-align: center;"><strong>–o0o–</strong></p>
                                            <h2><span style="color: #000000; font-size: 90%;"><strong>BUỔI SÁNG: TP. HỒ CHÍ MINH
                                                        – MỘC HOÁ&nbsp; </strong>(Ăn Sáng, Trưa)</span></h2>
                                            <p><strong>06h00</strong><strong>:&nbsp;&nbsp; </strong><strong>HDV META Event &amp;
                                                    Travel</strong> đón khách tại điểm hẹn và bắt đầu hành trình đi <strong><a href="https://vi.wikipedia.org/wiki/M%E1%BB%99c_H%C3%B3a" rel="nofollow noopener" target="_blank">Mộc Hoá</a>.</strong></p>
                                            <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </strong>Dừng chân ăn sáng, sau đó quý khách di chuyển bằng vỏ lãi vào khu trung
                                                tâm tham quan:</p>
                                            <ul>
                                                <li><strong>Cánh đồng cỏ bàng</strong>– từng là phim trường của bộ phim Cánh
                                                    Đồng Bất Tận</li>
                                                <li><strong>Cánh đồng dược liệu Sao Mai</strong>– Đây là khu bảo tồn nguồn gene
                                                    của Đồng Tháp Mười</li>
                                                <li><strong>Nhà máy Mộc Hoa Tràm</strong>– nơi sản xuất các sản phẩm dược liệu
                                                    từ thiên nhiên như tinh dầu, mỹ phẩm, thực phẩm chức năng, đông dược</li>
                                            </ul>
                                            <p><strong>Trưa: &nbsp;&nbsp;&nbsp;&nbsp; </strong>Quý khách ăn trưa và nghỉ ngơi
                                                tại khu trung tâm của KDL.</p>
                                            <h2><span style="color: #000000; font-size: 90%;"><strong>BUỔI CHIỀU: TRỞ VỀ TP. HỒ
                                                        CHÍ MINH</strong></span></h2>
                                            <p><strong>Chiều:&nbsp; &nbsp;</strong>Quý khách tham gia chương trình:</p>
                                            <ul>
                                                <li><strong>Trekking, chạy bộ, đạp xe thăm rừng với cung đường 13km.</strong>
                                                </li>
                                                <li><strong>Chèo xuồng kayak, xuồng composite</strong></li>
                                                <li><strong>Bơi lội, lặn ngắm thảm thực vật tại hồ nước mưa</strong></li>
                                            </ul>
                                            <p>Sau đó, Xe đưa đoàn di chuyển về lại TP.HCM. Kết thúc chuyến tham quan.
                                                <strong>HDV <a href="https://metaeventtravel.vn/">META Event &amp;
                                                        Travel</a></strong> chia tay và hẹn gặp lại quý khách trong những <a href="https://metaeventtravel.vn/tour-du-lich-long-an"><strong>Tour Long
                                                        An</strong></a> khác.</p>
                                            <p style="text-align: center;"><strong>–o0o–</strong></p>
                                            
                                        </div>
                                    `}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box px={4} mb={10}>
                    <CommentTemp />
                </Box>
                <Box px={4} pb={4}>
                    <TitleSection title="Tour du lịch khác" />
                    <div className="detail-sidebar">
                        <div className="sidebar-item">
                            <div className="detail-others">
                                <div className="list">
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://ik.imagekit.io/tvlk/blog/2022/12/dia-diem-du-lich-long-an-1.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2" alt="Trồng khoai mì ruột vàng mang lại thu
                                            nhập cao" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Vi vu buổi tối tại Long An</div>
                                            <div className="date">2 địa điểm - 1 ngày</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/duc_hoa/lang_co_phuoc_loc_tho/cropper_637189358343630424.jpg" alt="Cửa khẩu Quốc tế Bình Hiệp" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Tour 2 ngày 1 đêm- khách nội địa</div>
                                            <div className="date">3 địa điểm - 2 ngày</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://datviettour.com.vn/uploads/images/mien-nam/long-an/danh-thang/tour-lang-noi-tan-lap-long-an.jpg" alt="Bảo tàng Long An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Tour 01 ngày- khách nội địa

                                            </div>
                                            <div className="date">1 địa điểm - 1 ngày</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://i.ytimg.com/vi/UqZjr4CA-PE/maxresdefault.jpg" alt="Công viên 7 Kỳ Quan Thế Giới" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Thưởng thức ẩm thực</div>
                                            <div className="date">2 địa điểm - 1 ngày</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        </Page>
    )
}

export default TourDetailPage