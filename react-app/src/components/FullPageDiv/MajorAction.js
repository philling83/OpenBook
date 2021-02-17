import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as deckActions from "../../store/decks";
import * as classActions from '../../store/classrooms'
import DisplayStudentsModal from '../Modals/DisplayStudentsModal'
import DisplayAssignmentsModal from '../Modals/DisplayAssignmentsModal'

import "./MajorAction.css";

const MajorAction = () => {
	const deck = useSelector((state) => state.deck.deck);
	const teacher_class_id = useSelector(state => state.session.user.classrooms_id)
	const dispatch = useDispatch();

	useEffect(() => {}, [deck, deck.id]);

	useEffect(()=> {
        dispatch(classActions.getRoom(teacher_class_id))
    }, [dispatch, teacher_class_id])




	const cancelPreview = () => {
		return dispatch(deckActions.clearDeck());
	};

	return (
		<div className="majorActionDiv">
			{!deck.id && (
				<>
					{/* <div className="majorDiv assignmentDiv">Current Assignments</div> */}
					<DisplayAssignmentsModal />
					<div className="majorDiv studentDiv">Reports</div>
					<DisplayStudentsModal />
				</>
			)}
			{deck.id && (
				<div className='deckPreviewDiv'>
					<div className="cardView">
						<div className='closeButtonDiv previewCloseButton' onClick={cancelPreview}>
							<div className='closeInnerDiv'></div>
							<i className='closeButton fas fa-window-close'></i>
						</div>
						{deck.cards.map((card, i) => (
							<div className='imageTextDiv'>
								<div key={card.title.concat(i)} className="cardDiv">
									<div className="previewQuestionText">{card.title}</div>
									<div className="cardHolder">
										{/* <div >{card.name}</div> */}
                                        {/* <div className="previewText">Subject: {card.subject}</div> */}
										<div className='choicesAnswerDiv'>
											<div className="previewChoicesText">
												{card.possible_answers.map((choice, i) => (
													<li className="previewChoice" key={choice.concat(i)}>
														{choice}
													</li>
												))}
											</div>
                                        	<div className="previewAnswerText">Answer: {card.answer}</div>
										</div>
									<div className='previewImage'>Image</div>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* <button className="majorActionCancel" onClick={cancelPreview}>
						<i className="fas fa-window-close"></i>
					</button> */}
				</div>
			)}
		</div>
	);
};

export default MajorAction;
