import React from 'react';
import { Link } from 'react-router-dom';

const Topics = ({quiztopics}) => {
    console.log(quiztopics);
    return (
    <div className='p-4'>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className='bg-black'><img className='w-full' src={quiztopics.logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{quiztopics.name}</h2>
          <p>Total Quiz : {quiztopics.total}</p>
          <div className="card-actions justify-between">
            <Link to={`quiz/${quiztopics.id}`} className="btn btn-primary">Buy Now</Link>
            <Link to={`quiz/${quiztopics.id}`} className="btn btn-primary">Buy Now</Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Topics;