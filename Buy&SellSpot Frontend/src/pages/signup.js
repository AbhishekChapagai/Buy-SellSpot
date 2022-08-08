import axios from 'axios'
import React, { Component, useState } from 'react'
import Navbar from '../components/Navbar'
import '../components/css/style.css'
// import Sidebar from '../components/Sidebar'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class signup extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
    }
    senduserInfo = () => {
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address
        }
        axios.post("http://localhost:90/upload", data)
            .then((response) => {
                console.log(response);
                console.log(data);
                toast.success('Login Successful', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    transition: Bounce,
                });
            })
    }
    render() {
        return (
            <>
                <Navbar></Navbar>
                <div class="signupMain">
                    <div class="SignupBg">
                    </div>
                    <form class="signupForm">
                        <div class="h1container">
                            <h1>SIGN UP <i class="fas fa-feather-alt"></i></h1><br />

                        </div>
                        <div class="container">


                            <label for="name"><b>Name</b></label>
                            <input class="signupinput" type="text" placeholder="Enter Your Name" name="name" value={this.state.name} onChange={(event) => { this.setState({ name: event.target.value }) }} />

                            <label for="email"><b>Email</b></label>
                            <input class="signupinput" type="text" placeholder="Enter Your Email" name="email" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />

                            <label for="password"><b>Password</b></label>
                            <input type="password" class="signupinput" placeholder="Enter Your Password" name="password" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />

                            <label for="phoneNumber"><b>Phone Number</b></label>
                            <input type="number" class="signupinput" placeholder="Enter Your Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={(event) => { this.setState({ phoneNumber: event.target.value }) }} />

                            <label for="address"><b>Address</b></label>
                            <input class="signupinput" type="text" placeholder="Enter Your Address" name="email" value={this.state.address} onChange={(event) => { this.setState({ address: event.target.value }) }} />


                            <p>Creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
                            <br></br>
                            <div class="clearfix">
                                <button class="btnSignup" type="submit" value="Register" onClick={this.senduserInfo} >SIGN UP</button>
                            </div>
                        </div>
                    </form>

                </div>

            </>
        )
    }
}

export default signup;