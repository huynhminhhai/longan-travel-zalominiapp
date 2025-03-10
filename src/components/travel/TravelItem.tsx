import { Icon } from '@iconify/react'
import React from 'react'
import { Box } from 'zmp-ui'

const TravelItem: React.FC<any> = ({ data }) => {
    return (
        <Box className='border-[1px] rounded-lg'>
            <img className='w-full h-[210px] object-cover rounded-lg' src={data.imgUrl} alt={data.title} />
            <Box px={3} py={4}>
                <h3 className='text-[16px] font-bold text-[#355933] line-clamp-1 mb-2'>{data.title}</h3>
                <ul className='flex flex-col gap-1 text-[14px] leading-[18px] font-medium'>
                    <li className='flex items-start gap-1'>
                        <Icon className='w-[20px] mt-1' icon='mdi:place-outline' />
                        <span className='flex-1 line-clamp-2'>
                            {data.address}
                        </span>
                    </li>
                </ul>
            </Box>
        </Box>
    )
}

export default TravelItem