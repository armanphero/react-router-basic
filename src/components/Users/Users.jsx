import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    // console.log(users);
    return (
        <div>
            <h1 className='font-bold text-3xl text-center'>There are {users.length} users</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto my-3'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;