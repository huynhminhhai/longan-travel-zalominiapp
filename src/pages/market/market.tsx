import images from 'assets/images'
import { BusItem } from 'components/bus'
import { Divider } from 'components/divider'
import { HeaderSub } from 'components/header-sub'
import { CategoryMap } from 'components/map'
import { OilItem } from 'components/oil'
import FilterBar from 'components/table/FilterBar'
import { TaxiItem } from 'components/taxi'
import React from 'react'
import { Box, Input, Page, Select } from 'zmp-ui'

export const oilData = [
    {
        "name": "CÔNG TY TNHH MTV NGỌC MAI",
        "address": "363, Ấp Vĩnh Hòa, Xã An Vĩnh Ngãi, Thành phố Tân An, Tỉnh Long An, Việt Nam",
        "img": "https://opgplus.com/wp-content/uploads/2023/08/gas-station.jpeg"
    },
    {
        "name": "CÔNG TY TNHH TRUNG DŨNG LONG AN",
        "address": "108 Tuyến tránh Quốc Lộ 1, Phường 4, Thành phố Tân An, Tỉnh Long An, Việt Nam",
        "img": "https://opgplus.com/wp-content/uploads/2023/08/gas-station.jpeg"
    },
    {
        "name": "CÔNG TY TNHH TRUNG DŨNG LONG AN",
        "address": "108 Tuyến tránh Quốc Lộ 1, Phường 4, Thành phố Tân An, Tỉnh Long An, Việt Nam",
        "img": "https://opgplus.com/wp-content/uploads/2023/08/gas-station.jpeg"
    },
    {
        "name": "CÔNG TY TNHH VẬT TƯ XĂNG DẦU LÊ TRUNG",
        "address": "Số 579, Ngã 3 Mỹ Hạnh, Ấp Mới 2, Xã Mỹ Hạnh Nam, Huyện Đức Hoà, Tỉnh Long An, Việt Nam",
        "img": "https://opgplus.com/wp-content/uploads/2023/08/gas-station.jpeg"
    },
    {
        "name": "CÔNG TY TNHH VẬT TƯ XĂNG DẦU LÊ TRUNG",
        "address": "Số 579, Ngã 3 Mỹ Hạnh, Ấp Mới 2, Xã Mỹ Hạnh Nam, Huyện Đức Hoà, Tỉnh Long An, Việt Nam",
        "img": "https://opgplus.com/wp-content/uploads/2023/08/gas-station.jpeg"
    },
    {
        "name": "PETROLIMEX - CỬA HÀNG 02",
        "address": "Đường Trương Định, phường 2, thành phố Tân An, tỉnh Long An",
        "img": "https://opgplus.com/wp-content/uploads/2023/08/gas-station.jpeg"
    }
]




const MarketPage = () => {

    const { Option } = Select

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Chợ địa phương" />
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
                        <CategoryMap iconMarker={images.market} locations={
                            [
                                {
                                    "lat": 10.639368531439347,
                                    "lng": 106.4808664809194,
                                    "name": "Chợ Bến Lức",
                                    "address": "234 Bùi Thị Đồng, TT. Bến Lức, Bến Lức, Long An",
                                    "img": "https://file4.batdongsan.com.vn/resize/745x510/2023/05/06/20230506154916-509b_wm.jpg"
                                },
                                {
                                    "lat": 10.638584860860393,
                                    "lng": 106.53773309981324,
                                    "name": "Chợ Gò Đen",
                                    "address": "133 Đường Phan Văn Mãng, KP9, Thị trấn Bến Lức, Tỉnh Long An",
                                    "img": "https://global-uploads.webflow.com/60af8c708c6f35480d067652/6228d5526caecd51b260c7b5_screenshot_1646843202.png"
                                },
                                {
                                    "lat": 10.624759370489178,
                                    "lng": 106.48806469981322,
                                    "name": "Chợ Thuận Đạo",
                                    "address": "78 KP 8, TT. Bến Lức, Bến Lức, Long An",
                                    "img": "https://down-vn.img.susercontent.com/vn-11134259-7r98o-lw8enta46cpn83@resize_ss640x400"
                                },
                                {
                                    "lat": 10.63425973003139,
                                    "lng": 106.4699445267994,
                                    "name": "Chợ Nhựt Chánh",
                                    "address": "78 KP 8, TT. Bến Lức, Bến Lức, Long An",
                                    "img": "https://file4.batdongsan.com.vn/resize/745x510/2023/06/06/20230606132703-4050_wm.jpg"
                                },
                                {
                                    "lat": 10.604353331334464,
                                    "lng": 106.4029972839103,
                                    "name": "Chợ Thủ Thừa",
                                    "address": "78 KP 8, TT. Bến Lức, Bến Lức, Long An",
                                    "img": "https://daiachau.vn/wp-content/uploads/2020/11/DJI_0671.jpg"
                                }
                            ]

                        } />
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default MarketPage