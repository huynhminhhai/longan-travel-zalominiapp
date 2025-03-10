import { HeaderSub } from "components/header-sub"
import { TeamUpdateForm } from "components/team"
import React from "react"
import { Box, Page } from "zmp-ui"

const TeamUpdatePage: React.FC = () => {
    return (
        <Page className="relative flex-1 flex flex-col bg-white pb-[72px]">
            <Box>
                <HeaderSub title="Chỉnh sửa thông tin nhân sự" />
                <TeamUpdateForm />
            </Box>
        </Page>
    )
}

export default TeamUpdatePage