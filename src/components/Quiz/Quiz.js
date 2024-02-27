import { Button, useColorMode, useDisclosure } from "@chakra-ui/react"
import Heading from "../Heading"
import QuizAnswer from "./QuizAnswer";
import { useState } from "react";
import ResultModal from "../Modal/ResultModal";

const Quiz = ({ topic }) => {
    const { colorMode } = useColorMode();
    const [score, setScore] = useState(0)
    const [submit, setSubmit] = useState(false);
    const { isOpen, onClose, onOpen } = useDisclosure()
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)

    const countScore = (id, answer) => {
        if (id === answer) {
            setScore(score + 1)
            setCorrect(correct + 1);
        }
        if (id !== answer) {
            setScore(score)
            setWrong(wrong + 1);
        }
    }

    return (
        <div>
            {topic.map((quest, id) => (
                <div key={id} className={`mt-6 md:w-[40vw] w-full border-b border-gray-400 ${colorMode === "dark" ? "bg-slate-700" : "bg-slate-200"}`}>
                    <Heading colorMode={colorMode} subTopic={quest.question} qTag />
                    <QuizAnswer colorMode={colorMode} quest={quest} countScore={countScore} />
                </div>
            ))}
            <Button
                isLoading=""
                loadingText='Submitting'
                colorScheme='black'
                variant='outline'
                bgColor='green.300'
                marginTop={5}
                marginBottom={23}
                onClick={() => { setSubmit(true); onOpen() }}
            >
                Submit
            </Button>
            {submit && <ResultModal isOpen={isOpen} onClose={onClose} correct={correct} wrong={wrong} score={score} />}
        </div>
    )
}

export default Quiz