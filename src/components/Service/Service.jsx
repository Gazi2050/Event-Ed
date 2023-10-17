import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


const Service = () => {
    const [Cards, setCards] = useState([]);

    useEffect(() => {
        fetch('Event.json')
            .then(res => res.json())
            .then(data => {
                setCards(data);
            });
    }, []);
    return (
        <div data-aos="fade-up">
            <div className="m-10 space-y-5" >
                <p className="text-center  font-bold text-3xl lg:text-5xl">Our Events</p>
                <p className="text-center font-semibold text-xl">Experience the future of tech events through our expert services.
                    We provide a variety of event services.</p>
            </div>

            <div data-aos="fade-up-left" className="px-5 xl:px-14 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    Cards.map(card => <div key={card.id}>

                        <div className="max-w-xs overflow-hidden bg-green-100 rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="px-4 py-2">
                                <h1 className="text-lg font-bold text-gray-800 uppercase dark:text-white">{card.title}</h1>
                            </div>

                            <img className="object-cover w-full h-48 mt-2" src={card.img} alt="NIKE AIR" />

                            <div className="flex items-center justify-between px-4 py-2 bg-stone-800">
                                <h1 className="text-lg font-bold text-white">${card.price}</h1>
                                <NavLink to={`/Details/${card.id}`}>
                                    <button className="px-4 py-2 text-xs font-bold uppercase transition-colors duration-300 transform bg-teal-200 rounded hover:bg-teal-400 focus:bg-teal-500 focus:outline-none">Details</button>
                                </NavLink>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Service;