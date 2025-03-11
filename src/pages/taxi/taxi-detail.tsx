import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

const location = {
    lat: 10.554719681776884,
    lng: 106.4204412631839,
    name: "MAI LINH LONG AN",
    address: " Số 29B Nguyễn Văn Tiếp, Phường 5, thành phố Tân An, tỉnh Long An",
    img: "https://top10longan.com/wp-content/uploads/2023/10/350279622_245444961427697_5743052734367032241_n.jpg",
    markerImg: "https://cdn-icons-png.flaticon.com/128/2401/2401174.png",
};

const TaxiDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết taxi" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Tập Đoàn Mai Linh</h1>
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
                                            <span> Số 29B Nguyễn Văn Tiếp, Phường 5, thành phố Tân An, tỉnh Long An</span>
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
                                <p><strong>Giới thiệu về taxi mai linh</strong></p>
                                <p>Taxi Mai Linh là một trong những dịch vụ vận tải của tập đoàn Mai Linh. Tiền thân là công ty tnhh vận tải hành khách và du lịch mai linh. Công ty được thành lập vào 12/7/1993 tại Hồ Chí Minh.

                                    Hiện nay, công ty taxi mai linh đã và đang là dịch vụ nổi tiếng nhất ở Việt Nam và đã có mặt trên hầu hết các tỉnh thành trên cả nước.</p>
                                <p>
                                    <b>Ý nghĩa của thương hiệu Mai Linh</b>
                                </p>   
                                <p>
                                    </p><ol>
                                        <li>Mai” nó nói lên hình ảnh của bông hoa mai trong ngày tết cổ truyền của dân tộc việt nam. Mang tới cho chúng ta sự may mắn và hạnh phúc.</li>
                                        <li>“Linh” mang ý nghĩa của sự linh động. linh hoạt, tinh nhanh trong giải quyết công việc và đi lại.</li>
                                    </ol>
                                <p></p>
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
                                            <img src="https://vieclamcantho.com.vn/public/upload/nhatuyendung/cty-tnhh-dich-vu-van-tai-sao-do---an-giang-taxi-sao-do1582333022.png" alt="CÔNG TY TNHH DỊCH VỤ VẬN TẢI SAO ĐỎ  - CN LONG AN"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">CÔNG TY TNHH DỊCH VỤ VẬN TẢI SAO ĐỎ  - CN LONG AN</div>
                                            <div className="date">
                                                Số 05, Trương Thị Sáu, Phường 3, TP. Tân An, Long An 
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://saigontaxi.vn/wp-content/uploads/2020/09/3bc872cd85067a582317-removebg-preview.png" alt="C.TY CP TẬP ĐOÀN VẬN TẢI SÀI GÒN - CN LONG AN"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">C.TY CP TẬP ĐOÀN VẬN TẢI SÀI GÒN - CN LONG AN</div>
                                            <div className="date">
                                                
                                            Số 650, Quốc lộ 1A, Phường 4, Thành phố Tân An, tỉnh Long An
                                        
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://play-lh.googleusercontent.com/doLMDrq4T1qxg8Hzj0YnXVCA0sIM2LNtU769nUMIzrk8VLu0zq5bALdjscANqTKR0A=w240-h480-rw" alt="CÔNG TY TNHH OPEN99 LONG AN"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">CÔNG TY TNHH OPEN99 LONG AN
                                            </div>
                                            <div className="date">
                                                Số 33, Phạm Văn Chiêu, Phường 6, TP. Tân An, Long An 
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvwhTLGTyjIa4XmAjs5Mq1RItMte7o3tGwG9VocOkRt6s-ftz4txz_GVVAz-jZoSO-sc&amp;usqp=CAU" alt="CN HỢP TÁC XÃ HÒA BÌNH XANH TẠI LONG AN"/>
                                        </div>
                                        <div className="content">
                                            <div className="title">CN HỢP TÁC XÃ HÒA BÌNH XANH TẠI LONG AN</div>
                                            <div className="date">
                                                29B Nguyễn Văn Tiếp, Phường 5, thành phố Tân An, tỉnh Long An
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

export default TaxiDetailPage