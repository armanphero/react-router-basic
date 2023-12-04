import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorMessage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1 className='text-2xl text-center font-bold my-5'>Ops! It looks like you lost the way.</h1>
            <h1 className='text-5xl font-bold text-red-400 text-center'>{error?.status} {error?.statusText}</h1>
            <h1 className='text-5xl font-bold text-red-400 text-center'>{error?.data} {error?.statusText}</h1>
        </div>
    );
};

export default ErrorMessage;