import { useEffect, useState } from "react";
import PageHeader from "../header/PageHeader";
import axios from 'axios';

function FlightList() {
    // maintaining and creating the state
    const [flights, setFlights] = useState([]); 
    const readAllFlights = async () => {
        try {
            const baseURL = 'http://localhost:8080'
            const response = await axios.get(`${baseURL}/flights`);
            setFlights(response.data);
        } catch(error) {
            alert('Server Error');
        }
    };
    useEffect(()=> {readAllFlights();}, []); // {} handles aftermount, before unmount; [] handles after update (parts of component lifecycle)

    //initialize with either JSON, array or any primitive data
    // state is immutable
    // using setFlights for the changes to be reflected in the components

    return (
        <>
            <PageHeader PageNumber={1}/>
            <h3>List of Flights</h3>
            <div className="container">
                <table className="table table-primary table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Flight Number</th>
                            <th scope="col">Airline Name</th>
                            <th scope="col">Source</th>
                            <th scope="col">Destination</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { flights.map ( (flight) => {
                            return (
                            <tr>
                                <th scope="row">{flight.number}</th>
                                <td>{flight.airline_name}</td>
                                <td>{flight.source}</td>
                                <td>{flight.destination}</td>
                                <td>
                                    <a href={`/flights/edit/${flight.id}`} className="btn btn-warning">Edit Price</a>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                            );
                        })}

                        
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FlightList;
