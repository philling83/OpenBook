import React from 'react'

import './MinorAction.css'

const MinorAction = () => {
    return (
        <div class='minorActionDiv'>
            <div class='buttonDiv'>
                <a href='/createDeck' class='createButton'>Create Deck</a>
                <button class='folderButton'>BONUS Folder+</button>
            </div>
            <div class='sortDiv'>
                <label for="selectButton">BONUS Sort by:</label>
                <select class='selectButton'>
                    <option>Recent</option>
                    <option>Title</option>
                    <option>Author</option>
                </select>
            </div>
        </div>
    )
}

export default MinorAction;
