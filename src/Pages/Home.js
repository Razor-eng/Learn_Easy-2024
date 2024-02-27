import Card from "../components/Card"
import Header from "../components/Header"
import Constants from "../constants/Constants"

const Home = () => {
    return (
        <div className='pt-6 w-full mt-5 sm:mt-0 lg:p-20 h-full max-h-fit flex flex-col gap-8'>
            <Header heading={"Learn all the demanded Languages, stay updated and prepared"} />
            <h1 className="sm:text-2xl text-xl font-medium underline md:ml-4 ml-8">
                Languages:
            </h1>
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

export default Home