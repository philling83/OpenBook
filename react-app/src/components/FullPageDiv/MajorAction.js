import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as deckActions from "../../store/decks";

import "./MajorAction.css";

const MajorAction = (props) => {
	const deck = useSelector((state) => state.deck.deck);

	useEffect(() => {}, [deck, deck.id]);

	const dispatch = useDispatch();

	const cancelPreview = () => {
		return dispatch(deckActions.clearDeck());
	};

	return (
		<div className="majorActionDiv">
			{!deck.id && (
				<>
					<div className="majorDiv assignmentDiv">Current Assignments</div>
					<div className="majorDiv studentDiv">Recent Assignments</div>
					<div className="majorDiv videoDiv">Students</div>
				</>
			)}
			{deck.id && (
				<>
					<button className="majorActionCancel" onClick={cancelPreview}>
						<i className="fas fa-window-close"></i>
					</button>
					<div className="cardView">
						{deck.cards.map((card, i) => (
							<>
								<div key={card.title.concat(i)} className="cardDiv">
									<div className="deckText">
										<div className="previewText">{card.name}</div>
                                        <div className="previewText">Subject: {card.subject}</div>
										<div>Question: {card.title}</div>
										<div className="previewText">
											{card.possible_answers.map((choice, i) => (
												<li className="previewChoice" key={choice.concat(i)}>
													{choice}
												</li>
											))}
										</div>
                                        <div className="previewText">Answer: {card.answer}</div>
                                        < div className="previewText">Created By: {deck.user.username}</div>
									</div>
								</div>
							</>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default MajorAction;
