import React from 'react'
import { Box } from 'zmp-ui'

const DestinationItem: React.FC<any> = ({data}) => {

    return (
        <Box className='relative w-full h-[240px] rounded-lg overflow-hidden'>
            <img className='h-full w-full object-cover' src={data.imgUrl} alt="destination" />
            <div className='absolute w-full bottom-0 left-0 p-4 bg-[#365140e6]'>
                <h3 className='text-[18px] leading-[24px] font-semibold text-[#fff] line-clamp-1'>{data.title}</h3>
            </div>
        </Box>
    )
}

export default DestinationItem