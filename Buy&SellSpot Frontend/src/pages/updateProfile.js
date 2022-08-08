import axios from 'axios'
import React, { Component, state } from 'react'
import Navbar from '../components/Navbar'
import '../components/css/style.css';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
class updateProfile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: "",
            phoneNumber: "",
            address: "",
            config: {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
        };
        this.submitUpdate = this.submitUpdate.bind(this)
    }
    componentWillMount() {
        this.getuserdata();
        console.log(this.state.headers)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    getuserdata = () => {
        axios.get("http://localhost:90/user/account", this.state.config)
            .then((response) => {
                const data = response.data.data;
                this.setState({
                    name: data.name,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    address: data.address,
                })
            }).catch((err) => {
                console.log(err);
            })
    }


    submitUpdate = (e) => {
        const userId = localStorage.getItem("userid");
        e.preventDefault();
        axios.put(`http://localhost:90/update/user/${userId}`, this.state, this.state.config)
            .then((response) => {
                alert("user updated successfully");
            }).catch((err) => {
                alert("error updating user");
            })
    }

    deleteAccount = () => {
        const userId = localStorage.getItem("userid");
        axios.delete(`http://localhost:90/user/delete/${userId}`, this.state.config)
            .then((response) => {
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                localStorage.removeItem('userid')
                toast.success('Login Successful', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.location.href = '/signin'
            })
            .catch((err) => {
                console.log(err)
                alert("error deleting this account")
            })
    }
    render() {

        return (
            <>
                <Navbar></Navbar>
                <div class="userupdateMain">
                    <div class="userupdatebg">

                    </div>
                    <form class="updateForm">
                        <div class="h1container">
                            <h1>UPDATE YOUR PROFILE</h1><br />
                        </div>
                        <div class="container">


                            <label for="name"><b>Name</b></label>
                            <input class="updateinput" type="text" name="name" value={this.state.name} onChange={this.changeHandler} />

                            <label for="email"><b>Email</b></label>
                            <input class="updateinput" type="text" name="email" value={this.state.email} onChange={this.changeHandler} />

                            <label for="phoneNumber"><b>Phone Number</b></label>
                            <input type="number" class="updateinput" name="phoneNumber" value={this.state.phoneNumber} onChange={this.changeHandler} />

                            <label for="address"><b>Address</b></label>
                            <input class="updateinput" type="text" name="email" value={this.state.address} onChange={this.changeHandler} />


                            <br></br>
                            <div class="clearfix">
                                <button class="btnUpdate" type="submit" value="Update" onClick={this.submitUpdate} >UPDATE</button>
                                <button class="btnDelete" type="submit" value="Delete" onClick={this.deleteAccount} >DELETE</button>
                            </div>
                        </div>
                    </form>

                </div>
                <Footer></Footer>

            </>
        )
    }
}

export default updateProfile