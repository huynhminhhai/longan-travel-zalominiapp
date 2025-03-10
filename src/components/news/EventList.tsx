import { NEWSDATA } from "constants/utinities"
import React from "react"
import { Box } from "zmp-ui"
import NewsItem from "./NewsItem"
import NewsMain from "./NewsMain"

export const EVENTDATA: any[] = [
    {
        id: 1,
        title: "Du lịch Long An nhiều chương trình hấp dẫn phục vụ Tuần văn hóa – Thể thao – Du lịch tỉnh lần thứ 2 năm 2024 (28/11 - 04/12/2024)",
        description: "Xách vali và đến Long An để cùng Khát vọng sông Vàm 2024 trải nghiệm.",
        imageUrl: "https://scontent.iocvnpt.com/resources/portal//Images/LAN/toanlm.lan/2024/z6064936543707_e78248ae6d5959b5ba6ba1a560e91a61_916470942.jpg",
        publishedDate: "22/02/2025",
        category: "Sự kiện",
    },
    {
        id: 2,
        title: "Tuần Văn hóa – Thể thao – Du lịch tỉnh Long An",
        description: "",
        imageUrl: "https://scontent.iocvnpt.com/resources/portal//Images/LAN/toanlm/2024/z6055808802997_04702604dc1650e5cde5d49bd5c45781_895515248.jpg",
        publishedDate: "22/02/2025",
        category: "Sự kiện",
    },
    {
        id: 3,
        title: "KHÁT VỌNG SÔNG VÀM 2024 - LONG AN ĐÃ SẴN SÀNG",
        description: "Là điểm hẹn giao thoa giữa văn hoá Việt Nam, đặc biệt là các tỉnh miền Tây với xứ sở kim chi - Hàn Quốc, sự kiện hứa hẹn là điểm bùng nổ cuối năm 2024. Tỉnh Long An đã sát sao, chuẩn bị kỹ lưỡng về mọi mặt, đảm bảo sự kiện được diễn ra an toàn, thành công.",
        imageUrl: "https://scontent.iocvnpt.com/resources/portal//Images/LAN/toanlm/2024/467404204_122100529274628028_4299896698637172696_n_100185913.jpg",
        publishedDate: "22/02/2025",
        category: "Sự kiện",
    }
];


const NewsList: React.FC = () => {

    const subNews = EVENTDATA.slice(1)

    return (
        <Box>
            <div className="grid grid-cols-1">
                <NewsMain data={EVENTDATA[0]} />
                <Box px={4}>
                    {
                        subNews.map((item, index) => (
                            <NewsItem key={index} data={item}/>
                        ))
                    }
                </Box>
            </div>
        </Box>
    )
}

export default NewsList