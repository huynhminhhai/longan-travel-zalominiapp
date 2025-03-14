import { NEWSDATA } from "constants/utinities"
import React from "react"
import { Box, Button } from "zmp-ui"
import NewsItem from "./NewsItem"
import NewsMain from "./NewsMain"

const NewsList: React.FC = () => {

    const subNews = NEWSDATA.slice(1)

    return (
        <Box>
            <div className="grid grid-cols-1">
                <NewsMain data={NEWSDATA[0]} />
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