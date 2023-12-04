import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, phone, email, id} = user;
    return (
        <div className='border border-2 border-sky-300 p-3'>
            <h1>Name : {name}</h1>
            <p>Phone : {phone}</p>
            <p className='mb-3'>Email : {email}</p>
            <Link to={`/user/${id}`} className='bg-blue-500 text-white py-2 px-4 rounded-md'>Show Detail</Link>
        </div>
    );
};

export default User;