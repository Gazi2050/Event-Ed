
import { FaReddit, FaFacebook, FaGithub } from "react-icons/fa6";
const Contact = () => {
    return (
        <div data-aos="zoom-in" className="flex justify-center items-center mt-10">
            <div className="w-full max-w-sm px-4 py-3 bg-green-100 rounded-md shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-light text-gray-800 dark:text-gray-400"></span>
                    <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">Contact</span>
                </div>

                <div>
                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white">Reach Out to Us</h1>
                    <p className="mt-2 text-lg font-medium text-gray-600 dark:text-gray-300">Contact us if you want to arrange a technology event or have any questions about us</p>
                </div>

                <div>
                    <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">

                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="grid h-20 card bg-lime-50 rounded-box place-items-center"><span>Visit on:</span>
                                <a href="https://event-ed-a80aa.web.app/" className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex="0" role="link">Event ED</a></div>
                            <div className="divider">OR</div>
                            <div className="grid h-20 card bg-lime-50 rounded-box place-items-center"><span>E-mail:</span>
                                <a href='#' className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline" tabIndex="0" role="link">event@ed.com</a></div>
                        </div>

                    </div>

                    <div className="flex items-center justify-center mt-4">
                        <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabIndex="0" role="link" aria-label="reddit">
                            <FaReddit className="text-2xl" />
                        </a>

                        <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabIndex="0" role="link" aria-label="facebook">
                            <FaFacebook className="text-2xl" />
                        </a>
                        <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" tabIndex="0" role="link" aria-label="github">
                            <FaGithub className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;