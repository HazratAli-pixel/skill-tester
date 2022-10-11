import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Questions from '../Questions/Questions';

const Quiztest = () => {
    const {data} = useLoaderData();
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-12'>
                <div className='col-span-9'>    
                    {
                        data.questions.map(qsn => <Questions key={qsn.id} allquestions={qsn}></Questions>)
                    }
                </div>
                <div className='bg-slate-400 col-span-3'>
                    <div className='p-3 bg'>
                        <Profile></Profile>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiztest;