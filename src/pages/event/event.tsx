import { Divider } from "components/divider"
import { HeaderSub } from "components/header-sub"
import { EventList, NewsList } from "components/news"
import FilterBar from "components/table/FilterBar"
import React from "react"
import { Box, Input, Page } from "zmp-ui"

const EventPage: React.FC = () => {
    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Sự kiện" />
                <Box pb={4}>
                    <FilterBar
                        showAddButton={false}
                    >
                        <div className="col-span-12">
                            <Input
                                placeholder="Tìm kiếm..."
                                value={''}
                            />
                        </div>
                    </FilterBar>
                    <Divider />
                    <Box pt={4}>
                        <EventList />
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default EventPage