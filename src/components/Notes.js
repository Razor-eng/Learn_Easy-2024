import React from 'react'
import Note from './Note'

const Notes = ({ topic }) => {
    return (
        <>
            {topic.title === "" ? (
                <div className='w-full flex justify-center items-center h-full'>
                    <h1 className='text-2xl'>No data available!</h1>
                </div>
            ) : (
                <div className='mt-1'>
                    <h2 className='max-w-96 text-gray-500'>
                        {topic.description}
                    </h2>
                    {
                        topic.notes.map((note) => (
                            <div key={note.heading}>
                                <Note note={note} />
                            </div>
                        ))
                    }
                </div>
            )}
        </>
    )
}

export default Notes