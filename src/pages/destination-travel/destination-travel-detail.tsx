import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

export const imagesGallery = [
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/bangdc.lan/canhdongbattan/khudulichcanhdongbattan_1_732599852.jpg',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/bangdc.lan/canhdongbattan/kham_pha_khu_du_lich_sinh_thai_canh_dong_bat_tan_o_long_an_21593745.jpg',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/bangdc.lan/canhdongbattan/canhdongbattan_1_324758018.jpg',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/bangdc.lan/canhdongbattan/canhdongbattanlongan03_823107031.jpg',
]

const location = {
    lat: 10.72528636622164,
    lng: 106.08484848083191,
    name: "Khu du lịch Cánh Đồng Bất Tận",
    address: " Ấp Cầu Ngang, Xã Long Hựu Đông, Huyện Cần Đước, Tỉnh Long An",
    img: "https://ik.imagekit.io/tvlk/blog/2023/11/nha-tram-cot-cover.jpg",
    markerImg: "https://cdn-icons-png.flaticon.com/128/7060/7060110.png", // Thêm ảnh marker tùy chỉnh
};

const DestinationTravelDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết điểm đến" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Cánh đồng bất tận</h1>
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
                                            <span>KP3, Bình Phong Thạnh, Mộc Hóa, Long An, Việt Nam</span>
                                        </li>
                                        <li>
                                            <img src={images.email} alt="email" />
                                            <span>0911136168@gmail.com</span>
                                        </li>
                                        <li>
                                            <img src={images.phone} alt="phone" />
                                            <span>0397455789</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">Mô tả</h3>
                                <div className="detail-content" dangerouslySetInnerHTML={{
                                    __html: `
                                    <div style="text-align: justify; line-height: 30px; transition: 0.7s;" class="description animate-in fadeInLeft animated" data-speed="0.7" data-show-screen="0.69">
                                    <p>Điểm du lịch mang nét hoang sơ với những cánh rừng tràm gió, đồng cỏ bàng cùng
                                        nhiều hoạt động giúp du khách thư giãn ngoài trời.</p>

                                    <p>Nằm cách trung tâm TP HCM khoảng 80 km, khu du lịch "Cánh đồng bất tận" thuộc
                                        Trung tâm Nghiên cứu bảo tồn và phát triển dược liệu Đồng Tháp Mười, nằm tại khu
                                        phố 3, thị trấn Bình Phong Thạnh, huyện Mộc Hóa. Nơi này có hơn 1.000 ha rừng
                                        tràm gió nguyên sinh tuổi đời hàng trăm năm và một "rừng thuốc" bảo tồn hơn 80
                                        loại gene thảo mộc quý hiếm.</p>

                                </div>   
                                    
                                `}}>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">Bản đồ</h3>
                                <div className="infor-map">
                                    <SingleLocationMap location={location} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box px={4} mb={10}>
                    <CommentTemp />
                </Box>
                <Box px={4} pb={4}>
                    <TitleSection title="Địa điểm nổi bật khác" handleClick={() => navigate('/news')} />
                    <div className="detail-sidebar">
                        <div className="sidebar-item">
                            <div className="detail-others">
                                <div className="list">
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/huongvamco/huyen_can_duoc/nga_tu_rach_kien/diem_qua_7_di_tich_lich_su_noi_bat_o_long_an_2_218845898.jpg" />
                                        </div>
                                        <div className="content">
                                            <div className="title">DI TÍCH NGÃ TƯ RẠCH KIẾN</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/huongvamco/huyen_can_duoc/phuoc_lam/chua_phuoc_lam_long_an_1_700x385_242728256.jpg" alt="Cửa khẩu Quốc tế Bình Hiệp" />
                                        </div>
                                        <div className="content">
                                            <div className="title">DI TÍCH CHÙA PHƯỚC LÂM</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/dia_diem/dinh_tong_than/8566_nha_tong_than_637189153551780877.jpg" alt="Bảo tàng Long An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">DI TÍCH LỊCH SỬ NHÀ TỔNG THẬN
                                            </div>
                                            <div className="date">10,95km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://www.baolongan.vn/image/news/2017/20171025/fckimage/7118_B%C3%ACnh-Th%C3%A0nh.jpg" alt="Công viên 7 Kỳ Quan Thế Giới" />
                                        </div>
                                        <div className="content">
                                            <div className="title">KHU DI TÍCH LỊCH SỬ CÁCH MẠNG TỈNH LONG AN</div>
                                            <div className="date">13,21km</div>
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

export default DestinationTravelDetailPage