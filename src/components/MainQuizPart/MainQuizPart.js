import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Topics from '../Topics/Topics';
const MainQuizPart = () => {
    const [topics, setTopics] = useState([])
    useEffect( ()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(response => {
            setTopics(response.data.data)
        });
    },[])
    return (
        <div className='container mx-auto bg-red-300'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-4'>
            {
                topics.map(data => <Topics key={data.id} quiztopics={data}></Topics>)
            }
            </div>
        </div>
    );
};

export default MainQuizPart;