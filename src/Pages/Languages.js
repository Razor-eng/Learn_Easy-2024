import React from 'react'
import Card from '../components/Card'
import Constants from '../constants/Constants'
import Header from '../components/Header'

const Languages = () => {
    return (
        <div className='pt-6 w-full mt-5 sm:mt-0 lg:p-20 h-full max-h-fit flex flex-col gap-8'>
            <Header heading={"All the Coding Languages"} />
            <div className="mt-2 grid grid-cols-1 ml-auto mr-auto md:ml-0 md:mr-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Constants.map(e => (
                    <Card
                        key={e.id}
                        logo={e.logo}
                        name={e.name}
                        description={e.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Languages