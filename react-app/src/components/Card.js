import React from "react";

const Card = (props) => {
	const card = props.card;

	return (
		<div key={card.id}>
			<div className="card-holder">
				<p>Subject: {card.subject}</p>
				<p>Question: {card.title}</p>
				<p>Choices</p>
				<ul>
					{card.possible_answers.map((choice) => (
						<li key={choice}>{choice}</li>
					))}
				</ul>
				<p>Answer: {card.answer}</p>
				<p>Image: {card.image}</p>
			</div>
		</div>
	);
};

export default Card;
