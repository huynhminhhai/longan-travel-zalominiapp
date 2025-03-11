import images from 'assets/images'
import CommentTemp from 'components/comment-temp'
import { HeaderSub } from 'components/header-sub'
import { MultipleLocationMap, SingleLocationMap } from 'components/map'
import { ImageGallery } from 'components/slider'
import TitleSection from 'components/titleSection'
import React from 'react'
import { Box, Page, useNavigate } from 'zmp-ui'

export const imagesGallery = [
    'https://www.vietfuntravel.com.vn/image/data/Mekong/dac-san-long-an-lau-mam-1.jpg',
    'https://file.hstatic.net/1000093072/file/_nh_b_a_pr_lm_grande.jpg',
    'https://www.baolongan.vn/image/news/2019/20190315/images/lau-mam-can-tho-5.jpg',
    'https://www.vietfuntravel.com.vn/image/data/Mekong/dac-san-long-an-lau-mam-2.jpg',
]

const location = [
    {
        lat: 10.6167,
        lng: 106.4167,
        name: "Quán Lẩu Mắm Sáu Tỉn",
        address: "Số 23 Nguyễn Trung Trực, P.2, TP Tân An, Long An",
        img: "https://sakos.vn/wp-content/uploads/2024/09/kham-pha-lau-mam-mien-tay-dam-da-tai-sai-gon-ban-da-biet-chua-7.jpg",
        markerImg: "https://cdn-icons-png.flaticon.com/128/948/948036.png", // Thêm ảnh marker tùy chỉnh
    },
    {
        lat: 10.5357,
        lng: 106.4103,
        name: "Quán Lẩu Mắm Cô Ba",
        address: "456 Quốc lộ 1A, TT. Bến Lức, Long An",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEnSH4NEat6G6C1CxQiF2Dyy_nZTRJOtFWDA&s",
        markerImg: "https://cdn-icons-png.flaticon.com/128/948/948036.png", // Thêm ảnh marker tùy chỉnh
    },
    {
        lat: 10.6427,
        lng: 106.4901,
        name: "Lẩu Mắm Đồng Quê",
        address: "12 Đường 3/2, TT. Đức Hòa, Long An",
        img: "https://lh3.googleusercontent.com/p/AF1QipMC_C1dZGQb5VUo0eLGGWUhWsPS2ZlL9M42JYUj=s1360-w1360-h1020",
        markerImg: "https://cdn-icons-png.flaticon.com/128/948/948036.png", // Thêm ảnh marker tùy chỉnh
    },
];

