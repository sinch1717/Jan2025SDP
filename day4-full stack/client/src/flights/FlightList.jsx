import { useState } from "react";
import PageHeader from "../header/PageHeader";

function FlightList() {
    // maintaining and creating the state
    const [flights, setFlights] = useState([ //state ref element, functional element to set state
        {id: '1010', number:'AI 765', airline_name: 'Air_India',
            source: 'Mysore', destination: 'Bangalore', 
            capacity: 180, price: 5000.0
        },
        {id: '1011', number:'AI 768', airline_name: 'Air_India',
            source: 'Bangalore', destination: 'Mysore', 
            capacity: 180, price: 5000.0
        }
    ]); 
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
