import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

import Card from '../CreateDeck/Card';

import './ViewDeck.css'

const ViewDeck = () => {
    const deck = useSelector((state) => state.deck.deck);
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);
    const scoreArray = new Array(deck.cards.length).fill('~')
    const [scores, setScores] = useState(scoreArray)

    useEffect(() => {}, [deck, deck.id]);

    const nextCard = () => {
        let tempCounter = counter + 1
        if (deck.cards[tempCounter]) {
            setCounter(tempCounter)
        } else {
            setCounter(0)
        }
    }

    const prevCard = () => {
        let tempCounter = counter - 1;
        if (deck.cards[tempCounter]) {
            setCounter(tempCounter)
        } else {
            setCounter(0)
        }
    }

    const updateScore = () => {
        const tempArray = scores;
        let tempCounter = 0;

        const score = tempArray.reduce((acc, el) => {
            if (el === 'Hit') {
                tempCounter++
                return acc + 1
            } else if (el === 'Miss'){
                tempCounter++
                return acc
            } else {
                return acc
            }
        }, 0)

        const newScore = Math.round((score/tempCounter) * 100)
        setScore(newScore)
    }

    const resetDeck = () => {
        setCounter(0)
        setScore(0)
        setScores(scoreArray)
    }

    const handleGuess = (i) => {
        let tempArray = scores;
        let currentCard = deck.cards[counter]

        if (!scores.includes('~')) return

        if (currentCard.possible_answers[i] === currentCard.answer) {
            tempArray.splice(counter, 1, 'Hit');
            updateScore();
            setTimeout(() => {
                nextCard();
            }, 800)
        } else {
            tempArray.splice(counter, 1, 'Miss');
            updateScore();
            setTimeout(() => {
                nextCard();
            }, 800)
        }

        setScores([...tempArray]);
    }

    const hightlightScore = (scoreIndex) => {
        let litScore = counter === scoreIndex ? 'litScore' : null;
        return litScore;
    }

    return (
        <>
        {deck.cards.length !== 0 &&
            <div className='viewDeckContainer'>
                <div className='sideDiv resetDeck' onClick={resetDeck}>Reset</div>

                <div className='scoreDiv'>
                    <div className='scoreText'>{`~ Score ${score}% ~`}</div>
                    {scores.map((cardScore, i) => (
                        <div className={`hitOrMiss ${hightlightScore(i)}`} key={i.toString()}>{cardScore}</div>
                    ))}
                </div>

                <div className='viewDeckDiv'>
                    <div className='flipperDiv'>
                        <div className='closeButtonDiv flipperButtonDiv' onClick={prevCard}>
                            <div className='closeInnerDiv'></div>
                            <div className='flipperButton backButton fas fa-arrow-circle-up'></div>
                        </div>
                        <div className='closeButtonDiv flipperButtonDiv forwardButton' onClick={nextCard}>
                            <div className='closeInnerDiv'></div>
                            <div className='flipperButton forwardButton fas fa-arrow-circle-down'></div>
                        </div>
                    </div>

                    <div className='threeCardDiv'>
                        {counter > 0 &&
                            <div className='cardHolder topCard'>
                                <Card
                                    confirm={false}
                                    title={deck.cards[counter-1].title}
                                    choices={deck.cards[counter-1].possible_answers}
                                    answer={deck.cards[counter-1].answer}
                                />
                            </div>
                        }
                        <div className='cardHolder middleCard'>
                            <Card
                                confirm={false}
                                title={deck.cards[counter].title}
                                choices={deck.cards[counter].possible_answers}
                                handleGuess={handleGuess}
                                answer={deck.cards[counter].answer}
                                completedArray={scores}
                                counter={counter}
                            />
                        </div>
                        {counter + 1 !== deck.cards.length &&
                            <div className='cardHolder bottomCard'>
                                <Card
                                    confirm={false}
                                    title={deck.cards[counter+1].title}
                                    choices={deck.cards[counter+1].possible_answers}
                                    answer={deck.cards[counter+1].answer}
                                />
                            </div>
                        }
                    </div>
                </div>
                <div className='bookFooter'></div>
            </div>
        }
        </>
    )
}

export default ViewDeck
