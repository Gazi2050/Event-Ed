
import { useLoaderData, useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
const Details = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find((detail) => detail.id === idInt);

    return (
        <div data-aos="zoom-in" className='mb-5'>
            {detail ? (
                <div className="flex flex-col items-center justify-center w-full max-w-full mx-auto">
                    <div
                        className="w-full h-96 bg-gray-300 bg-center bg-cover  shadow-md"
                        style={{ backgroundImage: `url(${detail.img})` }}
                    ></div>

                    <div className="w-full -mt-10  overflow-hidden bg-green-100 rounded-lg shadow-lg md:w-full lg:w-[1100px] dark:bg-gray-800">
                        <h3 className="py-2  tracking-wide text-center text-lg font-bold text-gray-800 uppercase  dark:text-white underline underline-offset-8">
                            {detail.title}
                        </h3>
                        <p className='p-2 font-medium'>{detail.short_description}</p>
                        <div className="flex items-center justify-between px-3 py-2 bg-stone-800  dark:bg-gray-700">
                            <span className="font-bold text-white dark:text-gray-200">${detail.price}</span>
                            <NavLink to={'#'}>
                                <button className="px-4 py-2 text-xs font-bold uppercase transition-colors duration-300 transform bg-teal-200 rounded hover:bg-teal-400 focus:bg-teal-500 focus:outline-none">Place Order</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='flex justify-center items-center mt-40'>
                    <span className="loading loading-infinity loading-lg"></span>
                </div>

            )}
        </div>
    );
};

export default Details;
