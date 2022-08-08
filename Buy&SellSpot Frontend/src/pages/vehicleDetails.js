import axios from 'axios'
import React, { Component, state } from 'react'
import { Button, Card, CardDeck, Col, Container, Row } from 'react-bootstrap'
import Navbar from '../components/Navbar'

class vehicleDetails extends Component {

    state = {
        id: this.props.match.params.id,
        vehicleName: '',
        vehicleModel: "",
        vehicleMileage: "",
        vehicleYear: "",
        vehicleTransmission: "",
        vehiclePrice: "",
        contact: "",
        pimage: "",
        config: {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:90/product/single/' + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    _id: response.data._id,
                    vehicleName: response.data.vehicleName,
                    vehicleModel: response.data.vehicleModel,
                    vehicleMileage: response.data.vehicleMileage,
                    vehicleYear: response.data.vehicleYear,
                    vehicleTransmission: response.data.vehicleTransmission,
                    vehiclePrice: response.data.vehiclePrice,
                    contact: response.data.contact,
                    pimage: response.data.pimage,

                })
            })
    }
    render() {
        // window.name = this.state.vehicleName
        // window.model = this.state.vehicleModel
        // window.mileage = this.state.vehicleMileage
        // window.year = this.state.vehicleYear
        // window.transmission = this.state.vehicleTransmission
        // window.price = this.state.vehiclePrice
        // window.contact = this.state.contact
        return (
            <>
                <Navbar></Navbar>
                <div class="detailsMain">
                    <div class="vehicleInfo">
                        <p><img src={"http://localhost:90/image/VehicleImage/" + this.state.pimage} alt="img" /></p>
                    </div>
                    <div class="info">

                        <label className="detailsLable">Name:</label>
                        <p>{this.state.vehicleName}</p>
                        <br></br>

                        <label className="detailsLable">Vehicle Model:</label>
                        <p>{this.state.vehicleModel}</p>
                        <br></br>
                        <label className="detailsLable">Vehicle Mileage:</label>
                        <p>{this.state.vehicleMileage}</p>
                        <br></br>

                        <label className="detailsLable">Vehicle Year:</label>
                        <p>{this.state.vehicleYear}</p>
                        <br></br>

                        <label className="detailsLable">Name:</label>
                        <p>{this.state.vehicleTransmission}</p>
                        <br></br>

                        <label className="detailsLable">Vehicle Price:</label>
                        <p>{this.state.vehiclePrice}</p>
                        <br></br>

                        <label className="detailsLable">Seller's Contact:</label>
                        <p>{this.state.contact}</p>
                    </div>
                </div>

            </>
        )
    }
}

export default vehicleDetails