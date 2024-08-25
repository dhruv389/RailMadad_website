import React, { useRef, useState } from 'react'
import { auth } from "../firebase/firebase"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const formRef = useRef(null);
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email, password);
        try {
            
            const user=await signInWithEmailAndPassword(auth, email, password);
            // Handle successful sign-up (e.g., redirect to dashboard)
            console.log('Sign-in successful!');
            console.log(user)
        } catch (error) {
            // setError(error.message);
            console.log(error);
            
        }
       
    };
    
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="bg-white p-16 rounded-lg shadow-2xl w-2/3">
                <h2 className="text-3xl font-bold mb-10 text-center">Login</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full p-3 rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 py-3 rounded-lg text-white shadow-xl hover:bg-blue-700">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login