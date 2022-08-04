import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex items-center justify-center flex-col'>
            <p>Page not found</p>
            <LinkRouter
                to='/'
            >
                <button className='bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2 rounded-md'>Volver al home</button>
            </LinkRouter>

        </div>
    )
}

export default NotFound