import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <p className='font-extrabold text-start'>Total Quiz : {quiztopics.total}</p>
          <div className="card-actions justify-end">
            <Link to={`quiz/${quiztopics.id}`} className="btn btn-primary">Start Practice <FontAwesomeIcon className='pl-3' icon={faArrowRight}/> </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Topics;