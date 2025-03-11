import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

export const imagesGallery = [
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/vamcofarmstay/hinh_anh_homestay/dam_sen_vamcofarmstay_584108114.png',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/toansauconkun994/1_647964214.jpg',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/vamcofarmstay/hinh_anh_homestay/homestay_vamcofarmstay_13_56952635.png',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/vamcofarmstay/hinh_anh_homestay/homestay_vamcofarmstay_4_381296712.png',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/vamcofarmstay/hinh_anh_homestay/homestay_vamcofarmstay_11_840781801.png',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/vamcofarmstay/hinh_anh_homestay/ho_boi_vamcofarmstay_2_377571207.png',
    'https://scontent.iocvnpt.com/resources/portal//Images/LAN/vamcofarmstay/hinh_anh_homestay/homestay_vamcofarmstay_16_663281182.png'
]

const location = {
    lat: 10.482655336277755,
    lng: 106.69146306623148,
    name: "HOMESTAY VÀM CỎ FARMSTAY",
    address: "Đường Rạch Tre, ấp 5, xã An Thạnh, huyện Bến Lức, tỉnh Long An Tỉnh Long An",
    img: "https://scontent.iocvnpt.com/resources/portal//Images/LAN/toansauconkun994/1_647964214.jpg",
    markerImg: "https://cdn-icons-png.flaticon.com/128/3009/3009489.png",
};

const GuideDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết hướng dẫn viên" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Nguyễn Văn Nam</h1>
                                <div className="actions">
                                    <button className="btn-bookmark"><img src={images.favorite} alt="mục yêu thích" /></button>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <img src="https://vcdn1-dulich.vnecdn.net/2019/06/26/DSC1077-1561521306-5685-1561524976.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=LwRQwSOWFP6j3s6L3RXusw" alt="ssd" />
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">
                                    Thông tin
                                </h3>
                                <div className="infor-detail">
                                    <ul className="schedule-tour">
                                        <li>
                                            Số điện thoại: 0901234567
                                        </li>
                                        <li>
                                            Email: nam.nguyen@example.com
                                        </li>
                                        <li>
                                            Kinh nghiệm: 5 năm
                                        </li>
                                        <li>
                                            Ngoại ngữ: Tiếng Anh, Tiếng Trung
                                        </li>
                                        <li>
                                            Chuyên môn: Tour sinh thái, Tour văn hóa
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">Mô tả</h3>
                                <div className="detail-content" dangerouslySetInnerHTML={{
                                    __html: `
                                    <p>Tôi là Nguyễn Văn Nam, hướng dẫn viên du lịch chuyên nghiệp với hơn 5 năm kinh nghiệm dẫn tour trong và ngoài nước. Am hiểu sâu sắc về văn hóa, lịch sử Việt Nam và đặc biệt có niềm đam mê khám phá, chia sẻ những câu chuyện thú vị với du khách. Sự nhiệt tình, chu đáo và khả năng xử lý tình huống linh hoạt chính là điểm mạnh giúp tôi luôn mang đến những chuyến đi trọn vẹn và đáng nhớ.</p>
                                `}}>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </Box>
                <Box px={4} pb={4}>
                    <TitleSection title="Địa điểm nổi bật khác" />
                    <div className="detail-sidebar">
                        <div className="sidebar-item">
                            <div className="detail-others">
                            <div className="list">
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://media.yeah1.com/resize/868x505/files/phuongthao09vd/2023/12/26/co-gai-co-ten-la-chieu-hoang-6-120848.jpg" alt="Trồng khoai mì ruột vàng mang lại thu
                                            nhập cao" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Hoàng Ngọc Anh</div>
                                            <div className="date">
                                                Bến Lức, Long An
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://trekkingtoursapa.com/wp-content/uploads/2020/05/Hu-Lo.jpg" alt="Cửa khẩu Quốc tế Bình Hiệp" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Trần Quang Huy</div>
                                            <div className="date">
                                                Bến Lức, Long An
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://cantho-school.fpt.edu.vn/wp-content/uploads/con-gai-co-nen-hoc-quan-tri-du-lich-va-lu-hanh-1.jpg" alt="Bảo tàng Long An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Phạm Thùy Linh
                                            </div>
                                            <div className="date">
                                                Bến Lức, Long An
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://media.vov.vn/sites/default/files/styles/large/public/2022-09-2/hdv-nhu-quynh.jpg" alt="Công viên 7 Kỳ Quan Thế Giới" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Võ Thanh Trúc</div>
                                            <div className="date">
                                                Bến Lức, Long An
                                            </div>
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

export default GuideDetailPage