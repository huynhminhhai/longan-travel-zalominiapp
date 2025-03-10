import images from "assets/images"
import { News } from "constants/utinities"
import React from "react"
import { Box, Text, useNavigate } from "zmp-ui"

type NewsItemProps = {
    data: News
}

const NewsItem: React.FC<NewsItemProps> = ({ data }) => {

    const navigate = useNavigate()

    return (
        <Box>
            <div onClick={() => navigate(`/news-detail`)} className="flex gap-3 mb-4">
                <img
                    className="slide-img w-[140px] h-[100px] object-cover rounded-lg"
                    src={data.imageUrl || images.thumbnailNews}
                    alt={data.title}
                />
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-1 pb-2 border-b-[1px] border-[#355933]">
                        <div className="text-[13px] leading-[1] font-semibold">{data.category}</div>
                        <div className="text-[12px] leading-[1] font-medium">{data.publishedDate}</div>
                    </div>
                    <h3 className="text-[15px] leading-[20px] font-semibold whitespace-normal mt-1 line-clamp-2">{data.title}</h3>
                    <div className="text-[12px] leading-[16px] line-clamp-2 mt-1">{data.description}</div>
                </div>
            </div>
        </Box>
    )
}

export default NewsItem