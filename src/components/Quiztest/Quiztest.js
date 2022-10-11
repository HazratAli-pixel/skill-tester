import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiztest = () => {
    const {data} = useLoaderData()
    console.log(data.questions[1]);
    return (
        <div className='container mx-auto'>
            {
                data.questions.map(qsn => <Questions key={qsn.id} allquestions={qsn}></Questions>)
            }
        </div>
    );
};

export default Quiztest;