import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

const location = {
    lat: 10.538361659296966,
    lng: 106.40700750828708,
    name: "PETROLIMEX - CỬA HÀNG 02",
    address: "  Đường Trương Định, phường 2, thành phố Tân An, tỉnh Long An",
    img: "https://files.petrolimex.com.vn/Files/3BC9B73CA77642449D865CC60EE27021/image=jpeg/dbf4d0461c3f40c7808a218f66c808af/3.JPG",
    markerImg: "https://cdn-icons-png.flaticon.com/128/1791/1791150.png",
};

const OilDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết trạm xăng/dầu" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">PETROLIMEX - CỬA HÀNG 02</h1>
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
                                            <span>  Đường Trương Định, phường 2, thành phố Tân An, tỉnh Long An</span>
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
                                    <img src="https://files.petrolimex.com.vn/thumbnailwebps/7232EB2ADC1840088D1CDE008392A9B7/1/0/0/e098cb24a1b14da2a1f7a6a9f0287263/PETROLIMEX.JPG.webp" alt="">
                                </p>
                                <p>
                                    Tiền thân của Công ty Xăng dầu Long An (Petrolimex Long An/Công ty) là Công ty Vật tư Tổng hợp Long An - Kiến Tường thuộc hệ thống của ngành Vật tư chịu sự lãnh đạo và chỉ đạo hai chiều của Tổng Cục Vật Tư miền Nam và Tỉnh ủy, Ủy Ban Nhân dân cách mạng Tỉnh được thành lập ngày 17.02.1976 theo Quyết định số 37/VT-QL của Tổng Cục Vật Tư miền Nam đặt trụ sở tại thị xã Tân An với chức năng, nhiệm vụ cung ứng cho các đơn vị, xí nghiệp thuộc trung ương và địa phương trong phạm vi tỉnh Long An - Kiến Tường về các loại vật tư, thiết bị chủ yếu, thông dụng mà ngành vật tư được Nhà nước giao quản lý, cung ứng.
                                </p>
                                <p>
                                    Đến năm 1986 Ủy Ban Nhân dân (UBND) tỉnh Long An ban hành Quyết định số 885/UB.QĐ.86 ngày 23.4.1986 sáp nhập thêm hai đơn vị nữa là Công ty Vật tư Xây dựng thuộc Sở Xây dựng và Xí nghiệp cung ứng vật tư Công nghiệp thuộc Sở Công nghiệp vào Công ty Vật tư Tổng hợp trực thuộc UBND Tỉnh với nhiệm vụ chủ yếu là: Tổ chức sản xuất, thu mua, khai thác, tiếp nhận vật tư, vật liệu thuộc các ngành hàng: Xăng dầu, kim khí, hoá chất, vật liệu điện, thiết bị phụ tùng, dụng cụ cơ khí, vật liệu xây dựng, chất đốt…để phục vụ cho nhu cầu sản xuất và xây dựng trong Tỉnh; Cung ứng các loại vật tư, thiết bị và vật liệu xây dựng đầy đủ, kịp thời, đồng bộ đúng quy cách chủng loại cho các đơn vị sản xuất và các công trình xây dựng theo kế hoạch được giao.
                                </p>
                                <p>
                                    Ngày 31.3.1990 Công ty Vật tư Tổng hợp Long An trực thuộc Bộ Thương mại theo Quyết định 244/HĐBT của Hội đồng Bộ trưởng.
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
                                            <img src="https://files.petrolimex.com.vn/Files/3BC9B73CA77642449D865CC60EE27021/image=jpeg/dbf4d0461c3f40c7808a218f66c808af/3.JPG" alt="CÔNG TY TNHH MTV NGỌC MAI" />
                                        </div>
                                        <div className="content">
                                            <div className="title">CÔNG TY TNHH MTV NGỌC MAI</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://files.petrolimex.com.vn/Files/3BC9B73CA77642449D865CC60EE27021/image=jpeg/dbf4d0461c3f40c7808a218f66c808af/3.JPG" alt="CÔNG TY TNHH TRUNG DŨNG LONG AN " />
                                        </div>
                                        <div className="content">
                                            <div className="title">CÔNG TY TNHH TRUNG DŨNG LONG AN </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://files.petrolimex.com.vn/Files/3BC9B73CA77642449D865CC60EE27021/image=jpeg/dbf4d0461c3f40c7808a218f66c808af/3.JPG" alt="CÔNG TY TNHH TRUNG DŨNG LONG AN " />
                                        </div>
                                        <div className="content">
                                            <div className="title">CÔNG TY TNHH TRUNG DŨNG LONG AN
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://files.petrolimex.com.vn/Files/3BC9B73CA77642449D865CC60EE27021/image=jpeg/dbf4d0461c3f40c7808a218f66c808af/3.JPG" alt="CÔNG TY TNHH VẬT TƯ XĂNG DẦU LÊ TRUNG" />
                                        </div>
                                        <div className="content">
                                            <div className="title">CÔNG TY TNHH VẬT TƯ XĂNG DẦU LÊ TRUNG</div>
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

export default OilDetailPage