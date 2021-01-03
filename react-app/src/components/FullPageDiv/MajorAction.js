import React from 'react';

import './MajorAction.css'

const MajorAction = (props) => {
    return (
    <div className='majorActionDiv'>
        <div className='majorDiv assignmentDiv'>Current Assignments</div>
        <div className='majorDiv studentDiv'>Recent Assignments</div>
        <div className='majorDiv videoDiv'>Students</div>
    </div>
    )
}

export default MajorAction;
