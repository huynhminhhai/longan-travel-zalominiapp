import { Icon } from '@iconify/react'
import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { BusMap, SingleLocationMap } from 'components/map'
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

const BusRoutingDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết tuyến xe" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Kỳ Son – Thạnh Hóa và Thạnh Hóa Bình Hiệp </h1>
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
                                            <span>bệnh viện Đa khoa – Nguyễn Thông – Châu Thị Kim – Hùng Vương – Nguyễn An Ninh – Hai Bà Trưng – Cách Mạng Tháng 8-Nguyễn Trung Trực-Trương Định -Võ Văn Tần – Trà Bình Quý – Hùng Vương – QL62 – QL.N2 – TT Thạnh Hóa – ĐT 836 – QL 62 – Bãi đỗ xe Bình Hiệp</span>
                                        </li>
                                        <li>
                                            <Icon fontSize={20} icon='mingcute:time-line' />
                                            <span>5h30 – 19h00</span>
                                        </li>
                                        <li>
                                            <Icon fontSize={20} icon='mingcute:time-line' />
                                            <span>15 phút/chuyến</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">Bản đồ</h3>
                                <div className="infor-map">
                                    <BusMap />
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box px={4} mb={10}>
                    <CommentTemp />
                </Box>
                <Box px={4} pb={4}>
                    <TitleSection title="Các tuyến xe khác" />
                    <div className="detail-sidebar">
                        <div className="sidebar-item">
                            <div className="detail-others">
                            <div className="list">
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg/640px-Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg" alt="Kỳ Son – Thạnh Hóa và Thạnh Hóa Bình Hiệp "/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Kỳ Son – Thạnh Hóa và Thạnh Hóa Bình Hiệp </div>
                                            <div className="date">
                                                5h30 – 19h00
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg/640px-Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg" alt="Bến xe Long An – Xã Khánh Hưng "/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Bến xe Long An – Xã Khánh Hưng </div>
                                            <div className="date">
                                                5h30 – 19h00
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg/640px-Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg" alt="Bến xe Long An – Bến xe Đức Huệ"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Bến xe Long An – Bến xe Đức Huệ
                                            </div>
                                            <div className="date">
                                                5h30 – 19h00
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg/640px-Tr%E1%BA%A1m_xe_bu%C3%BDt_%C4%90H_T%C3%B4n_%C4%90%E1%BB%A9c_Th%E1%BA%AFng.jpg" alt="Bến xe Tân An – Bến xe Hậu Thanh"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">Bến xe Tân An – Bến xe Hậu Thanh</div>
                                            <div className="date">
                                                5h30 – 19h00
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

export default BusRoutingDetailPage