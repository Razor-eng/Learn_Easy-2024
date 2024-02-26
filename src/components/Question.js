import React from 'react'
import Heading from './Heading'
import Answer from './Answer'
import { useColorMode } from '@chakra-ui/react'

const Question = ({ topic }) => {
    const { colorMode } = useColorMode();

    return (
        <>
            {topic.title !== "ReactJS" ? (
                <div className='w-full flex justify-center items-center h-full'>
                    <h1 className='text-2xl'>No data available!</h1>
                </div>
            ) : (
                <div>
                    {topic.questions.map(question => (
                        <div key={question.question} className={`mt-6 md:w-[40vw] w-full border-b border-gray-400 ${colorMode === "dark" ? "bg-slate-700" : "bg-slate-200"}`}>
                            <Heading colorMode={colorMode} subTopic={question.question} qTag />
                            <Answer answer={question.answer} />
                        </div>
                    ))}
                </div>
            )
            }
        </>
    )
}

export default Question