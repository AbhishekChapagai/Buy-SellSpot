import axios from 'axios'
import React, { Component, state } from 'react'
import Navbar from '../components/Navbar'
import '../components/css/style.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


class Profile extends Component {

    state = {
        name: '',
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }

    componentDidMount() {
        const id = localStorage.getItem("userid");
        console.log(id)
        axios.get('http://localhost:90/user/profile/' + id)
            .then((response) => {
                console.log(response)
                this.setState({
                    name: response.data.name,
                    email: response.data.email,

                    phoneNumber: response.data.phoneNumber,
                    address: response.data.address,
                })
            })
    }
    render() {

        return (
            <>
                <Navbar></Navbar>
                <div class="userMain">
                    <div class="userbg">

                    </div>
                    <div class="uInfo">
                        <h1>PROFILE INFORMATION</h1>
                        <br></br>
                        <label>Name:</label>

                        <p>{this.state.name}</p>
                        <br></br>
                        <label>Email:</label><br></br>
                        <p>{this.state.email}</p>
                        <br></br>
                        <label>Phone Number:</label><br></br>
                        <p>{this.state.phoneNumber}</p>
                        <br></br>
                        <label>Address:</label><br></br>
                        <p>{this.state.address}</p><br></br>
                       <Link to='/updateProfile'> <button class="btnEdit" >EDIT PROFILE</button></Link>
                    </div>
                </div>
                <Footer></Footer>

            </>
        )
    }
}

export default Profile