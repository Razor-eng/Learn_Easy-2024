import React from 'react'
import Heading from './Heading'
import Context from './Context'

const Note = ({ note }) => {
    return (
        <div className='mt-8'>
            <h1 className='text-2xl font-medium'>
                {note.heading}
            </h1>
            {
                note.data.map(ele => (
                    <div className='mt-3' key={ele.topic}>
                        <div className='flex gap-2'>
                            <p>{ele.id}.</p>
                            <Heading subTopic={ele.topic} />
                        </div>
                        <Context data={ele.context} />
                    </div>
                ))
            }
        </div>
    )
}

export default Note