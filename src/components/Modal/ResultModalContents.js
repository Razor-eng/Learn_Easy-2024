import React from 'react'

const ResultModalContents = ({ title, result, classVal }) => {
    return (
        <div className='flex tracking-widest border'>
            <h2 className={`min-w-40 ${classVal} p-4 flex justify-center items-center`}>{title}</h2>
            {/* eslint-disable-next-line */}
            <h2 className='border border-gray-400'></h2>
            <h2 className={`pl-2 ${classVal} border-l p-4 flex justify-center items-center min-w-20 h-full`}>{result}</h2>
        </div>
    )
}

export default ResultModalContents