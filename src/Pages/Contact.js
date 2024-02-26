import './css/Contact.css'
import Inputs from '../components/Inputs'
import { useColorMode } from '@chakra-ui/react'

const Contact = () => {
    const { colorMode } = useColorMode();

    return (
        <div className='w-full h-[100vh] overflow-x-hidden overflow-y-hidden'>
            <section>
                <div className='contacts'>
                    <h2>Contact Us</h2>
                    <div className='row-100'>
                        <Inputs name={"First Name"} colorMode={colorMode} />
                        <Inputs name={"Last Name"} colorMode={colorMode} />
                    </div>
                    <div className='row-100'>
                        <Inputs name={"Email"} colorMode={colorMode} />
                        <Inputs name={"Mobile"} colorMode={colorMode} />
                    </div>
                    <div className='row-100'>
                        <Inputs textArea={true} name={"Type Your Message Here..."} colorMode={colorMode} />
                    </div>
                    <Inputs submit={true} colorMode={colorMode} />
                </div>
            </section >
        </div>
    )
}

export default Contact