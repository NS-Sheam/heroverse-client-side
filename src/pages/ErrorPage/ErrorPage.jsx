
import Lottie from "react-lottie";
import errorAnim from "../../../public/animation/error.json"
import { Link, useRouteError } from 'react-router-dom';
const Errorpage = () => {
    const { error, status } = useRouteError()
    console.log(status);
    return (
        <section className='flex items-center justify-center h-screen p-16 text-gray-900'>
            <div className='d-flex flex-column justify-content-between align-items-center px-5 mx-auto my-8'>
                {/* <img className='w-25' src={errorAnim} alt="" /> */}
                <div className="w-25">
                <Lottie
                    options={{
                        animationData: errorAnim,
                    }}
                    width={400}
                    height={500}
                />
                </div>
                <div className='text-center'>
                    <p className='text-error text-xl font-semibold md:text-3xl mb-8 text-danger'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className='px-4 py-3 rounded'
                    >
                        <button className='bg-orange-primary hover:bg-orange-secondary py-2 px-4 rounded-2 border-0 fw-bold text-white rounded-full font-bold'>Back to homepage</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Errorpage;