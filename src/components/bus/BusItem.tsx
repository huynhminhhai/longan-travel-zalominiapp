import { Icon } from '@iconify/react'
import React from 'react'
import { Box, useNavigate } from 'zmp-ui'

const BusItem: React.FC<any> = ({ data }) => {

    const navigate = useNavigate()

    return (
        <Box className='border-[1px] rounded-lg' onClick={() => navigate('/bus-detail')}>
            <img className='w-full h-[210px] object-cover rounded-lg' src={data.img} alt={data.name} />
            <Box px={3} py={4}>
                <h3 className='text-[16px] font-bold text-[#355933] line-clamp-1 mb-2'>{data.name}</h3>
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

export default BusItem