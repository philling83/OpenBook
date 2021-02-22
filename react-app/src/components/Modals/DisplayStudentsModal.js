import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import "./DisplayStudentsModal.css";

const customStyles = {
    overlay: {
        backgroundColor: 'none'
    },
    content: {
        position: 'absolute',
        top: '240px',
        left: '120px',
        height: '500px',
        width: '800px',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        outline: 'none',
        backgroundColor: 'rgb(248, 245, 245)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'rgb(32, 60, 87)',
        borderRadius: '5px',
        padding: '0px',
        border: '8px solid rgb(32, 60, 87)',
	},
}

	const DisplayStudentsModal = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const roomInfo = useSelector((state) => state.classroom.room);
	const dispatch = useDispatch();


	useEffect(() => {}, []);

	const toggleModal = (e) => {
		e.preventDefault();
		setModalOpen(!modalOpen);
	};

	const displayStudents = () => {
		return roomInfo.students.map((student, i) => {
			return (
				<h1 key={i} className="hardCode">
					{student.name}
				</h1>
			);
		});
	};

	return (
		<div>
			<div onClick={toggleModal} className="majorDiv videoDiv">
				Students
			</div>
			<Modal
				isOpen={modalOpen}
				onRequestClose={toggleModal}
				style={customStyles}
				contentLabel="Your Students"
				ariaHideApp={false}
			>
				{roomInfo ? (
					<div className="studentModalDiv">
						<div className="studentUpperDiv">
							<h1 className="editClassHeader">{`Teacher : ${roomInfo.teacher.username}`}</h1>
							<div
								className="closeButtonDiv .studentClose"
								onClick={toggleModal}
							>
								<div className="closeInnerDiv"></div>
								<i className="closeButton fas fa-window-close"></i>
							</div>
						</div>
						<div className="headersDiv">
							<div className="studentListHeader">
								You have {roomInfo.students.length} students
							</div>
							<div className="studentListHeader righthandHeader">
								Assignments Due
							</div>
						</div>
						<div className="studentsAndAssignments">
							<div className="studentModalList">
								{displayStudents()}
							</div>
							<div className="studentModalList rightHandList">
								{roomInfo.decks.map((deck, i) => (
									<h1 className="hardCode" key={i} id={deck}>
										{deck.name}
									</h1>
								))}
								;
							</div>
						</div>
					</div>
				) : null}
			</Modal>
		</div>
	);
};

export default DisplayStudentsModal;
