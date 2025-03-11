import { Icon } from '@iconify/react'
import React from 'react'
import { Box, useNavigate } from 'zmp-ui'

const BusRoutingItem: React.FC<any> = ({ data }) => {

    const navigate = useNavigate()

    return (
        <Box className='border-[1px] rounded-lg' onClick={() => navigate('/bus-routing-detail')}>
            <img className='w-full h-[210px] object-cover rounded-lg' src={data.img} alt={data.name} />
            <Box px={3} py={4}>
                <h3 className='text-[16px] font-bold text-[#355933] line-clamp-1 mb-2'>{data.name}</h3>
                <ul className='flex flex-col gap-1 text-[14px] leading-[18px] font-medium'>
                    <li className='flex items-center gap-1'>
                        <Icon fontSize={20} icon='mingcute:time-line' />
                        <span className='flex-1 line-clamp-2'>
                            {data.time}
                        </span>
                    </li>
                </ul>
            </Box>
        </Box>
    )
}

export default BusRoutingItem