import TitleSection from "components/titleSection"
import React from "react"
import { Box } from "zmp-ui"
import ServiceList from "./ServiceList"
import images from "assets/images"
import { SERVICES, ServicesType } from "constants/utinities"
import ServiceItem from "./ServiceItem"

const ServiceSection: React.FC<any> = ({ setSheetVisible }) => {
    return (
        <Box>
            <Box px={4} pb={4}>
                <TitleSection title="" />
                <div className="grid grid-cols-4 gap-x-3 gap-y-4">
                    {
                        SERVICES.map((item: ServicesType, index: React.Key) => (
                            <ServiceItem key={index} data={item} />
                        ))
                    }
                    <Box onClick={() => {
                        setSheetVisible(true);
                    }}>
                        <div className="flex-center flex-col gap-2">
                            <Box>
                                <div className="bg-[#355933] rounded-full flex-center p-4 w-[60px] h-[60px] relative">
                                    <img src={images.more} alt='Tiện ích khác' />
                                </div>
                            </Box>
                            <Box>
                                <h4 className="text-[14px] leading-[18px] text-center font-medium">Tiện ích khác</h4>
                            </Box>
                        </div>
                    </Box>
                </div>
            </Box>
        </Box>
    )
}

export default ServiceSection