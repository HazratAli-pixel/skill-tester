import React from 'react';

const Qsnoptions = ({options,id}) => {
    return (
        <div>
            <div className='bg-white p-3'>
                <input type="radio" id={options} name={id} value={options}/>
                <label htmlFor={options}>{options}</label>
            </div>
            {/* <h1>{options}</h1> */}
        </div>
    );
};

export default Qsnoptions;