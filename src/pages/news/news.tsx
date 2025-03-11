import { Icon } from "@iconify/react"
import { Divider } from "components/divider"
import { HeaderSub } from "components/header-sub"
import { NewsList } from "components/news"
import FilterBar from "components/table/FilterBar"
import React, { useState } from "react"
import { Box, Button, Input, Page, Select } from "zmp-ui"

const NewsPage: React.FC = () => {

    const { Option } = Select

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Tin tức" />
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
                        <div className="col-span-12">
                            <Select
                                placeholder="Văn hóa"
                                closeOnSelect
                            >
                                <Option title={'Tất cả'} value={0} />
                            </Select>
                        </div>
                    </FilterBar>
                    <Divider />
                    <Box pt={4}>
                        <NewsList />
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default NewsPage