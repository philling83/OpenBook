import React from 'react';

import './MajorAction.css'

const MajorAction = (props) => {

    return (
        <div className='majorActionDiv'>
            {!props.preview &&
                <>
                    <div className='majorDiv assignmentDiv'>Current Assignments</div>
                    <div className='majorDiv studentDiv'>Recent Assignments</div>
                    <div className='majorDiv videoDiv'>Students</div>
                </>
            }
            {props.preview &&
                <div className='cardView'>
                    <div className='textDiv'>Deck Name</div>
                    <div className='cardDiv'>
                        <div className='deckText'>
                            <div>Card name</div>
                            <div>Created by</div>
                            <div>11/11/20</div>
                        </div>

                    </div>

                </div>
            }
        </div>
    )
}


export default MajorAction;
