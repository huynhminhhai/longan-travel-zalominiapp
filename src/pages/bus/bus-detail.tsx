import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

const location = {
    lat: 10.537824636906599,
    lng: 106.40475073924593,
    name: "Bến xe Long An",
    address: "  Số 113, QL1, P2, TP Tân An, Long An",
    img: "https://www.zappiamotors.com/wp-content/uploads/2024/02/ben-xe-long-an-cung-cap-thuc-an-nhanh-va-nuoc-giai-khat.jpg",
    markerImg: "https://cdn-icons-png.flaticon.com/128/1042/1042263.png",
};

const BusDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết bến xe" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Bến xe Long An</h1>
                                <div className="actions">
                                    <button className="btn-bookmark"><img src={images.favorite} alt="mục yêu thích" /></button>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">
                                    Thông tin
                                </h3>
                                <div className="infor-detail">
                                    <ul>
                                        <li>
                                            <img src={images.place} alt="location" />
                                            <span> Số 113, QL1, P2, TP Tân An, Long An</span>
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
                                    <img src="https://motortrip.vn/wp-content/uploads/2025/01/Ben-xe-Tan-An-Long-An-6.jpg" alt="">
                                </p>
                                        <p>Bến xe Long An là một bến xe khách quan trọng nhất của Thành phố Long An.</p>
                                        <p>Bến xe khách nàylà đầu mối giao thông quan trọng kết nối giữa Sài Gòn và các tỉnh
                                    miền Tây. Bến xe Long An phục vụ hành khách đến thành phố Hồ Chí Minh hoặc đi các
                                    tỉnh đồng bằng Sông Cửu Long. Hiện nay có hơn 80 doanh nghiệp vận tải tham gia khai
                                    thác 200 tuyến đường thuộc các tỉnh: Tiền Giang, Vĩnh Long, An Giang, Hậu Giang,
                                    Đồng Tháp, Bạc Liêu, Cà Mau, Kiên Giang, Sóc Trăng, Cần Thơ, Trà Vinh, Bến Tre,… mỗi
                                    ngày tiếp nhận nghìn lượt hành đi xe</p>
                                    <p>
                                    Không những vậy có nhiều nhà xe đưa quý khách ra tận ngoài bắc như Hà Nội, Bắc
                                    Ninh... cho khách có nhu cầu.
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
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png" alt="Bến xe khách Tân Trụ "/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Bến xe khách Tân Trụ </div>
                                            <div className="date">Số 113, QL1, P2, TP Tân An, Long An</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png" alt="Bến xe khách Bình Hòa Hưng"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Bến xe khách Bình Hòa Hưng</div>
                                            <div className="date">Số 113, QL1, P2, TP Tân An, Long An</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png" alt="Bến xe khách Đức Huệ"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Bến xe khách Đức Huệ
                                            </div>
                                            <div className="date">Số 113, QL1, P2, TP Tân An, Long An</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png" alt="Bến xe khách Hậu Nghĩa "/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Bến xe khách Hậu Nghĩa </div>
                                            <div className="date">Số 113, QL1, P2, TP Tân An, Long An</div>
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

export default BusDetailPage