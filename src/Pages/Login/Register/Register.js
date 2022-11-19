import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        // console.log(event.target.name.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary text-center'>Please Register!!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' id='' placeholder='Your Name' />
                <br />
                <input type="email" name='email' id='' placeholder='Email Address' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Register" />

            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;