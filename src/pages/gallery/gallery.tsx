import { DestinationItem } from 'components/destination'
import { destinationData } from 'components/destination/DestinationSection'
import { Divider } from 'components/divider'
import { GalleryItem } from 'components/gallery'
import { HeaderSub } from 'components/header-sub'
import FilterBar from 'components/table/FilterBar'
import React from 'react'
import { Box, Input, Page, Select, useNavigate } from 'zmp-ui'

export const galleryData = [
    {
        title: 'Thực vật Long An',
        img: 'https://khuyennongvn.gov.vn/portals/0/news_images/2015/10/nguyetkn/dua_hau.jpg',
        alt: 'Thực vật Long An'
    },
    {
        title: 'Hình ảnh giá trị địa chất',
        img: 'https://media.la34.com.vn/upload/image/201509/medium/69258_A1.jpg',
        alt: 'Hình ảnh giá trị địa chất'
    },
    {
        title: 'Thiên Nhiên & Văn Hóa',
        img: 'https://vocongton.wordpress.com/wp-content/uploads/2024/09/long-an-que-huong-toi-02.jpg',
        alt: 'Thiên Nhiên & Văn Hóa'
    },
    {
        title: 'Hành Trình Trải Nghiệm Đáng Nhớ',
        img: 'https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c80785987dd491ccd2796e1d44e73ef229421b32fa3d014e2040f13f8c98354406681a2a99523f2fe5e4403176af1a434f7a53/du-lich-long-an-1802.jpg.webp',
        alt: 'Hành Trình Trải Nghiệm Đáng Nhớ'
    }
]

const GalleryPage = () => {

    const { Option } = Select

    return (
        <Page className="relative flex-1 flex flex-col bg-white">
            <Box>
                <HeaderSub title="Địa điểm nổi bật" />
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
                            galleryData.map((item, index) => (
                                <Box mb={6} key={index}>
                                    <GalleryItem data={item} />
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}

export default GalleryPage