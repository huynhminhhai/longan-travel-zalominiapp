import { HeaderSub } from "components/header-sub"
import { EventList, NewsList } from "components/news"
import React from "react"
import { Box, Page } from "zmp-ui"

const EventPage: React.FC = () => {
    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Sự kiện" />
                <Box pb={4}>
                    <EventList />
                </Box>
            </Box>
        </Page>
    )
}

export default EventPage