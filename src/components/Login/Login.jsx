import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

const LogIn = () => {
    // State variables
    const [showPassword, setShowPassword] = useState(false);
    const errorMessage = useState('');
    const emailRef = useRef(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Handle Google login
    const handleGoogleLogin = async () => {
        try {
            const googleSignInResult = await signInWithPopup(auth, googleProvider);
            const googleUser = googleSignInResult.user;
            toast.success(`Logged in as ${googleUser.displayName}`);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        }
    };

    // Handle GitHub login
    const handleGitHubLogin = async () => {
        try {
            const githubSignInResult = await signInWithPopup(auth, githubProvider);
            const githubUser = githubSignInResult.user;
            toast.success(`Logged in as ${githubUser.displayName}`);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        }
    };

    // Handle user login with email and password
    const handleLogIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            toast.success('User logged in successfully');
            console.log(user);
        } catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage)
            toast.error('Invalid email or password, Please check');
        }
    }

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center lg:px-28">
            <div>
                <div className="m-5 lg:m-0">
                    <p className="text-sm md:text-lg lg:text-xl font-semibold">
                        <sup>____________________</sup> Continue with <sup>____________________</sup>
                    </p>
                    <NavLink onClick={handleGoogleLogin} to="#" className="w-sm flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <FcGoogle className="text-2xl" />
                        <span className="mx-2">Login with Google</span>
                    </NavLink>
                    <NavLink onClick={handleGitHubLogin} to="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <FaGithub className="text-2xl text-black" />
                        <span className="mx-2">Login with GitHub</span>
                    </NavLink>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto overflow-hidden bg-slate-50 rounded-lg shadow-md dark:bg-gray-800 pt-5 lg:mt-8 md:mt-5">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto">
                        <h1 className="text-3xl font-semibold text-teal-600">Event Ed</h1>
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account

                    </p>
                    {errorMessage && (
                        <div className="text-red-500 mt-2 text-center">{errorMessage}</div>
                    )}

                    <form onSubmit={handleLogIn}>
                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                type="email"
                                name="email"
                                ref={emailRef}
                                placeholder="Email Address"
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-3 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                required
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                            />
                            {/* Show/Hide Password */}
                            <div className="m-0.5" onClick={() => setShowPassword(!showPassword)}>
                                <span className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm font-medium">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <button type="submit" className="btn px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
                <Toaster />
                <div className="flex items-center justify-center py-4 text-center bg-gray-200 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                    <NavLink to='/SignUp' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Sign Up</NavLink>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
