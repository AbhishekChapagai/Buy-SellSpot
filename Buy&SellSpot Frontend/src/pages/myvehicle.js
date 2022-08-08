import axios from 'axios';
import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import { Button, Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import '../components/css/style.css'
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class myVehicle extends Component {
    state = {
        products: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    };
    componentDidMount() {
        const id = localStorage.getItem("userid")
        axios.get("http://localhost:90/product/" + id)
            .then((response) => {
                console.log(response)
                this.setState({
                    products: response.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    deleteProduct = (pid) => {
        axios.delete('http://localhost:90/product/delete/' + pid, this.state.config)
            .then((response) => {
                console.log(response)
                toast.dark('Vehicle Successfully Deleted', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.location.href = "/myvehicle"
            })
            .catch((err) => {
                console.log(err.response)
            })

    }

    render() {
        return (
            <>
                <Navbar></Navbar>
                {this.state.products.map((product) => {
                    return (
                        <div className="myMain">
                            <h1>VEHCILES FROM YOU</h1>
                            <div className="myVehicleMain">
                                <div className="myVehicle">

                                    <img className="myVehicleImage" src={"http://localhost:90/image/VehicleImage/" + product.pimage} alt="img" />

                                    <label>Vehicle Name:</label>
                                    <p>
                                        {product.vehicleName}
                                    </p>
                                    <br></br>
                                    <p>

                                        <Link to={'/update/' + product._id} > <button className="btnUpdateVehicle" >UPDATE INFO</button></Link>
                                        <button className="btnDeleteVehicle" onClick={this.deleteProduct.bind(this, product._id)}>DELETE PRODUCT</button>

                                    </p>


                                </div>

                            </div>
                        </div>
                    )
                })}

            </>
        )
    }
}

export default myVehicle;