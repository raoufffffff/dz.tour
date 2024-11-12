import { Link } from 'react-router-dom'
import categories from '../../constanst/types'
import Titel from '../../compunent/titel/Titel'
const Home = () => {
    const OurCategory = categories.map((e, i) => {
        return <Link
            className='flex bg-[#ddd3] min-w-[48%] md:min-w-[15%]   h-16 py-1 px-3 md:h-12 md:py-1 md:px-1 items-center rounded-xl'
            to={`/evant/${e.name}`}
            key={i}
        >
            <img
                className='h-full'
                src={e.img} />
            <span
                className='mx-auto'
            >
                {e.name}
            </span>
        </Link>
    })
    return (
        <div
            className=''
        >
            <Titel name='Categories' />
            <div
                className='flex flex-wrap gap-2 justify-around'
            >

                {OurCategory}
            </div>
        </div>
    )
}

export default Home