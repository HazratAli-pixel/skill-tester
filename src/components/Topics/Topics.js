import React from 'react';

const Topics = ({quiztopics}) => {
    console.log(quiztopics);
    return (
        <div className='bg-red-300'>
            <div className='p-2 '>
            <div className='bg-teal-100 border border-teal-400 p-2 rounded-lg flex flex-col items-center p-5 h-full'>
                <h1>topics {quiztopics.name}</h1>
                {/* <img className='justify-self-center' style={{width:'200px'}} src={} alt="" /> */}
                {/* <h1>{country.name.common}</h1> */}
                {/* <Link to={`/country/${country.name.common}`} className='b bg-slate-400 p-3'>details</Link> */}
                {/* <div className="card w-96 glass">
  <figure><img src="https://placeimg.com/400/225/arch" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div> */}
            </div>
        </div>
        </div>
    );
};

export default Topics;