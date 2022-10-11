import React from 'react';

const Qsnoptions = ({options}) => {
    return (
        <div>
            <div>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
            <label for="html">HTML</label>
            </div>
            <h1>{options}</h1>
        </div>
    );
};

export default Qsnoptions;