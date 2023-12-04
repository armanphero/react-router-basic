import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetail = () => {
    const user = useLoaderData();
    // console.log(user);
    const { name, email, website, phone, address, id } = user;
    const navigate = useNavigate();
    const handleBackBtn = () => {
        navigate(-1);
    }
    return (
        <div className='border border-2 border-red-300 md:w-[30%] mx-auto rounded-md p-4 my-4'>
            <h1 className='text-3xl my-2'>User details here</h1>
            <h1>Name : {name}</h1>
            <h1>User id : {id}</h1>
            <p>Email : {email}</p>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>
            <div>
                {
                    Object.keys(address).map((singleAddress, index) => {
                        if (singleAddress !== 'geo') {
                            return <p key={index}>{singleAddress} : {address[singleAddress]}</p>
                        }
                    })
                }
            </div>
            <button onClick={handleBackBtn} className='bg-blue-500 py-2 px-4 text-white rounded-md'>Go Back</button>
        </div>
    );
};

export default UserDetail;