import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const Auth = getAuth(auth);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(Auth, email, password);
            setUser(userCredential.user);
            setLoading(false);
            return userCredential.user;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(Auth, email, password);
            setUser(userCredential.user);
            setLoading(false);
            return userCredential.user;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(Auth);
            setUser(null);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
