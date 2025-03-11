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

const HotelDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết lưu trú" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">HOMESTAY VÀM CỎ FARMSTAY</h1>
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
                                <h3 className="title">Mô tả</h3>
                                <div className="detail-content" dangerouslySetInnerHTML={{
                                    __html: `
                                    <div class="hotel-description-policy">
                                    <p><strong>CTY CP DỊCH VỤ THƯƠNG MẠI DU LỊCH PHÚ QUÝ</strong></p>

                                    <p><strong>Khu Du Lịch Sinh Thái Vàm Cỏ</strong> và nhà hàng Vàm Cỏ được lấy cảm
                                        hứng và bắt nguồn từ con sông Vàm Cỏ Đông thơ mộng uốn lượn chảy quanh địa bàn
                                        các huyện Đức Hòa, Đức Huệ, Bến Lức, Cần Đước của tỉnh Long An. Do đó, sông Vàm
                                        Cỏ không những là sông mẹ chất chứa phù sa nuôi sống biết bao thế hệ mà nó còn
                                        là con sông gắn liền với tuổi thơ của biết bao người trong đó có những người con
                                        Long An sáng lập lên Khu Du Lịch Sinh Thái Vàm Cỏ này với mong muốn đóng góp một
                                        chút công sức và trí tuệ bản thân vào sự phát triển của địa phương và tạo ra các
                                        giá trị hữu ích cho cộng đồng. Đó là lý do mà Vàm Cỏ Farmstay ra đời.</p>

                                    <p><img alt="" src="https://scontent.iocvnpt.com/resources/portal/Images/LAN/vamcofarmstay/compress/song_vam_co_tay_856179579.jpg" style="heigth:undefinedpx; width:1024px"></p>

                                    <p>Với mong ước và sứ mệnh đó, định hướng phát triển của Vàm Cỏ là trở thành Khu Du
                                        Lịch Sinh Thái kết hợp với các hoạt động du lịch sông nước và trải nghiệm du
                                        lịch nông nghiệp: tham quan nông trại, vườn trái cây, tự mình thể nghiệm bằng
                                        cách tham gia vào các hoạt động canh tác của người nông dân địa phương. Để phục
                                        vụ cho định hướng phát triển đó Vàm Cỏ Farmstay tập trung đẩy mạnh vào các dịch
                                        vụ nhằm đáp ứng nhu cầu ăn uống, nghỉ ngơi của du khách trước khi tham gia vào
                                        các hoạt động trải nghiệm du lịch sông nước như:</p>

                                    <p>•Nhà hàng ẩm thực Vàm Cỏ chuyên các món đồng quê dân dã, các món đồ rừng đặc sắc
                                        và các món hải sản tươi sống.</p>

                                    <p>•Homestay lưu trú với sự đầu tư bài bản, cơ sở vật chất đáp ứng tiêu chuẩn khách
                                        sạn 3 sao, hoặc quý khách có thể trải nghiệm không gian sống thôn quê dân dã
                                        bằng cách book nguyên chiếc thuyền nổi trên đầm sen, vừa thoáng đãng lại vừa gần
                                        gũi thiên nhiên.</p>

                                    <p>•Khu camping sát bờ sông.</p>

                                    <p>•Dịch vụ câu cá giải trí.</p>

                                    <p>•Du lịch sinh thái sông nước như: chèo xuồng ba lá đi hái bần, hái dừa nước. Chèo
                                        thuyền sub trên sông, tham quan nông trại, tham quan vườn trái cây, tour ẩm thực
                                        trên sông kết hợp với thưởng thức đờn ca tài tử…</p>

                                    <p><img alt="" src="https://scontent.iocvnpt.com/resources/portal/Images/LAN/vamcofarmstay/compress/don_ca_tai_tu_489548122.png" style="heigth:undefinedpx; width:1124px"><img alt="" src="https://scontent.iocvnpt.com/resources/portal/Images/LAN/vamcofarmstay/compress/cheo_thuyen_tren_song_tai_vamcofarmstay_592411100.png" style="heigth:undefinedpx; width:1124px"><img alt="" src="https://scontent.iocvnpt.com/resources/portal/Images/LAN/vamcofarmstay/compress/bbq3_134256834.png" style="heigth:undefinedpx; width:1124px"><img alt="" src="https://scontent.iocvnpt.com/resources/portal/Images/LAN/vamcofarmstay/compress/bbq_81918054.png" style="heigth:undefinedpx; width:1124px"></p>

                                    <p>Với khoảng cách địa lý chỉ cách Tp HCM 25km, mất từ 30-45 phút di chuyển mà cảnh
                                        quan lại mang đậm nét dân dã miền tây như: đồng lúa, ao sen, rặng dừa nước, rặng
                                        bần ven sông. Vàm Cỏ là điểm đến lý tưởng cho các gia đình hoặc nhóm bạn trẻ
                                        muốn đi du lịch trải nghiệm trong ngày hoặc ở lại một đêm.</p>

                                    <p><img alt="" src="https://scontent.iocvnpt.com/resources/portal/Images/LAN/vamcofarmstay/compress/ban_do_duong_di_den_vamcofarmstay_608656059.png" style="heigth:undefinedpx; width:1124px"></p>

                                    <p>Xa rời phố thị đông đúc. Quý khách sẽ được hòa mình với thiên nhiên, sống lại
                                        những ký ức tuổi thơ đã từng trải qua hoặc giúp thế hệ trẻ hiểu được khái niệm
                                        và giá trị sống của thế hệ cha ông đi trước.</p>

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
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/Tan%20An/Khac%20San%20Truong%20Diem/2018-04-06_637013868099419589.jpg" alt="Trồng khoai mì ruột vàng mang lại thu
                                            nhập cao" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Khách sạn Trường Diễm</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://i.vntrip.vn/800x550/smart/https://statics.vntrip.vn/data-v2/hotels/611930/img_max/611930_1576550162_ru.jpg" alt="Cửa khẩu Quốc tế Bình Hiệp" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Khách sạn Ruby</div>
                                            <div className="date">3,24km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/trietnm.lan/Can%20Giuoc/Khach%20san%20Kim%20Linh/av_637025786230053746.jpg" alt="Bảo tàng Long An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Khách sạn Kim Linh
                                            </div>
                                            <div className="date">10,95km</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://scontent.iocvnpt.com/resources/portal//Images/LAN/toanlm.lan/luu_tru/ks_binh_minh_103110833.png" alt="Công viên 7 Kỳ Quan Thế Giới" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Khách sạn Bình Minh</div>
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

export default HotelDetailPage