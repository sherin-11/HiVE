import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Bookingscreen() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [room, setRoom] = useState(null);
    const { roomid } = useParams();

   

    useEffect(() => {
        const fetchRoomById = async () => {
            try {
                const response = await axios.post('/api/rooms/getroombyid', { roomid });
                const responseData = response.data;
                setRoom(responseData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        };

        fetchRoomById();
    }, [roomid]);

    return (
        <div className='bs'>
            {loading ? (
                <h1>Loading..</h1>
            ) : error ? (
                <h1>Error..</h1>
            ) : room ? (
                <div className="row">
                    <div className="col-md-5">
                        <h1>{room.name}</h1>
                        {room.imageurls && room.imageurls.length > 0 && (
                            <img src={room.imageurls[0]} className="bigimg" alt="Room" />
                        )}
                    </div>
                    <div className="col-md-5">
                        <div>
                            <h1>Booking Details</h1>
                            <hr />
                            <b><p>Name:</p></b>
                            <p>MaxCount: {room.maxcount}</p>
                        </div>
                        <div>
                            <h1>Amount</h1>
                            <hr />
                            <p>Rent: {room.rent} </p>
                            <p>Total Amount: {room.rent}</p>
                        </div>
                        <div  style={{float: 'right '}}>
                        <button className='btn btn-primary'>Pay Now</button></div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Bookingscreen;
