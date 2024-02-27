import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import ResultModalContents from "./ResultModalContents"

const ResultModal = ({ isOpen, onClose, correct, wrong, score }) => {
    return (
        <Modal onClose={onClose} isOpen={isOpen} motionPreset='slideInTop' isCentered size={{ base: "3xl", md: "sm" }}>
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(3px) hue-rotate(30deg)'
            />
            <ModalContent >
                <ModalHeader fontSize={"xxx-large"} >Results</ModalHeader>
                <ModalCloseButton />
                <ModalBody marginTop={"10%"} display={"flex"} flexDir={"column"} gap={4}>
                    <ResultModalContents title={"Score"} result={score} classVal={'text-indigo-500 font-semibold text-4xl'} />
                    <p className="border border-slate-400 mt-4 mb-4"></p>
                    <ResultModalContents title={"Total"} result={correct + wrong} classVal={'text-blue-300 text-4xl'} />
                    <ResultModalContents title={"Correct"} result={correct} classVal={'text-green-500 text-3xl'} />
                    <ResultModalContents title={"Wrong"} result={wrong} classVal={'text-red-500 text-3xl'} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ResultModal