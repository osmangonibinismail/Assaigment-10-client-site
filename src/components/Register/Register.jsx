import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const Register = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photoURL: '',
        password: '',
        showPassword: false,
    })

    const togglePasswordVisibility = () => {
        setFormData({
            ...formData,
            showPassword: !formData.showPassword
        });
    };
    const { createUser } = useContext(AuthContext)
    const handleRegister = async (event) => {
        event.preventDefault()

        // Password validation regex patterns
        const uppercaseRegex = /^(?=.*[A-Z])/;
        const lowercaseRegex = /^(?=.*[a-z])/;
        const lengthRegex = /^.{6,}$/;

        // Check if name, email, password, and photoURL fields are empty
        if (!formData.name.trim()) {
            toast.error('Name is required.');
            return;
        }
        if (!formData.email.trim()) {
            toast.error('Email is required.');
            return;
        }
        if (!formData.password){
            toast.error('Password is required.');
            return;
        }

        try {
            const signInMethod = await fetchSignInMethodsForEmail(auth, formData.email)
            if (signInMethod && signInMethod.length > 0) {
                toast.error('email already exist')
                return
            }
            const user = await createUser(formData.email, formData.password, formData.photoURL, formData.name)
            toast.success('user register success')
            setFormData({
                name: '',
                email: '',
                photoURL: '',
                password: '',
                showPassword: false,
            })
            navigate(location?.state ? location.state : '/');
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                toast.error('Email already exists. Please use a different email.');
            } else {
                toast.error('Error registering user: ' + error.message);
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    return (
        <div className="hero min-h-screen bg-teal-950 mt-20 mb-20" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-white">Register Now!</h1>
                    <p className="py-6 text-white">Registration process by providing name, email, and password, upload a photo for further participation.If you have an account, log in first.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your email" className="input input-bordered" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" required value={formData.photoURL} onChange={handleChange} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="mb-4 relative">
                                <input type={formData.showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered mb-4 w-full px-4 py-2" required value={formData.password} onChange={handleChange} />
                                <span type="button" className="absolute top-3 right-3"
                                    onClick={togglePasswordVisibility}>
                                    {
                                        formData.showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="mb-2">
                            <input type="checkbox" name="terms" id="terms" />
                            <label className="ml-2" htmlFor="terms">Accept our <a href="">Terms an Conditions</a></label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    {/* {
                        registerError && <p className="text-red-700  text-center text-2xl">{registerError}</p>
                    } */}
                    {/* {
                        success && <p className="text-green-600 text-center text-2xl">{success}</p>
                    } */}

                    <p className="text-center mt-4">already account?  please<Link className="" to='/login'><button className="btn btn-link font-bold">Login</button></Link></p>
                    {/* <button onClick={handleGoogleSignIn} className="border border-indigo-600 btn mt-5 mb-2 ml-5 mr-5 font-bold text-xl">
                        <FaGoogle></FaGoogle>
                        <p className="ml-3">Register with Google</p>
                    </button>
                    <button onClick={handleGithubSignIn} className="border border-indigo-600 btn mt-2 mb-8 ml-5 mr-5 font-bold text-xl">
                        <FaGithub></FaGithub>
                        <p className="ml-3">
                            Register with Github</p>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Register;