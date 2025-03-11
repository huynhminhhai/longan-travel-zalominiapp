import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

export const imagesGallery = [
    'https://ik.imagekit.io/tvlk/blog/2023/11/nha-tram-cot-1.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
    'https://ik.imagekit.io/tvlk/blog/2023/11/nha-tram-cot-9-1024x768.jpg?tr=q-70,c-at_max,w-500,h-300,dpr-2',
    'https://ik.imagekit.io/tvlk/blog/2023/11/nha-tram-cot-cover.jpg',
]

const location = {
    lat: 10.482655336277755,
    lng: 106.69146306623148,
    name: "Nhà Trăm Cột",
    address: " Ấp Cầu Ngang, Xã Long Hựu Đông, Huyện Cần Đước, Tỉnh Long An",
    img: "https://ik.imagekit.io/tvlk/blog/2023/11/nha-tram-cot-cover.jpg",
    markerImg: "https://cdn-icons-png.flaticon.com/128/7060/7060110.png", // Thêm ảnh marker tùy chỉnh
};

const DestinationDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết điểm đến" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Nhà Trăm Cột</h1>
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
                                            <span>Ấp Cầu Ngang, Xã Long Hựu Đông, Huyện Cần Đước, Tỉnh Long An</span>
                                        </li>
                                        <li>
                                            <img src={images.email} alt="email" />
                                            <span>dulichthongminh.longan@gmail.com</span>
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
                                    <div style="text-align: justify; line-height: 30px; transition: 0.7s;" className="description animate-in fadeInLeft animated" data-speed="0.7" data-show-screen="0.69">
                                        <p><strong> </strong></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="font-size:14.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Nhà
                                                            Trăm Cột được xây dựng vào những năm 1901-1903, tại ấp Trung, xã
                                                            Long Hựu Đông, huyện Cần Đước. Nhà có diện tích
                                                            882m<sup>2</sup>, tọa lạc trên một khu vườn rộng
                                                            4.044m<sup>2</sup>, chính diện hướng Tây Bắc. Nhà được xây dựng
                                                            hoàn toàn bằng gỗ (gỗ đỏ, gỗ mật), mái lợp ngói âm dương, nền
                                                            nhà bằng đá tảng cao 0,9m, mặt nền lát gạch tàu lục giác. Nhìn
                                                            trên bình đồ, Nhà Trăm Cột có kiểu chữ quốc, 3 gian, 2 chái. Nhà
                                                            gồm có hai phần: phần phía trước được bày trí theo kiểu ngoại
                                                            khách - nội tự (ngoài tiếp khách, trong thờ tự), phần phía sau
                                                            dùng để ở và sinh hoạt.</span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="font-size:14.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Theo
                                                            các nhà nghiên cứu, Nhà Trăm Cột có kiểu thức kiến trúc thời
                                                            Nguyễn, về đại thể mang dấu ấn rõ rệt của phong cách Huế nhưng
                                                            có nhiều nét tiểu dị trong đề tài trang trí, tạo được sự phong
                                                            phú và đa dạng, phản ánh một giai đoạn lịch sử - văn hóa của
                                                            vùng đất phương Nam cuối thế kỉ XIX đầu thế kỉ
                                                            XX.</span></span></span></span></p>

                                        <p style="margin-left:0cm; margin-right:0cm; text-align:justify"><span style="font-size:11pt"><span style="font-family:Arial,sans-serif"><span style="font-size:14.0pt"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Nhà
                                                            Trăm Cột đã được Bộ Văn Hóa - Thông Tin xếp hạng là di tích kiến
                                                            trúc nghệ thuật quốc gia tại Quyết định số 2890-VH/QĐ ngày
                                                            27/09/1997./.</span></span></span></span></p>

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
                    <TitleSection title="Địa điểm nổi bật khác" />
                    <div className="detail-sidebar">
                        <div className="sidebar-item">
                            <div className="detail-others">
                                <div className="list">
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://dulichtoivaban.com/wp-content/uploads/2023/08/Khu-du-lich-sinh-thai-Lang-Noi-Tan-Lap-o-Long-An.jpg.webp" alt="Trồng khoai mì ruột vàng mang lại thu
                                            nhập cao" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Làng nổi Tân Lập</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://cdn.media.dulich24.com.vn/diemden/cua-khau-binh-hiep-7264/cua-khau-binh-hiep-1.jpg" alt="Cửa khẩu Quốc tế Bình Hiệp" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Cửa khẩu Quốc tế Bình Hiệp</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/dia_diem/bao_tang_long_an/unnamed_1_copy_637189302797678077.jpg" alt="Bảo tàng Long An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Bảo tàng Long An
                                            </div>
                                            <div className="date">10,95km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://houserentaldanang.com/wp-content/uploads/2023/09/Cong-vien-7-ky-quan-Da-Nang-7.jpg" alt="Công viên 7 Kỳ Quan Thế Giới" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Công viên 7 Kỳ Quan Thế Giới</div>
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

export default DestinationDetailPage