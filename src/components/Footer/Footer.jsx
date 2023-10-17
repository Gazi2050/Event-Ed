import { FaReddit, FaFacebook, FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="bg-emerald-200 dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <a href="#">
                            <p className='text-black text-3xl font-bold '>Event Ed</p>
                        </a>

                        <div className="flex flex-wrap justify-center mt-6 -mx-4">
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Home </a>

                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> About </a>

                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Teams </a>

                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Privacy </a>

                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400" aria-label="Reddit"> Cookies </a>
                        </div>

                    </div>

                    <hr className="my-6 border-black md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2021. All Rights Reserved.</p>

                        <div className="flex mx-2 mt-3 lg:mt-0">
                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                                <FaReddit className="text-2xl" />
                            </a>

                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                <FaFacebook className="text-2xl" />
                            </a>

                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                                <FaGithub className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;