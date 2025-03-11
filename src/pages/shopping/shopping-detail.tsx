import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

export const imagesGallery = [
    'https://www.baolongan.vn/image/news/2020/20201222/images/df59710e29aed8f081bf.jpg',
    'https://www.tvu.edu.vn/wp-content/uploads/2022/06/san-ha-9.jpg',
    'https://csdl.vietnamtourism.gov.vn/uploads/images/01_3/CSDLDIEMMUASAM2020/LongAn/CHSanHaFood/MG-6690-JPG-9805-1578995835.jpg',
]

const location = {
    lat: 10.642918619273143,
    lng: 106.48998109506897,
    name: "San Hà Food Store",
    address: "Số 151, Nguyễn Văn Siêu, Xã Thanh Phú, Huyện Bến Lức, Tỉnh Long An.",
    img: "https://www.baolongan.vn/image/news/2020/20201222/images/df59710e29aed8f081bf.jpg",
    markerImg: "https://cdn-icons-png.flaticon.com/128/2331/2331970.png",
};

const ShoppingDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết nhà hàng" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">San Hà Food Store</h1>
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
                                            <span>Địa chỉ: Số 151, Nguyễn Văn Siêu, Xã Thanh Phú, Huyện Bến Lức, Tỉnh Long An.</span>
                                        </li>
                                        <li>
                                            <img src={images.email} alt="email" />
                                            <span>sanhafood.longan@gmail.com</span>
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
                                        §San Hà được người tiêu dùng biết đến với nhãn hiệu quen thuộc ‘’Ngọc Hà’’. Thương hiệu đã có mặt trên thị trường hơn 27 năm qua.
                                    </p>
                                        <p>
                                        §San Hà được người tiêu dùng biết đến với nhãn hiệu quen thuộc ‘’Ngọc Hà’’. Thương hiệu đã có mặt trên thị trường hơn 27 năm qua.
                                    </p>
                                        <p>
                                        §Đội ngũ hơn 800 CB-NV, với 04 nhà máy sản xuất, cung ứng thị trường hơn 100 
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
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/lapxuongtuoicochau/thumb/lap_xuong_82342787.jpg" alt="Hộ Kinh Doanh Cơ Sở Sản Xuất Lạp Xưởng Cô Châu " />
                                        </div>
                                        <div className="content">
                                            <div className="title">Hộ Kinh Doanh Cơ Sở Sản Xuất Lạp Xưởng Cô Châu</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/Tan%20An/Co.oopmart/thumb/20160724_160821_637017986773565994.jpg" alt="CO.OOP MART TÂN AN" />
                                        </div>
                                        <div className="content">
                                            <div className="title">CO.OOP MART TÂN AN</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/Tan%20An/vincom/thumb/avatar123_637025777707993363.jpg" alt="Vincom Plaza Tân An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Vincom Plaza Tân An
                                            </div>
                                            <div className="date">10,95km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/doanh_nghiep/vu_hang/thumb/1_465904093.jpg" alt="CÔNG TY CP THỰC PHẨM HG" />
                                        </div>
                                        <div className="content">
                                            <div className="title">CÔNG TY CP THỰC PHẨM HG</div>
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

export default ShoppingDetailPage