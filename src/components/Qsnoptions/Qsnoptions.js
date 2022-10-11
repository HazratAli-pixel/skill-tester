import React from 'react';

const Qsnoptions = ({options,id, handlequiz, topicName}) => {
    return (
        <div>
            <div className='bg-white p-3 rounded-lg text-start'>
                <input className='' type="radio" id={options} name={id}/>
                <label className='pl-3' onClick={()=>handlequiz(options,id,topicName)} htmlFor={options}>{options}</label>
            </div>
            {/* <h1>{options}</h1> */}
        </div>
    );
};

export default Qsnoptions;