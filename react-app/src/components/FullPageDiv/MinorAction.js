import React from 'react'

import './MinorAction.css'

const MinorAction = () => {
    return (
        <div className='minorActionDiv'>
            <div className='buttonDiv'>
                <a href='/createDeck' className='createButton'>Create Deck</a>
                <button className='folderButton'>BONUS Folder+</button>
            </div>
            <div className='sortDiv'>
                <label for="selectButton">BONUS Sort by:</label>
                <select className='selectButton'>
                    <option>Recent</option>
                    <option>Title</option>
                    <option>Author</option>
                </select>
            </div>
        </div>
    )
}

export default MinorAction;
