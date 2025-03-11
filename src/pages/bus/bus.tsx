import { BusItem } from 'components/bus'
import { Divider } from 'components/divider'
import { HeaderSub } from 'components/header-sub'
import FilterBar from 'components/table/FilterBar'
import React from 'react'
import { Box, Input, Page, Select } from 'zmp-ui'

export const busData = [
    {
        "name": "Bến xe khách Tân Trụ",
        "address": "Ấp Tân Bình, TT Tân Trụ, Tân Trụ, Long An",
        "img": "https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png"
    },
    {
        "name": "Bến xe khách Bình Hòa Hưng",
        "address": "Ấp 2, xã Bình Hòa Hưng, Huyện Đức Huệ, tỉnh Long An",
        "img": "https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png"
    },
    {
        "name": "Bến xe khách Long An",
        "address": "Bến Xe Tân Trụ cũ, Nguyễn Trung Trực, tt. Tân Trụ, Tân Trụ, Long An, Việt Nam",
        "img": "https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png"
    },
    {
        "name": "Bến xe khách Đức Huệ",
        "address": "KV 1, thị trấn Đông Thành, Đức Huệ, Long An",
        "img": "https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png"
    },
    {
        "name": "Bến xe khách Hậu Nghĩa",
        "address": "Thị trấn Hậu Nghĩa, Đức Hòa, Long An",
        "img": "https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png"
    },
    {
        "name": "Bến xe khách Tân Hưng",
        "address": "Ấp Gò Thuyền, thị trấn Tân Hưng, Tân Hưng, LA",
        "img": "https://scontent.iocvnpt.com/resources/portal//Images/LAN/sangvt.lan/tien_ich/benxe_637184791059233590.png"
    }
]

const BusPage = () => {

    const { Option } = Select

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Bến xe" />
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
                                placeholder="Tất cả"
                                closeOnSelect
                            >
                                <Option title={'Tất cả'} value={0} />
                                <Option title={'Nổi tiếng'} value={1} />
                            </Select>
                        </div>
                    </FilterBar>
                    <Divider />
                    <Box px={4} pt={4}>
                        {
                            busData.map((item, index) => (
                                <Box mb={6} key={index}>
                                    <BusItem data={item} />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default BusPage