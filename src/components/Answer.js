import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { useState } from 'react'

const Answer = ({ answer }) => {
    const [see, setSee] = useState(true)
    const data = answer.split("\n");
    const { colorMode } = useColorMode()

    return (
        <div className=''>
            {see ?
                (
                    <div
                        className={`pl-32 md:pl-44 flex items-center cursor-pointer hover:border-b w-full border-gray-600 ${colorMode === "dark" ? "bg-slate-800" : "bg-slate-300"}`}
                        onClick={() => setSee(false)}
                    >
                        <h2 className='text-gray-600'>Answer</h2>
                        <IconButton
                            ml={"-2px"}
                            color='gray.500'
                            bgColor={"transparent"}
                            icon={<TriangleDownIcon />}
                            onClick={() => setSee(false)}
                            size={"sm"}
                            _hover={{ bgColor: "transparent" }}
                        />
                    </div>
                )
                :
                (
                    <>
                        <div className={`flex mt-2 ${colorMode === "dark" ? 'text-gray-400' : 'text-gray-600'}`}>
                            {"A)"}
                            <div className='ml-2 font-light text-pretty text-sm '>
                                {data.map(e => (
                                    <div className='mt-2'>
                                        {e.includes(":") ? (
                                            <div>
                                                {
                                                    e.includes("/p") ? (
                                                        <ul className='font-bold'>{e.split(":")[0].split("/p")}:</ul>
                                                    ) : (
                                                        <p className='font-semibold underline'>{e.split(":")[0]}:</p>
                                                    )
                                                }
                                                <p>{e.split(":")[1]}</p>
                                            </div>
                                        ) : (
                                            e.includes("/p") ? (
                                                <li>{e.split("/p")}</li>
                                            ) : (
                                                <p>{e}</p>
                                            )
                                        )
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div
                            className='pl-32 md:pl-44 flex items-center cursor-pointer hover:border-b w-full border-gray-600'
                            onClick={() => setSee(true)}
                        >
                            <h2 className='text-gray-500'>Hide</h2>
                            <IconButton
                                color='gray.500'
                                bgColor={"transparent"}
                                icon={<TriangleUpIcon />}
                                onClick={() => setSee(true)}
                                size={"sm"}
                                fontSize={"md"}
                                _hover={{ bgColor: "transparent" }}
                            />
                        </div>
                    </>
                )}
        </div>
    )
}

export default Answer