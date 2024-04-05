import React, { useState, useEffect } from 'react';
import axios from "axios";
import Room from '../components/Room';

function HomeScreen() {
    const [rooms, setRooms] = useState([]);
    const[loading , setloading] = useState();
    const[error, seterror] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setloading(true)
                const response = await axios.get('/api/rooms/getallrooms');
                const responseData = response.data; // Accessing the data property of the response
                setRooms(responseData);
                setloading(false) // Setting the state with the response data
            } catch (error) {
                seterror(true)
                console.log(error);
                setloading(false)
            }
        };

        fetchData();

        return () => {
            // Cleanup function if necessary
        };
    }, []); 

    return (
        <div className='container'>
            <div className='row justify-content-center mt-2'>
            {loading ? (
            <h1>Loading..</h1> 
        ) : error ? (
        <h1>Error</h1>
    ) : (
        rooms.map((room) =>{
                return <div className='com-md-9'>
                     < Room room={room} />
                </div> ;
        })
    )}
            </div>
        </div>
    );
}

export default HomeScreen;