const CusineDetailPage = () => {

    const navigate = useNavigate()

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chi tiết đặc sản" />
                <Box px={4} pb={4}>
                    <div className="detail-container">
                        <div className="detail-body">
                            <div className="detail-title">
                                <h1 className="title">Lẩu mắm Long An</h1>
                                <div className="actions">
                                    <button className="btn-bookmark"><img src={images.favorite} alt="mục yêu thích" /></button>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <ImageGallery images={imagesGallery} />
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">Mô tả</h3>
                                <div className="detail-content" dangerouslySetInnerHTML={{
                                    __html: `
                                    <div class="content-desc" itemprop="articleBody">
                                    <div class="adv_header_content"></div>
                                    <p style="text-align: justify;"><strong>Đặc sản Long An – Lẩu mắm</strong> nổi tiếng
                                        thơm ngon độc đáo, thu hút nhiều du khách gần xa tìm về thưởng thức. Lẩu mắm là
                                        một món ăn dân dã với những nguyên liệu tự nhiên, là món ăn đầy màu sắc và đủ vị
                                        mặn, ngọt, chua, cay. Lẩu mắm nếu ăn cùng các loại rau như rau muống, rau cải
                                        trời, cọng súng, bông điên điển, giá sống, rau thơm, khế chua… thì càng tuyệt
                                        vời hơn. Du khách đi <a href="/tour-du-lich-mien-tay.html" target="_blank"><strong><em>du lịch miền Tây </em></strong></a>về Long An mà
                                        chưa nếm thử món lẩu mắm thì xem như chưa từng đến mảnh đất này. Ngày hôm nay,
                                        Viet Fun Travel xin giới thiệu đến quý khách món lẩu mắm đặc sản của vùng đất
                                        Long An, nếu có dịp du lịch đến đây, du khách nên tìm đến để nếm thử.</p>

                                    <p style="text-align: justify;">Lẩu mắm là món ăn đặc sản của người miền Tây nói
                                        chung và người dân Long An nói riêng. Món lẩu mắm được chế biến ví như “một bản
                                        nhạc hòa tấu” với đủ thể loại sản phẩm từ biển cả, ao hồ, ruộng đồng sông ngòi:
                                        cá, tôm, cua, mực, bò, heo. Chính điều đó tạo nên nét đặc biệt ở lẩu mắm mà
                                        không phải món lẩu nào cũng có được. Vị ngọt của nước lèo lẩu mắm – <a href="/blog/nhung-mon-dac-san-noi-tieng-long-an.html" target="_blank"><strong><em>đặc sản Long An</em></strong></a> rất đặc biệt,
                                        vị không quá béo ngậy như những loại lẩu khác được nấu nước lèo từ xương hoặc
                                        thịt. Nước lèo lẩu mắm ngọt dịu, khi ăn kèm với bún tươi thì ngon không gì bằng.
                                        Để làm được nước lèo lẩu mắm cần ít nhất là ba loại mắm: mắm sặc để có mùi thơm,
                                        mắm trèn để tăng vị ngọt đậm và màu sắc thắm đượm, mắm linh với cái hơi nhẫn béo
                                        đặc biệt của cá đồng. Để có nồi lẩu mắm ngon phụ thuộc rất nhiều vào xuất xứ của
                                        mắm. Người dân Long An có bí quyết giúp lẩu mắm không quá mặn, nồi lẩu lại ngả
                                        màu nâu đặc trưng của mắm, nước sanh sánh nhờ tỏi ớt băm nhuyễn kết hợp với sả
                                        vừa thơm lại vừa bắt mắt. Nước lèo lẩu mắm đúng độ phải có hương vị thơm ngon,
                                        đậm đà đủ vị, chất lượng.</p>

                                    <p style="text-align: center;"><img src="https://www.vietfuntravel.com.vn/image/data/Mekong/dac-san-long-an-lau-mam-2.jpg" style="width: 640px; height: 450px;"><br>
                                        <em>Rau ăn lẩu mắm</em>
                                    </p>

                                    <p style="text-align: justify;">Long An không chỉ có lẩu mắm mà còn nổi tiếng với
                                        nhiều đặc sản như lạp xưởng tươi, rượu đế Gò Đen, mắm còng Cần Giuộc, gạo nàng
                                        thơm chợ Đào… Du khách du lịch về Long An sẽ có cơ hội tìm hiểu và thưởng thức
                                        nhiều đặc sản thơm ngon ở đây. Theo <a href="/blog/kinh-nghiem-du-lich-long-an.html" target="_blank"><strong><em>kinh nghiệm du lịch Long An</em></strong></a> mà
                                        Viet Fun Travel đã chia sẻ, du khách có thể đến Long An vào bất cứ mùa nào trong
                                        năm. Khí hậu Long An khá mát mẻ và dễ chịu, thuận tiện cho du khách du lịch khám
                                        phá. Dành một ngày để khám phá Long An sẽ không uổng phí công sức của du khách.
                                    </p>
                                </div>  
                                    
                                `}}>
                                </div>
                            </div>
                            <div className="detail-body--item">
                                <h3 className="title">Điểm bán đặc sản</h3>
                                <div className="infor-map">
                                    <MultipleLocationMap locations={location} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
                <Box px={4} mb={10}>
                    <CommentTemp />
                </Box>
                <Box px={4} pb={4}>
                    <TitleSection title="Đặc sản địa phương khác" />
                    <div className="detail-sidebar">
                        <div className="sidebar-item">
                            <div className="detail-others">
                                <div className="list">
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://www.thatlangon.com/wp-content/uploads/2021/09/canh-chua-ca-tln1-e1633942511539.jpg" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Canh chua cá chốt</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://cdn.tgdd.vn/Files/2022/11/18/1488658/gao-nang-thom-cho-dao-la-gi-mua-o-dau-gia-bao-nhieu-202211181548390865.jpg" alt="Cửa khẩu Quốc tế Bình Hiệp" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Gạo nàng thơm chợ Đào</div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://images.baoangiang.com.vn/image/media/2023/20231222/video/thumbnail/690x420/4299_img_1569.jpg" alt="Bảo tàng Long An" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Cá lóc nướng trui
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" className="item">
                                        <div className="thumbnail">
                                            <img src="https://degoden.vn/wp-content/uploads/sites/312/2020/10/75196391_137526940916607_1884075339550818304_o.jpg" alt="Công viên 7 Kỳ Quan Thế Giới" />
                                        </div>
                                        <div className="content">
                                            <div className="title">Rượu đế Gò Đen</div>
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

export default CusineDetailPage