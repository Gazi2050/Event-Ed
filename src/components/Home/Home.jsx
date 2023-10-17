import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Review from "../Review/Review";
import Service from "../Service/Service";

const Home = () => {


    return (
        <div>
            <div data-aos="fade-up" className="hero min-h-screen" style={{ backgroundImage: 'url(/colorBG.png)' }}>
                <div></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex justify-center items-center">
                        <div className="text-justify rounded-xl p-1 lg:p-10 md:px-10 backdrop-blur-md md:backdrop-blur-md lg:w-[50%]">
                            <h1 className="m-4 text-2xl font-bold lg:text-5xl">Welcome to <span className="text-teal-300">Event Ed</span></h1>
                            <p className="text-xl font-semibold">Explore the latest in tech events, gain insights from industry experts, and connect with fellow tech enthusiasts.
                                Get ready to immerse yourself in a world of innovation, learning, and networking.</p>
                            <b className="text-teal-300">Your Gateway to the Tech World!</b>
                        </div>
                        <div>
                            <img className="hidden w-full md:hidden lg:block" src="/undraw_Team_spirit_re_yl1v-removebg-preview.png" alt="Team Member" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(/stacked-waves-haikei.png)' }}>
                <Service></Service>
            </div>
            <div className="hero min-h-screen lg:p-10" style={{ backgroundImage: 'url(/mesh-181.png)' }}>
                <Review></Review>
            </div>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
