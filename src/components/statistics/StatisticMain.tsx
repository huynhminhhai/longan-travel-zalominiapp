import { Icon } from "@iconify/react";
import React from "react";
import { Box } from "zmp-ui";

const StatisticMain: React.FC<any> = () => {
    return (
        <Box mt={3}>
            <div className="bg-[#6F42C1] text-white w-[100%] p-3 py-4 rounded-xl">
                <div className="flex flex-col gap-3">
                    <Box>
                        <div className="grid grid-cols-2 gap-2 gap-y-3">
                            <h5 className="text-[13px] leading-[1] font-normal">Hộ nghèo: 5%</h5>
                            <h5 className="text-[13px] leading-[1] font-normal">Hộ cận nghèo: 15%</h5>
                            <h5 className="text-[13px] leading-[1] font-normal">Gia đình văn hóa: 15%</h5>
                            <h5 className="text-[13px] leading-[1] font-normal">Phản ánh đã xử lý: 15%</h5>
                        </div>
                    </Box>
                </div>
            </div>
        </Box>
    )
}

export default StatisticMain