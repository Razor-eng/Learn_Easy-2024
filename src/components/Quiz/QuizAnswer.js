import React, { useState } from 'react'
import { RepeatIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

const QuizAnswer = ({ quest, colorMode, countScore }) => {
    const [val, setVal] = useState();
    const [selected, setSelected] = useState(false);
    // eslint-disable-next-line
    const [answer, setAnswer] = useState(quest.options.indexOf(quest.answer));

    return (
        <>
            <Button onClick={() => { setVal(); setSelected(false) }} bgColor={colorMode === "dark" ? "" : "gray.500"} w={"20px"} h={"25px"} position={"relative"} top={0}>
                <RepeatIcon color={"white"} />
            </Button>
            <ul className="ml-5">
                {quest.options.map((option, id) => (
                    selected ? (
                        <li key={id} className={`list-decimal border-b-2 p-4 ${val === id || id === answer ? "" : 'hover:bg-gray-600'} cursor-pointer ${val === id && "bg-red-600"} ${id === answer && "bg-green-500"}`}>
                            {option}
                        </li>
                    ) : (
                        < li key={id} onClick={() => { setVal(id); setSelected(true); countScore(id, answer) }} className="list-decimal border-b-2 p-4 hover:bg-gray-600 cursor-pointer">
                            {option}
                        </li>
                    )
                ))
                }
            </ul >
        </>
    )
}

export default QuizAnswer