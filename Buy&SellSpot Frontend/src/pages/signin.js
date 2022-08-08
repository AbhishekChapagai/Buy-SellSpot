import { Component, state, changeHandler, submitLogin } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import '../components/css/style.css';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class signin extends Component {

    


    state = {
        email: "",
        password: "",
        loginCheck: false
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }

        )
    }
    submitLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/user/login", this.state)
            .then((response) => {
                localStorage.setItem("userid", response.data.data._id)
                if (response.data.success) {
                    this.setState({
                        loginCheck: true
                    })
                    toast.success('Login Successful', {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    localStorage.setItem('token', response.data.token)
                    localStorage.setItem('userid', response.data.data._id)
                    //   window.location.href = '/browsevehicle'
                } else {
                    this.setState({
                        loginCheck: false
                    })

                }

            })
            .catch((err) => {
                console.log(err.response)
                toast.error('Incorrect Email or Password', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
    }
    render() {
        // Redirect code
        if (this.state.loginCheck === true) {
            return <Redirect to='/browsevehicle' />
        }
        if (localStorage.getItem('token')) {
            return <Redirect to='/browsevehicle' />
        }
        return (

            <>
                <Navbar></Navbar>
                <div class="loginMain">
                    <div class="loginBg">
                    </div>
                    <form class="loginForm">
                        <div class="h1container">
                            <h1>LOGIN <i class="fas fa-sign-in-alt"></i></h1>
                        </div>
                        <div class="container">
                            <label for="email"><b>Email</b></label>
                            <input type="text" class="logininput" name="email" value={this.state.email} onChange={this.changeHandler} required placeholder="Enter Your Email " />

                            <label for="password"><b>Password</b></label>
                            <input type="password" class="logininput" name="password" value={this.state.password} onChange={this.changeHandler} required placeholder="Enter Your Password" />

                            <button className="btnSignin" type="submit" onClick={(e) => this.submitLogin(e)}>LOGIN</button>
                            <label>
                                <input type="checkbox" name="remember" /> Remember me
                            </label><br /><br />

                            <a href="/signup">Don't have an account?</a>
                        </div>

                    </form>
                </div>
                <Footer></Footer>
            </>
        )
    }
}
export default signin;