import React from 'react';

import './MajorAction.css'

const MajorAction = (props) => {
    return (
    <div class='majorActionDiv'>
        <div class='majorDiv assignmentDiv'>Current Assignments</div>
        <div class='majorDiv studentDiv'>Recent Assignments</div>
        <div class='majorDiv videoDiv'>{props.thirdActionDisplay}</div>
    </div>
    )
}

export default MajorAction;
