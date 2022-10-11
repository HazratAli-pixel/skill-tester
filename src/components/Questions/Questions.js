import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import Qsnoptions from '../Qsnoptions/Qsnoptions';

const Questions = ({allquestions}) => {
    return (
        <div className='bg-red-100 py-4 px-8'>
            <div className='bg-green-100 border-2 rounded-lg border-green-800 p-5'>
                <div className='flex justify-between'>
                    <h1 className='text-center'>{allquestions.question}</h1>
                    <span><EyeIcon className="h-6 w-6 text-blue-500"/></span>
                </div>
                <div className='bg-orange-200 grid grid-cols-2 gap-4'>
                    {
                        allquestions.options.map(option=> <Qsnoptions key={option} options={option}></Qsnoptions>)
                    }
                    <h1>{}</h1>
                </div>            
            </div>
        </div>
    );
};

export default Questions;