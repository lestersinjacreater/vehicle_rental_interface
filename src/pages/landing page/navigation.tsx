import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // State to manage the visibility of the login and registration forms
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const [isRegisterVisible, setIsRegisterVisible] = useState(false);

    // Open the login form
    const handleLoginClick = () => {
        setIsLoginVisible(true);
        setIsRegisterVisible(false); // Close register form if open
    };

    // Open the registration form
    const handleRegisterClick = () => {
        setIsRegisterVisible(true);
        setIsLoginVisible(false); // Close login form if open
    };

    // Handle login form submission
    const handleLoginSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
    
        // Call your login API here and handle the response
        console.log('Logging in with:', { email, password });
        // After successful login, you can redirect or perform other actions
        setIsLoginVisible(false); // Close the login form
    };

    // Handle registration form submission
    const handleRegisterSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const fullName = e.currentTarget.fullName.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
    
        // Call your registration API here and handle the response
        console.log('Registering with:', { fullName, email, password });
        // After successful registration, you can redirect or perform other actions
        setIsRegisterVisible(false); // Close the registration form
    };

    // Handle clicks on the modal background to close forms
    const handleModalClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const target = e.target as HTMLDivElement;
        if (target.classList.contains('modal-background')) {
            setIsLoginVisible(false);
            setIsRegisterVisible(false);
        }
    };

    return (
        <div>
            <nav className="navbar bg-base-100 shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/">WHY CHOOSE US</Link></li>
                            <li>
                                <Link to="/">AVAILABLE VEHICLES</Link>
                                <ul className="p-2">
                                    <li><Link to="/">AVAILABLE BRANDS</Link></li>
                                    <li><Link to="/">AVAILABLE BODY TYPES</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/">HOW WE WORK</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl text-white">DRILL WHEELS</Link>
                </div>
                <div className="navbar-end">
                    <button onClick={handleRegisterClick} className="btn bg-bl text-white">REGISTER</button>
                    <button onClick={handleLoginClick} className="btn text-white">LOGIN</button>
                </div>
            </nav>

            {/* Login Card */}
            {isLoginVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 modal-background" onClick={handleModalClick}>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Login</h2>
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-webcolor" placeholder="Email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-webcolor" placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn bg-black text-white  w-full">Login</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Register Card */}
            {isRegisterVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 modal-background" onClick={handleModalClick}>
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Register</h2>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Full Name</label>
                                <input type="text" name="fullName" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-webcolor" placeholder="Full Name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-webcolor" placeholder="Email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-webcolor" placeholder="Password" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Confirm Password</label>
                                <input type="password" name="confirmPassword" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-webcolor" placeholder="Confirm Password" required />
                            </div>
                            <button type="submit" className="btn bg-black text-white   w-full">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
