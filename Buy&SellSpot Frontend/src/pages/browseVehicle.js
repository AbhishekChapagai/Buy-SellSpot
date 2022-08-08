import axios from 'axios';
import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import '../components/css/style.css'
import { Link } from 'react-router-dom'

class browseVehicle extends Component {
    state = {
        products: [],
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    };

    // gonext(id) {
    //     // this.props.history.push(`//${id}`)
    // }

    componentDidMount() {
        axios.get("http://localhost:90/product/showall")
            .then((response) => {
                console.log(response)
                this.setState({
                    products: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <>
                <Navbar></Navbar>
                <div class="displayMain">
                    <div class="showProduct">
                        {
                            this.state.products.map((product) => {
                                return (
                                    <div class="product">
                                        <p><img src={"http://localhost:90/image/VehicleImage/" + product.pimage} alt="img" /></p>
                                        <p>Name: &nbsp;
                                                {
                                                product.vehicleName
                                            }
                                        </p>
                                        <p>
                                            <Link to={"/vehicleDetails/" + product._id}> <button className="btnView" >DETAILS</button></Link>
                                        </p>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>



            </>
        )
    }
}

export default browseVehicle;