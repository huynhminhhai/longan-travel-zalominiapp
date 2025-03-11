import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

export const imagesGallery = [
    'http://haisanhoang.vn/thumbs/1366x525x1/upload/photo/765b15d8960aa09e9d17f78705256927-18833.jpeg',
    'http://haisanhoang.vn/thumbs/1366x525x1/upload/photo/img3852-88542.jpeg',
    'http://haisanhoang.vn/thumbs/1366x525x1/upload/photo/f4110c00572c9472cd3d26-3786.jpg',
    'http://haisanhoang.vn/thumbs/1366x525x1/upload/photo/tbao-lich-nghi-tet-haisanhoang-1-10800.png',
    'http://haisanhoang.vn/thumbs/1366x525x1/upload/photo/fb5ac84ce29fb79a2463759f07ad69dc-56874.jpeg'
]

const location = {
    lat: 10.630583572942681,
    lng: 106.49334510856187,
    name: "Hải sản Hoàng",
    address: "133 Đường Phan Văn Mãng, KP9, Bến Lức, Long An",
    img: "http://haisanhoang.vn/thumbs/1366x525x1/upload/photo/tbao-lich-nghi-tet-haisanhoang-1-10800.png",
    markerImg: "https://cdn-icons-png.flaticon.com/128/948/948036.png",
};

const RestaurantDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết nhà hàng" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Hải sản Hoàng</h1>
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
                                            <span>133 Đường Phan Văn Mãng, KP9, Bến Lức, Long An</span>
                                        </li>
                                        <li>
                                            <img src={images.email} alt="email" />
                                            <span>kithuatvienbenluc@gmail.com</span>
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
                                    <p>
                                        Hải sản Hoàng Bến Lức là sự lựa chọn tốt nhất cho các sự kiện thành công tại Long An.
                                    </p>
                                    <p>
                                        Bạn đang cần dịch vụ cung cấp suất ăn? Hải sản Bến Lức là dịch vụ cung cấp ẩm thực cao cấp tại Long An với lực lượng hậu cần chuyên nghiệp và thực phẩm chất lượng. Chúng tôi sẽ làm hài lòng các yêu cầu phục vụ những buổi tiệc, buổi họp và các sự kiện khác. Chúng tôi cung cấp tất cả các món hải sản tươi sống theo yêu cầu của bạn.
                                    </p>
                                    <p>
                                        Bạn đang quan tâm và muốn Hải sản Hoàng Bến Lức phục vụ sự kiện sắp tới, vui lòng liên lạc với chúng tôi tại số điện thoại 0937377246
                                    </p>
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
                                            <img src="https://file.hstatic.net/200000844097/file/st-lakes-golf-_-villas-goda-golf__27__6fcee2c4056e477cac6b367fb45011f2.png" alt="Trồng khoai mì ruột vàng mang lại thu
                                            nhập cao" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Nhà Hàng Sân Golf West Lakes</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal/Images/LAN/vamcofarmstay/hai_san_phu_quy/hai_san_phu_quy_11_521496205.jpg" alt="Cửa khẩu Quốc tế Bình Hiệp" />
                                        </div>
                                        <div className="content">
                                            <div className="title">HẢI SẢN PHÚ QUÝ</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/bangdc.lan/khongthoigian_nhahang/286790269_106682885406028_1760308845243080320_n_994156856.jpg" alt="Bảo tàng Long An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Nhà Hàng Không Thời Gian
                                            </div>
                                            <div className="date">10,95km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/bangdc.lan/tienthanhboat/thumb/275123386_126484249944621_2786125216814893871_n_161423593.jpg" alt="Công viên 7 Kỳ Quan Thế Giới" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Nhà Hàng Không Thời Gian</div>
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

export default RestaurantDetailPage