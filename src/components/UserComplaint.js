import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/style.css';

const API_URL = 'http://localhost:3000/form';


const UserComplaint = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get(API_URL)
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section>
            <h1>Data List:</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.surname}</p>
                        <p>{item.phone}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default UserComplaint;