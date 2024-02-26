import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavModal = ({ isOpen, onClose, colorMode, pathname }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInTop' isCentered >
            <ModalOverlay
                bg='blackAlpha.300'
                backdropFilter='blur(10px) hue-rotate(30deg)'
            />
            <ModalContent bg={`${colorMode === "light" ? "gray.100" : "gray.800"}`} border={"1px solid gray"} maxW={"400px"}>
                <ModalHeader></ModalHeader>
                <ModalCloseButton color={`${colorMode === "light" ? "gray.800" : "gray.100"}`} />
                <ModalBody display={"flex"} alignItems={"center"} flexDir={"column"} gap={6} justifyContent={"center"} fontWeight={"semibold"} color={`${colorMode === "light" ? "gray.800" : "gray.100"}`} pb={6} fontSize={"3xl"}>
                    {/* <Flex mb={4} gap={4} flexDir={"column"} maxH={"250px"} overflowY={"auto"}></Flex> */}
                    <Link to={"/"} className={`hover:text-gray-400 400 ${pathname == "/" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>Home</Link>
                    {/* <Link to={"/about"} className={`hover:text-gray-400 ${pathname == "/about" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>About</Link> */}
                    <Link to={"/languages"} className={`hover:text-gray-400 ${pathname == "/languages" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>Languages</Link>
                    <Link to={"/contact"} className={`hover:text-gray-400 ${pathname == "/contact" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>Contact</Link>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default NavModal;
