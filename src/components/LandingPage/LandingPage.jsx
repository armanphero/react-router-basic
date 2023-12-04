import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LandingPage = () => {
    const aiUniverses = useLoaderData();
    const data = aiUniverses.data.tools;
    // console.log(data);
    return (
        <div>
            <h1 className='text-5xl font-bold text-center my-4 text-blue-300'>This is landing page</h1>
            <div className='container mx-auto my-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    data.map(ai => <SingleAi ai={ai} key={ai.id}></SingleAi>)
                }
            </div>
        </div>
    );
};

const SingleAi = ({ ai }) => {
    const { image, name } = ai;
    return (
        <div className='card border border-2 border-blue-300 rounded-md p-3'>
            <img src={image} alt="" />
            <h1 className='text-3xl font-bold'>{name}</h1>
        </div>
    )
}

export default LandingPage;