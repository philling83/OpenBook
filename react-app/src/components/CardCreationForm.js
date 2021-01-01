import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cardActions from "../store/cards"

const CardCreationForm = () => {
	const [title, setTitle] = useState("");
	const [subject, setSubject] = useState("");
	const [possible_answers, set_possible_answers] = useState("");
	const [answer, setAnswer] = useState("");
	const [image, setImage] = useState("");
    const createdBy = useSelector(state => state.session.user.id);
    // let createdBy = 1;

    const dispatch = useDispatch();

	const updateTitle = (e) => {
		setTitle(e.target.value);
	};
	const updateSubject = (e) => {
		setSubject(e.target.value);
	};
	const update_possible_answers = (e) => {
		set_possible_answers(e.target.value);
	};
	const updateAnswer = (e) => {
		setAnswer(e.target.value);
	};
	const updateImage = (e) => {
		setImage(e.target.value);
	};

	const handleSubmit = (e) => {
        e.preventDefault();
        console.log(createdBy)
        const formattedAnswers = possible_answers.split(", ")

        const formData = {
            title,
            subject,
            possible_answers: formattedAnswers,
            answer,
            image,
            created_by: createdBy
        }

        return dispatch(cardActions.addCard(formData))
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label className="card-creation-label" htmlFor="title">
						Question
					</label>
					<input
						className="card-creation-field"
						type="text"
						name="title"
						value={title}
						onChange={updateTitle}
						placeholder="Your Question"
					/>
				</div>
				<div>
					<label className="card-creation-label" htmlFor="subject">
						Subject
					</label>
					<input
						className="card-creation-field"
						type="text"
						name="subject"
						value={subject}
						onChange={updateSubject}
						placeholder="Subject (e.g. Math, Spanish, History)"
					/>
				</div>
				<div>
					<label className="card-creation-label" htmlFor="possible_answers">
						Choices
					</label>
					<input
						className="card-creation-field"
						type="text"
						name="possible_answers"
						value={possible_answers}
						onChange={update_possible_answers}
						placeholder="Separate choices with commas"
					/>
				</div>
                <div>
                    <label className="card-creation-label" htmlFor="answer">Answer</label>
                    <input
                        className="card-creation-field"
                        type="text"
                        name="answer"
                        value={answer}
                        onChange={updateAnswer}
                        placeholder="The correct answer"
                    />
                </div>
                <div>
                    <label className="card-creation-label" htmlFor="image">Image (optional)</label>
                    <select
                        className="card-creation-field"
                        value={image}
                        onChange={updateImage}
                        placeholder="Select an image"

                    >
                        <option value="null">No image</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </div>
                <button type="submit">Create Card</button>
			</form>
		</>
	);
};

export default CardCreationForm;
