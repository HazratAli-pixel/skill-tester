import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Qsnoptions from '../Qsnoptions/Qsnoptions';

const Questions = ({allquestions, handlequiz, notify,topicName}) => {
        

    return (
        <div className='py-4 px-8'>
            <div className='bg-green-100 border-2 rounded-lg border-green-800 p-4'>
                <div className='flex justify-between pb-5'>
                    <h1 className='text-center font-bold'>{allquestions.question}</h1>
                    <span><EyeIcon onClick={()=>notify(allquestions.id)} className="h-6 w-6 text-blue-500"/></span>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-2'>
                    {
                        allquestions.options.map((option)=> <Qsnoptions key={option} topicName={topicName} id={allquestions.id} handlequiz={handlequiz} options={option}></Qsnoptions>)
                    }
                    <h1>{}</h1>
                </div>            
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Questions;