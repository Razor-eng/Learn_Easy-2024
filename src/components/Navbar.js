import { HamburgerIcon, MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode, useDisclosure } from '@chakra-ui/react'
import { Link, useLocation } from "react-router-dom";
import NavModal from "./Modal";

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { pathname } = useLocation();

    return (
        <div className={`w-full md:w-[74%] flex items-center justify-between ml-auto mr-auto rounded-2xl sticky top-4 py-2 px-8 ${colorMode === "light" ? " bg-gray-300 text-black shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]" : "bg-gray-800 text-white shadow-[rgba(0,0,0,0.25)_0px_6px_12px_-2px,_rgba(50,50,50,0.3)_0px_3px_7px_-3px]"} z-50`}>
            <div className="hidden sm:flex flex-row gap-12 justify-between font-bold text-lg ">
                <Link to={"/"} className={`hover:text-gray-400 ${pathname == "/" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>Home</Link>
                {/* <Link to={"/about"} className={`hover:text-gray-400 ${pathname == "/about" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>About</Link> */}
                <Link to={"/languages"} className={`hover:text-gray-400 ${pathname == "/languages" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>Languages</Link>
                <Link to={"/contact"} className={`hover:text-gray-400 ${pathname == "/contact" && "border-b-2"} ${colorMode === "light" ? "border-black" : "border-white"}`}>Contact</Link>
            </div>
            <div className={`hidden lg:flex items-center rounded-full ${colorMode === "light" ? "bg-gray-200" : "bg-gray-600"}`}>
                <input type="text" placeholder="Search"
                    className={`p-3 border-0 bg-transparent outline-none text-lg max-w-[200px] ${colorMode === "light" ? "placeholder:text-gray text-white" : "placeholder:text-gray text-black"}`}
                />
                <SearchIcon cursor={"pointer"}
                    width={12}
                    color={"gray.500"}
                    fontSize={20}
                    borderLeft={"0.5px solid gray"}
                    _hover={{ color: "gray.400" }}
                />
            </div>
            <div className="sm:hidden block">
                <Button padding={1} size={10} backgroundColor={"transparent"}>
                    {
                        !isOpen &&
                        <HamburgerIcon fontSize={23} onClick={e => onOpen()} color={`${colorMode === "light" ? "gray.800" : "gray.100"}`} />
                        // :
                        // <CloseIcon fontSize={23} color={`${colorMode === "light" ? "gray.800" : "gray.100"}`} />
                    }
                </Button>
            </div>
            <Button onClick={() => toggleColorMode()} w={"1px"} borderRadius={"100px"} _hover={{ backgroundColor: "gray.600" }} background={"transparent"} >
                {colorMode === "dark" ? <SunIcon color={"#FDB813"} fontSize={"24px"} /> : <MoonIcon color={"#F5F3CE"} fontSize={"24px"} />}
            </Button>
            {isOpen && <NavModal isOpen={isOpen} onClose={onClose} colorMode={colorMode} pathname={pathname} />}
        </div >
    )
}

export default Navbar