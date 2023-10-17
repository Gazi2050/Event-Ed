import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineUser } from "react-icons/ai";
import { FiMail, FiLock } from "react-icons/fi";
import {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider
} from 'firebase/auth';

import toast, { Toaster } from 'react-hot-toast';
import auth from '../../Firebase/Firebase.config';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handleGoogleSignUp = async () => {
        try {
            // Sign in with Google
            const googleSignInResult = await signInWithPopup(auth, googleProvider);
            const googleUser = googleSignInResult.user;
            toast.success(`Signed up as ${googleUser.displayName}`);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        }
    };

    const handleGitHubSignUp = async () => {
        try {
            // Sign in with GitHub
            const githubSignInResult = await signInWithPopup(auth, githubProvider);
            const githubUser = githubSignInResult.user;
            toast.success(`Signed up as  ${githubUser.displayName}`);
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.username.value;
        const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/;
        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should contain uppercase characters');
            return;
        } else if (!/[a-z]/.test(password)) {
            toast.error('Your password should contain lowercase characters');
            return;
        } else if (!/[0-9]/.test(password)) {
            toast.error('Your password should contain numbers');
            return;
        } else if (!passwordRegex.test(password)) {
            toast.error('Your password should contain special characters');
            return;
        }

        try {
            // Create the user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            toast.success(`Signed up as  ${email}`);
            // Update user's display name
            await updateProfile(user, {
                displayName: username,
            });


        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        }
    }

    return (
        <div className="flex flex-col-reverse lg:flex-row justify-around items-center lg:px-28">
            {/* Continue with social media buttons */}
            <div>
                <div className="m-5 lg:m-0">
                    <p className="text-sm md:text-lg lg:text-xl font-semibold">
                        <sup>____________________</sup> Continue with <sup>____________________</sup>
                    </p>
                    <NavLink onClick={handleGoogleSignUp} to="#" className="w-sm flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <FcGoogle className="text-2xl" />
                        <span className="mx-2">Sign Up with Google</span>
                    </NavLink>
                    <NavLink onClick={handleGitHubSignUp} to="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border border-gray-300 rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <FaGithub className="text-2xl text-black" />
                        <span className="mx-2">Sign Up with GitHub</span>
                    </NavLink>
                </div>
            </div>
            {/* Registration form */}
            <div className="md:my-5 lg:my-3 w-full max-w-sm mx-auto overflow-hidden bg-slate-50 rounded-lg shadow-md dark:bg-gray-800 pt-4">
                <div className="px-6 py-2">
                    <div className="flex justify-center mx-auto">
                        <h1 className="text-3xl font-semibold text-teal-600">Event Ed</h1>
                    </div>
                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Create account</h3>
                    <p className="mt-1 text-center text-gray-500 dark:text-gray-400">It's quick and easy.</p>
                    <form onSubmit={handleSignUp}>
                        {/* Username input */}
                        <div className="relative flex items-center mt-5">
                            <span className="absolute">
                                <AiOutlineUser className='m-4 text-xl' />
                            </span>
                            <input type="text" name="username" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                        </div>
                        {/* Email input */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <FiMail className='m-4 text-xl' />
                            </span>
                            <input type="email" required name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        </div>
                        {/* Password input */}
                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <FiLock className='m-4  text-xl' />
                            </span>
                            <input type={showPassword ? 'text' : 'password'} required name="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        </div>
                        {/* Show/Hide Password */}
                        <div className="m-0.5" onClick={() => setShowPassword(!showPassword)}>
                            <span className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm font-medium">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                        </div>
                        {/* Sign Up Button */}
                        <div className="flex items-center justify-center my-2">
                            <button type="submit" className="btn px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-700">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
                <Toaster />
                {/* Already have an account */}
                <div className="flex items-center justify-center py-4 text-center bg-gray-200 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>
                    <NavLink to="/LogIn" className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Log In</NavLink>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
