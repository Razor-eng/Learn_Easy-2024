import React from 'react'

const Context = ({ data }) => {
    let sentences = data.split("\n")
    return (
        <>
            {sentences.map((sentence, id) => (
                <div key={id}>
                    {
                        sentence.startsWith('\t') ?
                            (
                                <p className='font-thin bg-black max-w-96 h-8 mt-2 mb-2 flex items-center p-3 text-gray-300'>
                                    {sentence.trim(2)}
                                </p>
                            )
                            :
                            (
                                < p className='font-thin indent-8 mt-4 text-gray-500 max-w-xl' >
                                    {sentence.trim(1)}
                                </ p>
                            )
                    }
                </div>
            ))
            }
        </>
    )
}

export default Context