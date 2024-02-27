import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Questions from '../constants/Questions';
import Header from '../components/Header';
import { Button, Image, useColorMode } from '@chakra-ui/react';
import Notes from '../components/Notes';
import Question from '../components/Question';
import Quiz from '../components/Quiz/Quiz';
import QuizQuestions from '../constants/QuizQuestions';

const Data = () => {
    const { pathname } = useLocation();
    const topic = Questions.filter(topic => topic.title === pathname.split("/")[1])[0];
    const [content, setContent] = useState('notes')
    const { colorMode } = useColorMode()
    const [subject, setSubject] = useState("");

    useEffect(() => {
        QuizQuestions.map((sub) => (
            topic.title === sub.title && setSubject(sub.quiz)
        ))
    }, [topic])
    const changecontent = (val) => {
        setContent(val);
    }
    return (
        <div className='pt-6 w-full mt-5 sm:mt-0 lg:p-10 h-full max-h-fit flex flex-col border-black'>
            <div className='[&>*:nth-child(2)]:border-b-2'>
                <Image src={topic.logo} alt='Language' className='max-w-[30%] lg:w-36 ml-auto mr-auto h-auto bg-white rounded-full sm:rounded-3xl' />
                <Header heading={topic.title} />
            </div>
            <div className='w-full lg:w-96 flex justify-between'>
                <Button
                    onClick={() => changecontent('notes')}
                    bgColor=
                    {`
                        ${content === "notes" ? "gray.600" : ""}
                        ${colorMode === "dark" ? "gray.600" : "gray.300"}
                    `}
                    border={"2px"}
                    borderColor={`${content === "notes" ? "gray.400" : "transparent"}`}
                >
                    Notes
                </Button>
                <Button
                    onClick={() => changecontent('questions')}
                    bgColor={`
                    ${content === "questions" ? "gray.600" : ""}
                    ${colorMode === "dark" ? "gray.600" : "gray.300"}
                    `}
                    border={"2px"}
                    borderColor={`${content === "questions" ? "gray.400" : "transparent"}`}
                >
                    Questions
                </Button>
                <Button
                    onClick={() => changecontent('quiz')}
                    bgColor={`
                    ${content === "quiz" ? "gray.600" : ""}
                    ${colorMode === "dark" ? "gray.600" : "gray.300"}
                    `}
                    border={"2px"}
                    borderColor={`${content === "quiz" ? "gray.400" : "transparent"}`}
                >
                    Quiz
                </Button>
            </div>
            <div className='mt-2'>
                <h1 className='text-3xl'>{topic.title}</h1>
                {content === 'notes' &&
                    <Notes topic={topic} />
                }
                {content === "questions" &&
                    <Question topic={topic} />
                }
                {content === "quiz" &&
                    <Quiz topic={subject} />
                }
            </div>
        </div>
    )
}

export default Data