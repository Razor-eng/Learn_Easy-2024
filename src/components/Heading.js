import { QuestionOutlineIcon } from '@chakra-ui/icons'
import React from 'react'

const Heading = ({ subTopic, qTag, colorMode }) => {
    return (
        <div className={`flex text-xl items-center ${colorMode === "dark" ? "bg-slate-800" : "bg-slate-300"}`}>
            {qTag && <QuestionOutlineIcon />}
            <h1 className='text-xl indent-2'>
                {subTopic}
            </h1>
        </div>
    )
}

export default Heading