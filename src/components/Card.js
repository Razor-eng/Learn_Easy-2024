import { Image, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ logo, name, description }) => {
    const { colorMode } = useColorMode()

    return (
        <div
            className={
                `${colorMode === "dark" ? 'bg-zinc-900 shadow-lg shadow-white' : 'bg-white shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'} 
                rounded-xl p-[20px] m-[10px] text-center max-w-[300px] inline-block
            `}
            style={{ boxShadow: `${colorMode === "dark" ? "0px 60px 40px rgb(0 0 0 / 8%)" : "5px 5px 5px hsla(0,0%, 0%,0.1)"}` }
            } >
            <Image src={logo} alt='Language' className='max-w-[60%] ml-auto mr-auto h-auto bg-white rounded-full mb-[10px]' />
            <h2 className={`${colorMode === "dark" ? "text-gray-200" : "text-[hsl(0,0%,20%)]"} m-0 text-2xl`}>
                {name}
            </h2>
            <p className={`${colorMode === "dark" ? "text-gray-400" : "text-[hsl(0,0%,30%)]"} text-sm`}>
                {description}
            </p>
            <Link to={`/${name}`} className='grid mt-6 sm:mt-3 place-items-center border-0 bg-[#6939ff] text-[#f8f8f8] py-[16px] px-[26px] text-[16px]' style={{ borderRadius: "40px" }}>
                Prepare
            </Link>
        </div>
    )
}

export default Card