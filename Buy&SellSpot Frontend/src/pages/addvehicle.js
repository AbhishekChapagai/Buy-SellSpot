import React, { Component, state, changeHandler, submitLogin } from "react";
import axios from 'axios';
import Navbar from "../components/Navbar";
import '../components/css/style.css'
import Footer from "../components/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class addvehicle extends Component {
    state = {
        userid: '',
        vehicleName: '',
        vehicleModel: '',
        vehicleMileage: '',
        vehicleYear: '',
        vehicleTransmission: '',
        vehiclePrice: '',
        contact: '',
        pimage: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

    }
    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    fileHandler = (e) => {
        this.setState({
            pimage: e.target.files[0]
        })
    }

    componentDidMount() {
        const userid = localStorage.getItem("userid")
        this.setState({
            userid: userid
        })
    }

    proAddMethod = (e) => {
        e.preventDefault();
        const data = new FormData()

        data.append('userid', this.state.userid)
        data.append('pimage', this.state.pimage)
        data.append('vehicleName', this.state.vehicleName)
        data.append('vehicleModel', this.state.vehicleModel)
        data.append('vehicleMileage', this.state.vehicleMileage)
        data.append('vehicleYear', this.state.vehicleYear)
        data.append('vehicleTransmission', this.state.vehicleTransmission)
        data.append('vehiclePrice', this.state.vehiclePrice)
        data.append('contact', this.state.contact)


        axios.post("http://localhost:90/product/insert", data)
            .then((response) => {
                console.log(response)
                toast.success('Vehicle Added', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((err) => {
                console.log(err.response)
                toast.error('Enter a valid information', {
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
        return (
            <div>
                <Navbar></Navbar>
                <div class="vehicleImg"><br></br><br></br><br></br>
                    <p>WANT TO ADD YOUR VEHICLE FOR SALE?</p>
                </div>


                <div class="addMain">

                    <div class="addImage">

                    </div>

                    <form class="addForm">
                        <div class="h1container">
                            <h1>POST YOUR VEHICLE <i class="fas fa-feather-alt"></i></h1>
                        </div>
                        <div class="addContainer">

                            <label className="addLabel"><b>Vehicle Company Name</b></label>
                            <input type="text"
                                value={this.state.vehicleName}
                                name="vehicleName"
                                placeholder="Enter Vehicle Name"
                                onChange={this.inputHandler}

                                class="addInput" />

                            <label className="addLabel"><b>Vehicle Model</b></label>
                            <input type="text"
                                value={this.state.vehicleModel}
                                name="vehicleModel"
                                placeholder="Enter Vehcile Model"
                                onChange={this.inputHandler}
                                class="addInput" />

                            <label className="addLabel"><b>Vehicle Mileage</b></label>
                            <input type="text"
                                value={this.state.vehicleMileage}
                                name="vehicleMileage"
                                placeholder="Enter in Km per liter"
                                onChange={this.inputHandler}
                                class="addInput" />

                            <label className="addLabel"><b>Vehicle Year</b></label>
                            <input type="text"
                                value={this.state.vehicleYear}
                                name="vehicleYear"
                                onChange={this.inputHandler}
                                placeholder="Enter Manufracture Date"
                                class="addInput" />

                            <label className="addLabel"><b>Vehicle Transmission Type</b></label>
                            <input type="text"
                                value={this.state.vehicleTransmission}
                                name="vehicleTransmission"
                                placeholder="Automatic or Manual or Electric"
                                onChange={this.inputHandler}
                                class="addInput" />

                            <label className="addLabel"><b>Vehicle Price</b></label>
                            <input type="text"
                                value={this.state.vehiclePrice}
                                name="vehiclePrice"
                                placeholder="Enter Vehicle price in Rs...."
                                onChange={this.inputHandler}
                                class="addInput" />

                            <label className="addLabel"><b>Your Contact No.</b></label>
                            <input type="text"
                                value={this.state.contact}
                                name="contact"
                                placeholder="Enter Your Contact No."
                                onChange={this.inputHandler}
                                class="addInput" />



                            <label className="addLabel"><b>Upload Vehicle Photo</b><br></br></label>
                            <input type="file" name="pimage" onChange={this.fileHandler} class="fileInput" /><br></br><br></br>
                            <button type="submit" class="btnAdd" onClick={this.proAddMethod}>ADD VEHICLE FOR SALE</button>

                        </div>
                    </form>

                </div>
                <Footer></Footer>
            </div >
        )
    }
}
export default addvehicle;