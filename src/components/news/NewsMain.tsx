import images from "assets/images";
import { News } from "constants/utinities";
import React from "react";
import { Box, Text, useNavigate } from "zmp-ui";

type NewsMainProps = {
    data: News
}

const NewsMain: React.FC<NewsMainProps> = ({ data }) => {

    const navigate = useNavigate()

    return (
        <Box px={4} pb={4} mb={4}>
            <div onClick={() => navigate(`/news-detail`)}>
                <img
                    className="slide-img h-[200px] w-full object-cover rounded-lg"
                    src={data.imageUrl || images.thumbnailNews}
                    alt={data.title}
                />
                <Box>
                    <div className="flex items-center justify-between mt-3 mb-2 pb-2 border-b-[1px] border-[#355933]">
                        <div className="text-[13px] leading-[1] font-semibold">{data.category}</div>
                        <div className="text-[12px] leading-[1] font-medium">{data.publishedDate}</div>
                    </div>
                    <h3 className="text-[16px] font-semibold whitespace-normal mt-2 line-clamp-2 ">{data.title}</h3>
                    <div className="line-clamp-2">{data.description}</div>
                </Box>
            </div>
        </Box>
    )
}

export default NewsMain;