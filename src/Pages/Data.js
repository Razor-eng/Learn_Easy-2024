import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Questions from '../constants/Questions';
import Header from '../components/Header';
import { Button, Image, useColorMode } from '@chakra-ui/react';
import Notes from '../components/Notes';
import Question from '../components/Question';

const Data = () => {
    const { pathname } = useLocation();
    const topic = Questions.filter(topic => topic.title == pathname.split("/")[1])[0];
    const [notes, setNotes] = useState(false)
    const { colorMode } = useColorMode()

    return (
        <div className='pt-6 w-full mt-5 sm:mt-0 lg:p-10 h-full max-h-fit flex flex-col border-black'>
            <div className='[&>*:nth-child(2)]:border-b-2'>
                <Image src={topic.logo} alt='Language' className='max-w-[30%] lg:w-36 ml-auto mr-auto h-auto bg-white rounded-full sm:rounded-3xl' />
                <Header heading={topic.title} />
            </div>
            <div className=' w-52 flex justify-between'>
                <Button
                    onClick={() => setNotes(true)}
                    bgColor={`
                    ${notes ? "gray.600" : ""}
                    ${colorMode === "dark" ? "gray.600" : "gray.300"}
                    `}
                    border={"2px"}
                    borderColor={`${notes ? "gray.400" : "transparent"}`}
                >
                    Notes
                </Button>
                <Button
                    onClick={() => setNotes(false)}
                    bgColor={`
                    ${!notes ? "gray.600" : ""}
                    ${colorMode === "dark" ? "gray.600" : "gray.300"}
                    `}
                    border={"2px"}
                    borderColor={`${!notes ? "gray.400" : "transparent"}`}
                >
                    Questions
                </Button>
            </div>
            <div className='mt-2'>
                <h1 className='text-3xl'>{topic.title}</h1>
                {notes ?
                    <Notes topic={topic} />
                    :
                    <Question topic={topic} />
                }
            </div>
        </div>
    )
}

export default Data