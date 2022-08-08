import axios from "axios";
import { Component, state, changeHandler, componentDidMount, updateData } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

class UpdateProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vehicleName: '',
            vehicleModel: '',
            vehicleMileage: '',
            vehicleYear: '',
            vehicleTransmission: '',
            vehiclePrice: '',
            contact: '',
            id: this.props.match.params.id,
            Config: {
                headers: {

                    'authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }
        }
        this.updateData = this.updateData.bind(this)
    };
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    componentDidMount() {
        console.log(this.state.id)
        this.getproductdata();
    }

    getproductdata = () => {
        axios.get(`http://localhost:90/product/one/${this.state.id}`, this.state.config)
            .then((response) => {
                this.setState({
                    vehicleName: response.data.data[0].vehicleName,
                    vehicleModel: response.data.data[0].vehicleModel,
                    vehicleMileage: response.data.data[0].vehicleMileage,
                    vehicleYear: response.data.data[0].vehicleYear,
                    vehicleTransmission: response.data.data[0].vehicleTransmission,
                    vehicleYear: response.data.data[0].vehicleYear,
                    contact: response.data.data[0].contact,
                })
                console.log(response)
            }).catch((err) => {
                console.log(err);
            })
    }


    updateData = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:90/product/update/${this.state.id}`, this.state)
            .then((response) => {
                console.log(response)
                toast.success('Update Successful', {
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
            })
    }

    render() {
        return (

            <div className="updateVehicleMain">
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
                            onChange={this.changeHandler}

                            class="addInput" />

                        <label className="addLabel"><b>Vehicle Model</b></label>
                        <input type="text"
                            value={this.state.vehicleModel}
                            name="vehicleModel"
                            placeholder="Enter Vehcile Model"
                            onChange={this.changeHandler}
                            class="addInput" />

                        <label className="addLabel"><b>Vehicle Mileage</b></label>
                        <input type="text"
                            value={this.state.vehicleMileage}
                            name="vehicleMileage"
                            placeholder="Enter in Km per liter"
                            onChange={this.changeHandler}
                            class="addInput" />

                        <label className="addLabel"><b>Vehicle Year</b></label>
                        <input type="text"
                            value={this.state.vehicleYear}
                            name="vehicleYear"
                            onChange={this.changeHandler}
                            placeholder="Enter Manufracture Date"
                            class="addInput" />

                        <label className="addLabel"><b>Vehicle Transmission Type</b></label>
                        <input type="text"
                            value={this.state.vehicleTransmission}
                            name="vehicleTransmission"
                            placeholder="Automatic or Manual or Electric"
                            onChange={this.changeHandler}
                            class="addInput" />

                        <label className="addLabel"><b>Vehicle Price</b></label>
                        <input type="text"
                            value={this.state.vehiclePrice}
                            name="vehiclePrice"
                            placeholder="Enter Vehicle price in Rs...."
                            onChange={this.changeHandler}
                            class="addInput" />

                        <label className="addLabel"><b>Your Contact No.</b></label>
                        <input type="text"
                            value={this.state.contact}
                            name="contact"
                            placeholder="Enter Your Contact No."
                            onChange={this.changeHandler}
                            class="addInput" />


                        <button type="submit" class="btnAdd" onClick={this.updateData}>Update Vehicle Info</button>

                    </div>
                </form>
            </div>
        )

    }
}

export default UpdateProduct