import React from 'react';
import { NavLink } from 'react-router-dom';

const PublicDecks = () => {
    return (
        <div class='yourDecksDiv'>
            <div class='textDiv'>Public Decks</div>
            <div class='decksDiv'>
                <div class='yourFoldersDiv'>
                    <select class='folder'>
                        <option>Preschool</option>
                        <option>Nouns</option>
                        <option>Conjugation</option>
                    </select>
                    <select class='folder'>
                        <option>Kindergarten</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                    <select class='folder'>
                        <option>1st Grade</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                    <select class='folder'>
                        <option>2nd Grade</option>
                        <option>Animals</option>
                        <option>People</option>
                        <option>Plants</option>
                    </select>
                </div>
                <div class='allDecksDiv'>
                    <div class='deckDiv'>
                        <div class='deckText'>
                            <div>Deck name</div>
                            <div>Created by</div>
                            <div>11/11/20</div>
                        </div>
                        <div class='deckImage'>
                            <img src="" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PublicDecks;
