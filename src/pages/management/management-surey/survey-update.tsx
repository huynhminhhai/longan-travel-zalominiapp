import { HeaderSub } from "components/header-sub"
import { SurveyUpdateForm } from "components/survey"
import React from "react"
import { Box, Page } from "zmp-ui"

const SurveyUpdatePage: React.FC = () => {
    return (
        <Page className="relative flex-1 flex flex-col bg-white pb-[72px]">
            <Box>
                <HeaderSub title="Cập nhật khảo sát" />
                <SurveyUpdateForm />
            </Box>
        </Page>
    )
}

export default SurveyUpdatePage